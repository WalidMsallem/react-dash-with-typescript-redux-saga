import { takeEvery, put, call } from 'redux-saga/effects'
import { ChartsActions } from '../types/charts.types'
// import { generateSaga, sagaTypes } from '../../utils/generic-saga'
import * as chartsApi from '../services/charts.services'
import ActionTypes, { AGGREHATE_TYPE } from '../constants/charts.constants'
import { fetchBandWidth } from '../actions/charts.actions'
export function* changeRange(action: ChartsActions | any) {
  yield put(fetchBandWidth(action.payload))
}

export function* changeRangeWatcher() {
  yield takeEvery(ActionTypes.CHANGE_RANGE, changeRange)
}

export function* fetchBandwidth(action: ChartsActions | any) {
  try {
    const bandwidthResponse = yield call(
      chartsApi.fetchBandwidth,
      action.payload,
    )
    const bandwidthMaxResponse = yield call(chartsApi.fetchBandwidth, {
      ...action.payload,
      aggregate: AGGREHATE_TYPE.MAX,
    })

    yield put({
      type: ActionTypes.FETCH_BANDWIDTH.success,
      data: {
        bandwidth: bandwidthResponse,
        bandwidthMax: bandwidthMaxResponse,
      },
    })
    yield put({
      type: ActionTypes.FETCH_BANDWIDTH.request,
    })
  } catch (e) {
    // console.log('e', e)
    yield put({ type: ActionTypes.FETCH_BANDWIDTH.failure })
  }
}

export function* fetchBandwidthWatcher() {
  yield takeEvery(ActionTypes.FETCH_BANDWIDTH.request, fetchBandwidth)
}
