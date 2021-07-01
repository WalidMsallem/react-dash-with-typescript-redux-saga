import { action } from 'typesafe-actions'
import ActionTypes from '../constants/charts.constants'
import { Range } from '../types/charts.types'

export const changeRange = ({ toTimestamp, fromTimestamp }: Range) =>
  action(ActionTypes.CHANGE_RANGE, { toTimestamp, fromTimestamp })

export const fetchBandWidth = ({ toTimestamp, fromTimestamp }: Range) =>
  action(ActionTypes.FETCH_BANDWIDTH.request, {
    to: toTimestamp,
    from: fromTimestamp,
    session_token: localStorage.getItem('token'),
  })

  export const fetchConcurrent = ({ toTimestamp, fromTimestamp }: Range) =>
  action(ActionTypes.FETCH_CONCURRENT.request, {
    to: toTimestamp,
    from: fromTimestamp,
    session_token: localStorage.getItem('token'),
  })

  
  export const fetchAggregatedStatsByCountries= () =>
  action(ActionTypes.FETCH_AGGREGATE_STATE_BY_COUNTRIES.request, {
    session_token: localStorage.getItem('token'),
  })

  