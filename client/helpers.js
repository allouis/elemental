import {map as lazyMap} from 'imlazy'
import {
  addIndex,
  forEach,
  head,
  identity,
  ifElse,
  isEmpty,
  map,
  path,
  reduce
} from 'ramda'

export const decimalPart = n => {
  const str = String(n)
  const indexOfDecimal = str.indexOf('.')
  return indexOfDecimal === -1
    ? 0
    : Number('0' + str.slice(indexOfDecimal, Infinity))
}
export const eventCheckedPath = path(['currentTarget', 'checked'])
export const eventValuePath = path(['currentTarget', 'value'])
export const forEachIndexed = addIndex(forEach)
export const lazyMapIndexed = addIndex(lazyMap)
export const mapIndexed = addIndex(map)
export const paramsStartTimePath = path(['params', 'startTime'])
export const paramsStopTimePath = path(['params', 'stopTime'])
export const reduceIndexed = addIndex(reduce)
export const safeHead = ifElse(isEmpty, identity, head)
