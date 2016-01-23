export default ({gain, frequency, startTime, stopTime}) => ({
  0: ['gain', 'output', {gain}],
  1: ['oscillator', 0, {frequency,
                        startTime,
                        stopTime,
                        type: 'triangle'}],
  2: ['gain', 0, {gain: 0.7}],
  3: ['oscillator', 2, {detune: -5,
                        frequency: frequency * 1.5,
                        startTime,
                        stopTime,
                        type: 'triangle'}],
  4: ['gain', 0, {gain: 0.6}],
  5: ['oscillator', 4, {detune: 3,
                        frequency: frequency * 2,
                        startTime,
                        stopTime,
                        type: 'square'}]
})
