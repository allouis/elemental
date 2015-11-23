import {assoc, compose, contains, filter, forEach, isNil, map, reject, tap} from 'ramda';
import {mergeIntoAudioGraph, removeKeysFromAudioGraphContaining} from '../../actions';
import computeAudioGraph from '../../audioHelpers/computeAudioGraph';
import React from 'react';
import store, {dispatch} from '../../store';

const {fromEvent, merge} = Rx.Observable;
const {EPSILON} = Number;

const controlPadId = 'controlPad';
let currentlyPlayingPitch = null;
let stopLastNoteOnNoteChange = true;

const cameraZ = 16;
const minZ = -128;
const sideLength = 1;
const maxDepth = 3 * sideLength;

const validRatio = x => x < 0 ?
  0 :
  x >= 1 ?
    1 - EPSILON :
    x;

const calculateXAndYRatio = e => {
  const {top, right, bottom, left} = e.target.getBoundingClientRect();
  const [width, height] = [right - left, bottom - top];
  const {clientX, clientY} = e.changedTouches && e.changedTouches[0] || e;
  const [x, y] = [clientX - left, clientY - top];
  return {xRatio: validRatio(x / width),
          yRatio: validRatio(y / height)};
};

let mouseInputEnabled = false;
let currentXYRatios = null;
let controlPadElement = null;
let renderLoopActive = null;
let cube = null;
let renderer = null;
let camera = null;
let scene = null;

const setRendererSize = () => {
  const rendererSize = innerWidth < innerHeight ?
    innerWidth :
    innerHeight * 0.8;
  renderer.setSize(rendererSize, rendererSize);
};

const renderLoop = _ => {
  if (!renderLoopActive) return;
  requestAnimationFrame(() => renderLoop());
  const controlPadHasNotBeenUsed = isNil(currentXYRatios);
  const {z} = cube.position;
  if (controlPadHasNotBeenUsed) return;
  if (currentlyPlayingPitch === null) {
    if (z > minZ - maxDepth) cube.position.z -= 1;
    renderer.render(scene, camera);
    return;
  }
  const {xRatio, yRatio} = currentXYRatios;
  const xMod = xRatio < 0.5 ?
   -(xRatio - 0.5) ** 2 :
   (xRatio - 0.5) ** 2;
  const yMod = yRatio < 0.5 ?
   -(yRatio - 0.5) ** 2 :
   (yRatio - 0.5) ** 2;
  const rotationBaseAmount = 0.01;
  const rotationVelocityComponent = 0.8;
  cube.rotation.x += rotationBaseAmount + rotationVelocityComponent * xMod;
  cube.rotation.y += rotationBaseAmount + rotationVelocityComponent * yMod;
  cube.rotation.z += rotationBaseAmount + rotationVelocityComponent * xMod * yMod;
  cube.position.x = (xRatio - 0.5) * cameraZ;
  cube.position.y = (0.5 - yRatio) * cameraZ;
  const returnVelocity = 8;
  if (z < 0) cube.position.z += z > -returnVelocity ? -z : returnVelocity;
  renderer.render(scene, camera);
};

const calculatePitch = xRatio => {
  const {scaleName, scales} = store.getState().scale;
  const scale = scales[scaleName];
  if (isNil(scale)) {
    stopLastNoteOnNoteChange = false;
    return xRatio * 12;
  }
  const {length} = scale.toArray();
  stopLastNoteOnNoteChange = true;
  const i = Math.floor((length + 1) * xRatio);
  return i < length ? scale(i) : scale(i) + 12;
};

const calculatePitchAndMod = ({xRatio, yRatio}) => ({pitch: calculatePitch(xRatio), modulation: yRatio});
const getNoteFromXYRatios = compose(assoc('id', controlPadId), calculatePitchAndMod);

const computeDispatchMergeAudioGraph = compose(dispatch,
                                               mergeIntoAudioGraph,
                                               computeAudioGraph);

export default class extends React.Component {
  componentDidMount () {
    const {instrument} = this.props;
    controlPadElement = document.querySelector('.control-pad');
    const input$ = merge(fromEvent(controlPadElement, 'touchstart'),
                         fromEvent(controlPadElement, 'touchmove'),
                         fromEvent(controlPadElement, 'mousedown'),
                         fromEvent(controlPadElement, 'mousemove'));
    const endInput$ = merge(fromEvent(controlPadElement, 'touchend'),
                            fromEvent(controlPadElement, 'mouseup'));

    input$
      .transduce(compose(map(tap(e => mouseInputEnabled = e.type === 'mousedown' ? true : mouseInputEnabled)),
                         reject(e => e instanceof MouseEvent && !mouseInputEnabled),
                         map(e => currentXYRatios = calculateXAndYRatio(e)),
                         map(xYRatios => ({...getNoteFromXYRatios(xYRatios)})),
                         map(tap(({id, pitch}) => (currentlyPlayingPitch !== pitch &&
                                                   currentlyPlayingPitch !== null &&
                                                   stopLastNoteOnNoteChange) &&
                                                     dispatch(removeKeysFromAudioGraphContaining(id)))),
                         map(tap(({pitch}) => currentlyPlayingPitch = pitch)),
                         map(({id, pitch, modulation = 0.5}) => {
                           const {arpeggiator, channels, rootNote} = store.getState()
                           const relevantChannels = filter(({sources}) => contains(instrument,
                                                                                   sources),
                                                           channels)
                           const staticParams = {arpeggiator,
                                                 id,
                                                 instrument,
                                                 modulation,
                                                 pitch,
                                                 rootNote}
                           return map(({effects, sources}) => ({...staticParams, effects, sources}),
                                                                relevantChannels)
                         }),
                         map(forEach(computeDispatchMergeAudioGraph))))
      .subscribe();

    endInput$
      .transduce(compose(map(tap(() => mouseInputEnabled = false)),
                         map(tap(() => currentlyPlayingPitch = null)),
                         map(e => currentXYRatios = calculateXAndYRatio(e)),
                         map(_ => dispatch(removeKeysFromAudioGraphContaining(controlPadId)))))
      .subscribe();

    renderLoopActive = true;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      54,
      1,
      cameraZ - maxDepth,
      cameraZ - minZ
    );
    renderer = new THREE.WebGLRenderer({canvas: controlPadElement});
    const geometry = new THREE.BoxGeometry(sideLength, sideLength, sideLength);
    const material = new THREE.MeshLambertMaterial({color: 'rgb(20, 200, 255)'});
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    cube = new THREE.Mesh(geometry, material);
    cube.position.z = minZ - maxDepth;

    directionalLight.position.set(16, 16, 24).normalize();
    scene.add(new THREE.AmbientLight(0x333333))
         .add(directionalLight)
         .add(cube);
    camera.position.z = cameraZ;

    setRendererSize();
    onresize = setRendererSize;

    controlPadElement.oncontextmenu = e => e.preventDefault();

    renderLoop();
  }

  componentWillUnmount () {
    renderLoopActive = false;
    onresize = null;
  }

  render () {
    return <canvas width="768" height="768" className="control-pad"></canvas>;
  }
}
