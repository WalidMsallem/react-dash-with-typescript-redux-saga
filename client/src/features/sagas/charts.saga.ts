
/**
 * Charts Sagas 
 */

import { takeEvery, put, call } from 'redux-saga/effects'
import { ChartsActions } from '../types/charts.types' 
import * as chartsApi from '../services/charts.services'
import ActionTypes, { AGGREHATE_TYPE } from '../constants/charts.constants'
import { fetchBandWidth as fetchBandWidthAction  ,fetchConcurrent as fetchConcurrentAction  } from '../actions/charts.actions'
export function* changeRange(action: ChartsActions | any) {
  yield put(fetchBandWidthAction(action.payload))
  yield put(fetchConcurrentAction(action.payload))
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
  } catch (e) {
    // console.log('e', e)
    yield put({ type: ActionTypes.FETCH_BANDWIDTH.failure })
  }
}

export function* fetchBandwidthWatcher() {
  yield takeEvery(ActionTypes.FETCH_BANDWIDTH.request, fetchBandwidth)
}



export function* fetchConcurrent(action: ChartsActions | any) {
  try {
    const concurrentResponse = yield call(
      chartsApi.fetchConcurrent,
      action.payload,
    )
    yield put({
      type: ActionTypes.FETCH_CONCURRENT.success,
      data: {
        concurrent: concurrentResponse, 
      },
    })
 
  } catch (e) {
    // console.log('e', e)
    yield put({ type: ActionTypes.FETCH_CONCURRENT.failure })
  }
}

export function* fetchConcurrentWatcher() {
  yield takeEvery(ActionTypes.FETCH_CONCURRENT.request, fetchConcurrent)
}

export function* fetchAggregatedStatsByCountries(action: ChartsActions | any) {
  try {
    const caggregatedStatsByCountriesResponse = yield call(
      chartsApi.fetchAggregatedStatsByCountries,
      action.payload,
    )
    yield put({
      type: ActionTypes.FETCH_AGGREGATE_STATE_BY_COUNTRIES.success,
      data: {
        aggregatedStatsByCountries: caggregatedStatsByCountriesResponse, 
      },
    })
 
  } catch (e) {
    // console.log('e', e)
    yield put({ type: ActionTypes.FETCH_AGGREGATE_STATE_BY_COUNTRIES.failure })
  }
}

export function* fetchAggregatedStatsByCountriesWatcher() {
  yield takeEvery(ActionTypes.FETCH_AGGREGATE_STATE_BY_COUNTRIES.request, fetchAggregatedStatsByCountries)
}

