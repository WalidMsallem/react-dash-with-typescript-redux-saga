import { all } from 'redux-saga/effects'
 
import { loginUserWatcher, getProfileWatcher } from './user.saga'
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([loginUserWatcher(), getProfileWatcher()])
}

