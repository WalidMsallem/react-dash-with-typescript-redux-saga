/*
 * User Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 */

import { generateActionTypes } from '../../utils/generic-saga'

const root = 'app/Charts/'

const CHANGE_RANGE = `${root}CHANGE_RANGE`
const FETCH_BANDWIDTH = generateActionTypes(root, 'FETCH_BANDWIDTH')
const FETCH_CONCURRENT = generateActionTypes(root, 'FETCH_CONCURRENT')
const FETCH_AGGREGATE_STATE_BY_COUNTRIES = generateActionTypes(root, 'FETCH_AGGREGATE_STATE_BY_COUNTRIES')

export const AGGREHATE_TYPE = {
  SUM: 'sum',
  AVERAGE: 'average',
  MAX: 'max',
  MIN: 'min',
}
const constants = {
  CHANGE_RANGE,
  FETCH_BANDWIDTH,
  FETCH_CONCURRENT,
  FETCH_AGGREGATE_STATE_BY_COUNTRIES
}
export default constants
