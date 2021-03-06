<img src="http://elemental.audio/assets/logo.svg" />

[![Build Status](https://travis-ci.org/benji6/elemental.svg)](https://travis-ci.org/benji6/elemental)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Elemental is a pluggable digital audio workstation in development built on open web technologies

It currently only supports Chrome

**[Check it out here](http://elemental.audio/)**

## Plugin API

**NB this API should be considered pre-alpha**

### Effect plugin API

`EffectPlugin` should be a constructor or factory function which is newed up with an object containing a reference to the `audioContext` instance used by Elemental

```javascript
new EffectPlugin({audioContext})
```

`effectPlugin` instances should then expose the following API:

- `connnect` - `Function` - to be implemented in the same manner as `AudioNode.connect`
- `destination` - `AudioNode | AudioParam` - property which is an unchanging reference to an object which is a valid argument for `AudioNode.connect`
- `disconnect` - `Function` - to be implemented in the same manner as `AudioNode.disconnect`
- `render` - `Function` - method which is passed a DOM element and is called when user wishes to view and possibly edit the plugin

### Instrument plugin API

`InstrumentPlugin` should be a constructor or factory function which is newed up with an object containing a reference to the `audioContext` instance used by Elemental

```javascript
new InstrumentPlugin({audioContext})
```

`instrumentPlugin` instances should then expose the following API:

- `connnect` - `Function` - to be implemented in the same manner as `AudioNode.connect`
- `disconnect` - `Function` - to be implemented in the same manner as `AudioNode.disconnect`
- `inputNoteStart` - `Function | undefined` - optional method which accepts a note object (see specification below). If not implemented controllers will not be given the option to control this plugin.
- `inputNoteStop` - `Function | undefined` - optional method which accepts the id of the note to stop, if method is not provided then controllers can not send note stop signals to this plugin
- `render` - `Function` - method which is passed a DOM element and is called when user wishes to view and possibly modify parameters within the plugin

#### Note object specification

Instrument plugins receive note objects which have the following properties:

- `frequency` - `Number` - frequency in Hz of the note
- `gain` - `Number` - gain of the note using the same basis as `GainNode`
- `id` - `String` - unique id for this note which is essential for keeping track of which notes are playing and which are to be stopped
- `startTime` - `Number | undefined` - optional property, if specified it is the time at which the note is to be started measured on the same basis as `audioContext.currentTime`, if not specified the note is expected to start immediately
- `stopTime` - `Number | undefined` - optional property, if specified it is the time at which the note is to be stopped measured on the same basis as `audioContext.currentTime`, if not specified the note is expected to stop immediately

## More info

Built using [virtual-audio-graph](https://github.com/benji6/virtual-audio-graph/)

Impulse responses taken from [OpenAir](http://www.openairlib.net/)

Samples taken from [SampleSwap](http://sampleswap.org)
