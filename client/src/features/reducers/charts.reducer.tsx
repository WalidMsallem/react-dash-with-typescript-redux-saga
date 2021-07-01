import ActionTypes from '../constants/charts.constants'
import { ChartrState, ChartsActions } from '../types/charts.types'
import produce from 'immer'

// The initial state of the reducer
export const initialState: ChartrState = {
  data: {
    bandwidth: { p2p: [], cdn: [] },
    bandwidthMax: { cdn: null, p2p: null },
  },
  local: {
    fromTimestamp: 1503528751,
    toTimestamp: 1535064751,
    loading: { fetchingBandwidth: false },
    errors: { fetchingBandwidth: '' },
  },
}

const userReducer = (
  state: ChartrState = initialState,
  action: ChartsActions | any,
): ChartrState =>
  produce(state, (draft) => {
    // console.log('==> action:',action)
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
    }
  })

export default userReducer
