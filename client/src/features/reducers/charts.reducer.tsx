/**
 * Charts reducer
 */

import ActionTypes from '../constants/charts.constants'
import { ChartrState, ChartsActions } from '../types/charts.types'
import produce from 'immer'

// The initial state of the reducer
export const initialState: ChartrState = {
  data: {
    bandwidth: { p2p: [], cdn: [] },
    concurrent: { audience: [] },
    bandwidthMax: { cdn: null, p2p: null },
    aggregatedStatsByCountries: [],
  },
  local: {
    fromTimestamp: 1503528751,
    toTimestamp: 1535064751,
    loading: {
      fetchingBandwidth: false,
      fetchingconcurrent: false,
      fetchingAggregatedStatsByCountries: false,
    },
    errors: {
      fetchingBandwidth: '',
      fetchingconcurrent: '',
      fetchingAggregatedStatsByCountries: '',
    },
  },
}

const userReducer = (
  state: ChartrState = initialState,
  action: ChartsActions | any,
): ChartrState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.CHANGE_RANGE:
        draft.local.fromTimestamp = action.payload.fromTimestamp
        draft.local.toTimestamp = action.payload.toTimestamp
        break

      case ActionTypes.FETCH_BANDWIDTH.request:
        draft.local.loading.fetchingBandwidth = true
        draft.local.errors.fetchingBandwidth = ''
        break
      case ActionTypes.FETCH_BANDWIDTH.success:
        draft.local.loading.fetchingBandwidth = false
        draft.local.errors.fetchingBandwidth = ''
        draft.data.bandwidth = action.data.bandwidth
        draft.data.bandwidthMax = action.data.bandwidthMax

        break
      case ActionTypes.FETCH_BANDWIDTH.failure:
        draft.local.loading.fetchingBandwidth = false
        try {
          draft.local.errors.fetchingBandwidth = action.errors.response.data
        } catch (e) {
          draft.local.errors.fetchingBandwidth = 'Server error'
        }
        break

      case ActionTypes.FETCH_CONCURRENT.request:
        draft.local.loading.fetchingconcurrent = true
        draft.local.errors.fetchingconcurrent = ''
        break
      case ActionTypes.FETCH_CONCURRENT.success:
        draft.local.loading.fetchingconcurrent = false
        draft.local.errors.fetchingconcurrent = ''
        draft.data.concurrent = action.data.concurrent
        break
      case ActionTypes.FETCH_CONCURRENT.failure:
        draft.local.loading.fetchingconcurrent = false
        try {
          draft.local.errors.fetchingconcurrent = action.errors.response.data
        } catch (e) {
          draft.local.errors.fetchingconcurrent = 'Server error'
        }
        break

      case ActionTypes.FETCH_AGGREGATE_STATE_BY_COUNTRIES.request:
        draft.local.loading.fetchingAggregatedStatsByCountries = true
        draft.local.errors.fetchingAggregatedStatsByCountries = ''
        break
      case ActionTypes.FETCH_AGGREGATE_STATE_BY_COUNTRIES.success:
        draft.local.loading.fetchingAggregatedStatsByCountries = false
        draft.local.errors.fetchingAggregatedStatsByCountries = ''
        draft.data.aggregatedStatsByCountries =
          action.data.aggregatedStatsByCountries
        break
      case ActionTypes.FETCH_AGGREGATE_STATE_BY_COUNTRIES.failure:
        draft.local.loading.fetchingAggregatedStatsByCountries = false
        try {
          draft.local.errors.fetchingAggregatedStatsByCountries =
            action.errors.response.data
        } catch (e) {
          draft.local.errors.fetchingAggregatedStatsByCountries = 'Server error'
        }
        break
    }
  })

export default userReducer
