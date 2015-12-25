import {both, equals, find, propEq, reject} from 'ramda';
import {ACTIVE_PATTERN_CELL_CLICK,
        UPDATE_ACTIVE_PATTERN_ACTIVE_POSITION,
        UPDATE_ACTIVE_PATTERN_CHANNEL,
        UPDATE_ACTIVE_PATTERN_OCTAVE,
        UPDATE_ACTIVE_PATTERN_X_LENGTH} from '../actions';
import store from '../store';

export const initialState = [{
  activePosition: null,
  channel: 2,
  notes: [],
  octave: 0,
  xLength: 8,
  yLength: 8,
}];

export const noteExists = (notes, x, y) => Boolean(find(both(propEq('x', x), propEq('y', y)), notes));

export default (state = initialState, {type, value}) => {
  switch (type) {
    case ACTIVE_PATTERN_CELL_CLICK: {
      const {x, y} = value;
      const {activePatternIndex} = store.getState();
      const activePattern = state[activePatternIndex];
      const {notes} = activePattern;
      return noteExists(notes, x, y) ?
        [...state.slice(0, activePatternIndex),
         {...activePattern, notes: reject(equals(value), notes)},
         ...state.slice(activePatternIndex + 1)] :
        [...state.slice(0, activePatternIndex),
         {...activePattern, notes: [...notes, value]},
         ...state.slice(activePatternIndex + 1)];
    }
    case UPDATE_ACTIVE_PATTERN_ACTIVE_POSITION: {
      const {activePatternIndex} = store.getState();
      const activePattern = state[activePatternIndex];
      return [...state.slice(0, activePatternIndex),
              {...activePattern, activePosition: value},
              ...state.slice(activePatternIndex + 1)];
    }
    case UPDATE_ACTIVE_PATTERN_CHANNEL: {
      const {activePatternIndex} = store.getState();
      const activePattern = state[activePatternIndex];
      return [...state.slice(0, activePatternIndex),
              {...activePattern, channel: value},
              ...state.slice(activePatternIndex + 1)];
    }
    case UPDATE_ACTIVE_PATTERN_OCTAVE: {
      const {activePatternIndex} = store.getState();
      const activePattern = state[activePatternIndex];
      return [...state.slice(0, activePatternIndex),
              {...activePattern, octave: value},
              ...state.slice(activePatternIndex + 1)];
    }
    case UPDATE_ACTIVE_PATTERN_X_LENGTH: {
      const {activePatternIndex} = store.getState();
      const activePattern = state[activePatternIndex];
      return [...state.slice(0, activePatternIndex),
              {...activePattern, xLength: value},
              ...state.slice(activePatternIndex + 1)];
    }
    default:
      return state;
  }
};
