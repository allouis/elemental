const createAction = type => payload => ({type, payload})

export const ACTIVE_PATTERN_CELL_CLICK = 'PATTERN_CELL_CLICK'
export const ADD_CHANNEL = 'ADD_CHANNEL'
export const ADD_CHANNEL_EFFECT = 'ADD_CHANNEL_EFFECT'
export const ADD_CHANNEL_SOURCE = 'ADD_CHANNEL_SOURCE'
export const ADD_EFFECT = 'ADD_EFFECT'
export const ADD_INSTRUMENT_TO_CHANNEL = 'ADD_INSTRUMENT_TO_CHANNEL'
export const INSTANTIATE_EFFECT = 'INSTANTIATE_EFFECT'
export const INSTANTIATE_INSTRUMENT = 'INSTANTIATE_INSTRUMENT'
export const LOAD_PLUGIN_INSTRUMENT = 'LOAD_PLUGIN_INSTRUMENT'
export const LOAD_PLUGIN_EFFECT = 'LOAD_PLUGIN_EFFECT'
export const MOVE_CHANNEL_EFFECT_DOWN = 'MOVE_CHANNEL_EFFECT_DOWN'
export const MOVE_CHANNEL_EFFECT_UP = 'MOVE_CHANNEL_EFFECT_UP'
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'
export const REMOVE_CHANNEL_EFFECT = 'REMOVE_CHANNEL_EFFECT'
export const REMOVE_CHANNEL_SOURCE = 'REMOVE_CHANNEL_SOURCE'
export const UPDATE_ACTIVE_PATTERN_ACTIVE_POSITION = 'UPDATE_ACTIVE_PATTERN_ACTIVE_POSITION'
export const UPDATE_ACTIVE_PATTERN_INDEX = 'UPDATE_ACTIVE_PATTERN_INDEX'
export const UPDATE_ACTIVE_PATTERN_INSTRUMENT = 'UPDATE_ACTIVE_PATTERN_INSTRUMENT'
export const UPDATE_ACTIVE_PATTERN_OCTAVE = 'UPDATE_ACTIVE_PATTERN_OCTAVE'
export const UPDATE_ACTIVE_PATTERN_VOLUME = 'UPDATE_ACTIVE_PATTERN_VOLUME'
export const UPDATE_ACTIVE_PATTERN_X_LENGTH = 'UPDATE_ACTIVE_PATTERN_X_LENGTH'
export const UPDATE_BPM = 'UPDATE_BPM'
export const UPDATE_CONTROL_PAD_ARPEGGIATOR_IS_ON = 'UPDATE_CONTROL_PAD_ARPEGGIATOR_IS_ON'
export const UPDATE_CONTROL_PAD_ARPEGGIATOR_OCTAVES = 'UPDATE_CONTROL_PAD_ARPEGGIATOR_OCTAVES'
export const UPDATE_CONTROL_PAD_INSTRUMENT = 'UPDATE_CONTROL_PAD_INSTRUMENT'
export const UPDATE_CONTROL_PAD_NO_SCALE = 'UPDATE_CONTROL_PAD_NO_SCALE'
export const UPDATE_CONTROL_PAD_OCTAVE = 'UPDATE_CONTROL_PAD_OCTAVE'
export const UPDATE_CONTROL_PAD_PORTAMENTO = 'UPDATE_CONTROL_PAD_PORTAMENTO'
export const UPDATE_CONTROL_PAD_RANGE = 'UPDATE_CONTROL_PAD_RANGE'
export const UPDATE_CONTROL_PAD_SELECTED_ARPEGGIATOR_PATTERN = 'UPDATE_CONTROL_PAD_SELECTED_ARPEGGIATOR_PATTERN'
export const UPDATE_KEYBOARD_INSTRUMENT = 'UPDATE_KEYBOARD_INSTRUMENT'
export const UPDATE_KEYBOARD_OCTAVE = 'UPDATE_KEYBOARD_OCTAVE'
export const UPDATE_KEYBOARD_VOLUME = 'UPDATE_KEYBOARD_VOLUME'
export const UPDATE_MICROPHONE_IS_AVAILABLE = 'UPDATE_MICROPHONE_IS_AVAILABLE'
export const UPDATE_MICROPHONE_IS_ON = 'UPDATE_MICROPHONE_IS_ON'
export const UPDATE_PLAYING = 'UPDATE_PLAYING'
export const UPDATE_ROOT_NOTE = 'UPDATE_ROOT_NOTE'
export const UPDATE_SELECTED_ADD_EFFECT = 'UPDATE_SELECTED_ADD_EFFECT'
export const UPDATE_SELECTED_ADD_SOURCE = 'UPDATE_SELECTED_ADD_SOURCE'
export const UPDATE_SELECTED_SCALE = 'UPDATE_SELECTED_SCALE'
export const UPDATE_SONG_NOTES = 'UPDATE_SONG_NOTES'

export const activePatternCellClick = createAction(ACTIVE_PATTERN_CELL_CLICK)
export const addChannel = createAction(ADD_CHANNEL)
export const addChannelEffect = createAction(ADD_CHANNEL_EFFECT)
export const addChannelSource = createAction(ADD_CHANNEL_SOURCE)
export const addEffect = createAction(ADD_EFFECT)
export const addInstrumentToChannel = createAction(ADD_INSTRUMENT_TO_CHANNEL)
export const instantiateEffect = createAction(INSTANTIATE_EFFECT)
export const instantiateInstrument = createAction(INSTANTIATE_INSTRUMENT)
export const loadPluginEffect = createAction(LOAD_PLUGIN_EFFECT)
export const loadPluginInstrument = createAction(LOAD_PLUGIN_INSTRUMENT)
export const moveChannelEffectDown = createAction(MOVE_CHANNEL_EFFECT_DOWN)
export const moveChannelEffectUp = createAction(MOVE_CHANNEL_EFFECT_UP)
export const removeChannel = createAction(REMOVE_CHANNEL)
export const removeChannelEffect = createAction(REMOVE_CHANNEL_EFFECT)
export const removeChannelSource = createAction(REMOVE_CHANNEL_SOURCE)
export const updateActivePatternActivePosition = createAction(UPDATE_ACTIVE_PATTERN_ACTIVE_POSITION)
export const updateActivePatternIndex = createAction(UPDATE_ACTIVE_PATTERN_INDEX)
export const updateActivePatternInstrument = createAction(UPDATE_ACTIVE_PATTERN_INSTRUMENT)
export const updateActivePatternOctave = createAction(UPDATE_ACTIVE_PATTERN_OCTAVE)
export const updateActivePatternVolume = createAction(UPDATE_ACTIVE_PATTERN_VOLUME)
export const updateActivePatternXLength = createAction(UPDATE_ACTIVE_PATTERN_X_LENGTH)
export const updateBpm = createAction(UPDATE_BPM)
export const updateControlPadArpeggiatorIsOn = createAction(UPDATE_CONTROL_PAD_ARPEGGIATOR_IS_ON)
export const updateControlPadArpeggiatorOctaves = createAction(UPDATE_CONTROL_PAD_ARPEGGIATOR_OCTAVES)
export const updateControlPadInstrument = createAction(UPDATE_CONTROL_PAD_INSTRUMENT)
export const updateControlPadNoScale = createAction(UPDATE_CONTROL_PAD_NO_SCALE)
export const updateControlPadOctave = createAction(UPDATE_CONTROL_PAD_OCTAVE)
export const updateControlPadPortamento = createAction(UPDATE_CONTROL_PAD_PORTAMENTO)
export const updateControlPadRange = createAction(UPDATE_CONTROL_PAD_RANGE)
export const updateControlPadSelectedArpeggiatorPattern = createAction(UPDATE_CONTROL_PAD_SELECTED_ARPEGGIATOR_PATTERN)
export const updateKeyboardInstrument = createAction(UPDATE_KEYBOARD_INSTRUMENT)
export const updateKeyboardOctave = createAction(UPDATE_KEYBOARD_OCTAVE)
export const updateKeyboardVolume = createAction(UPDATE_KEYBOARD_VOLUME)
export const updateMicrophoneIsAvailable = createAction(UPDATE_MICROPHONE_IS_AVAILABLE)
export const updateMicrophoneIsOn = createAction(UPDATE_MICROPHONE_IS_ON)
export const updatePlaying = createAction(UPDATE_PLAYING)
export const updateRootNote = createAction(UPDATE_ROOT_NOTE)
export const updateSelectedAddEffect = createAction(UPDATE_SELECTED_ADD_EFFECT)
export const updateSelectedAddSource = createAction(UPDATE_SELECTED_ADD_SOURCE)
export const updateSelectedRootNote = createAction(UPDATE_ROOT_NOTE)
export const updateSelectedScale = createAction(UPDATE_SELECTED_SCALE)
export const updateSongNotes = createAction(UPDATE_SONG_NOTES)
