const createAction = type => payload => ({type, payload})

export const ACTIVE_PATTERN_CELL_CLICK = 'PATTERN_CELL_CLICK'
export const ADD_CHANNEL = 'ADD_CHANNEL'
export const ADD_EFFECT = 'ADD_EFFECT'
export const ADD_EFFECT_TO_CHANNEL = 'ADD_EFFECT_TO_CHANNEL'
export const ADD_INSTRUMENT_TO_CHANNEL = 'ADD_INSTRUMENT_TO_CHANNEL'
export const INSTANTIATE_EFFECT = 'INSTANTIATE_EFFECT'
export const INSTANTIATE_INSTRUMENT = 'INSTANTIATE_INSTRUMENT'
export const LOAD_PLUGIN_INSTRUMENT = 'LOAD_PLUGIN_INSTRUMENT'
export const LOAD_PLUGIN_EFFECT = 'LOAD_PLUGIN_EFFECT'
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'
export const REMOVE_EFFECT_FROM_CHANNEL = 'REMOVE_EFFECT_FROM_CHANNEL'
export const REMOVE_INSTRUMENT_FROM_CHANNEL = 'REMOVE_INSTRUMENT_FROM_CHANNEL'
export const SET_ACTIVE_PATTERN_Y_LENGTH = 'SET_ACTIVE_PATTERN_Y_LENGTH'
export const SET_ACTIVE_PATTERN_ACTIVE_POSITION = 'SET_ACTIVE_PATTERN_ACTIVE_POSITION'
export const SET_SONG_ACTIVE_POSITION = 'SET_SONG_ACTIVE_POSITION'
export const SONG_CELL_CLICK = 'SONG_CELL_CLICK'
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
export const UPDATE_PLAYING = 'UPDATE_PLAYING'
export const UPDATE_ROOT_NOTE = 'UPDATE_ROOT_NOTE'
export const UPDATE_SELECTED_SCALE = 'UPDATE_SELECTED_SCALE'

export const activePatternCellClick = createAction(ACTIVE_PATTERN_CELL_CLICK)
export const addChannel = createAction(ADD_CHANNEL)
export const addEffect = createAction(ADD_EFFECT)
export const addEffectToChannel = createAction(ADD_EFFECT_TO_CHANNEL)
export const addInstrumentToChannel = createAction(ADD_INSTRUMENT_TO_CHANNEL)
export const instantiateEffect = createAction(INSTANTIATE_EFFECT)
export const instantiateInstrument = createAction(INSTANTIATE_INSTRUMENT)
export const loadPluginEffect = createAction(LOAD_PLUGIN_EFFECT)
export const loadPluginInstrument = createAction(LOAD_PLUGIN_INSTRUMENT)
export const removeChannel = createAction(REMOVE_CHANNEL)
export const removeEffectFromChannel = createAction(REMOVE_EFFECT_FROM_CHANNEL)
export const removeInstrumentFromChannel = createAction(REMOVE_INSTRUMENT_FROM_CHANNEL)
export const setActivePatternActivePosition = createAction(SET_ACTIVE_PATTERN_ACTIVE_POSITION)
export const setActivePatternYLength = createAction(SET_ACTIVE_PATTERN_Y_LENGTH)
export const setSongActivePosition = createAction(SET_SONG_ACTIVE_POSITION)
export const songCellClick = createAction(SONG_CELL_CLICK)
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
export const updatePlaying = createAction(UPDATE_PLAYING)
export const updateRootNote = createAction(UPDATE_ROOT_NOTE)
export const updateSelectedRootNote = createAction(UPDATE_ROOT_NOTE)
export const updateSelectedScale = createAction(UPDATE_SELECTED_SCALE)
