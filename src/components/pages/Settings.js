import capitalize from 'capitalize'
import {compose, keys, map} from 'ramda'
import {connect} from 'react-redux'
import React from 'react'
import {updateBpm, updateSelectedRootNote, updateSelectedScale} from '../../actions'
import FullButton from '../atoms/FullButton'
import RangeSelector from '../molecules/RangeSelector'
import noteNameFromPitch from '../../audioHelpers/noteNameFromPitch'
import Selector from '../molecules/Selector'
import {eventValuePath} from '../../utils/helpers'

const minBpm = 32

const connectComponent = connect(({
  bpm,
  dispatch,
  microphone,
  rootNote,
  scale: {scaleName, scales}
}) => ({
  bpm,
  dispatch,
  microphone,
  rootNote,
  scaleName,
  scales
}))

export default connectComponent(({
  bpm,
  dispatch,
  microphone,
  rootNote,
  scaleName,
  scales
}) =>
  <div className='settings-view'>
    <div className='flex-column text-center'>
      <RangeSelector
        max='512'
        min={minBpm}
        onChange={compose(
          dispatch,
          updateBpm,
          Number,
          eventValuePath
        )}
        output={bpm}
        text='BPM'
        value={bpm}
      />
      <RangeSelector
        max='24'
        min='-36'
        onChange={compose(
          dispatch,
          updateSelectedRootNote,
          Number,
          eventValuePath
        )}
        output={noteNameFromPitch(rootNote)}
        text='Root Note'
        value={rootNote}
      />
      <Selector
        defaultValue={scaleName}
        handleChange={compose(dispatch, updateSelectedScale, eventValuePath)}
        label='Scale'
        options={map(
          value => ({text: capitalize.words(value), value}),
          keys(scales)
        )}
      />
      <div>
        <FullButton to='/controllers/keyboard/settings'>Keyboard Settings</FullButton>
      </div>
    </div>
  </div>)
