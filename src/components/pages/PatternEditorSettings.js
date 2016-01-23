import capitalize from 'capitalize'
import { compose, identity, map } from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { updateActivePatternInstrument, updateActivePatternOctave, updateActivePatternVolume, updateActivePatternXLength } from '../../actions'
import Selector from '../molecules/Selector'
import RangeSelector from '../molecules/RangeSelector'
import FullButton from '../atoms/FullButton'
import { eventValuePath } from '../../utils/helpers'

export default connect(identity)(({activePatternIndex, instruments, dispatch, patterns}) => {
  const activePattern = patterns[activePatternIndex]
  const {instrument, octave, xLength, volume} = activePattern
  return <div className='flex-column text-center'>
    <h2 className='text-center'>Pattern Editor Settings</h2>
    <Selector defaultValue={instrument}
  handleChange={(compose(dispatch,
    updateActivePatternInstrument,
    eventValuePath))}
  label='Instrument'
  options={map(instr => ({
    text: capitalize.words(instr),
    value: instr
  }), instruments)}
  />
    <RangeSelector
  key='2'
  max='1'
  min='0'
  onChange={compose(
    dispatch,
    updateActivePatternVolume,
    Number,
    eventValuePath
  )}
  output={Math.round(volume * 100)}
  step='0.01'
  text='Volume'
  value={volume}
  />
    <RangeSelector
  key='3'
  max='16'
  min='1'
  onChange={compose(
    dispatch,
    updateActivePatternXLength,
    Number,
    eventValuePath
  )}
  output={String(xLength)}
  text='Length'
  value={xLength}
  />
    <RangeSelector
  key='4'
  max='2'
  min='-3'
  onChange={compose(
    dispatch,
    updateActivePatternOctave,
    Number,
    eventValuePath
  )}
  output={octave}
  text='Octave'
  value={octave}
  />
    <div>
      <span className='inline-label-text'></span>
      <FullButton text='OK' to='/pattern-editor' />
    </div>
  </div>
})