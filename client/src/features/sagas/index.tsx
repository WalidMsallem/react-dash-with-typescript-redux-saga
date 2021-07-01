/**
 * Combine  Sagas  watcher
 */

import { all } from 'redux-saga/effects'

import {
  loginUserWatcher,
  getProfileWatcher,
  logoutUserWatcher,
} from './user.saga'
import {
  changeRangeWatcher,
  fetchBandwidthWatcher,
  fetchConcurrentWatcher,
  fetchAggregatedStatsByCountriesWatcher,
} from './charts.saga'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    loginUserWatcher(),
    getProfileWatcher(),
    changeRangeWatcher(),
    fetchBandwidthWatcher(),
    fetchConcurrentWatcher(),
    fetchAggregatedStatsByCountriesWatcher(),
    logoutUserWatcher(),
  ])
}
