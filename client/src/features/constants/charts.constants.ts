import { generateActionTypes } from '../../utils/generic-saga'

const root = 'app/Charts/'

const CHANGE_RANGE = `${root}CHANGE_RANGE`
const FETCH_BANDWIDTH = generateActionTypes(root, 'FETCH_BANDWIDTH')

export const AGGREHATE_TYPE = {
  SUM: 'sum',
  AVERAGE: 'average',
  MAX: 'max',
  MIN: 'min',
}
const constants = {
  CHANGE_RANGE,
  FETCH_BANDWIDTH,
}
export default constants
