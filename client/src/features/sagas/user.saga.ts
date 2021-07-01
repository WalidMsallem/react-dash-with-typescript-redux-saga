
/**
 * User Sagas 
 */

import { takeEvery, put, call } from 'redux-saga/effects'
import { UserActions } from '../types/user.types' 
import * as userApi from '../services/user.services'
import ActionTypes from '../constants/user.constants'
import { push } from 'connected-react-router'
export function* getProfile() {
  try {
    const result = yield call(userApi.getProfileByToken)
    yield put({
      type: ActionTypes.GET_PROFILE.success,
      data: result,
    })
    yield put(push('/'))
  } catch (e) {
    // console.log('e', e)
    yield put({ type: ActionTypes.GET_PROFILE.failure, errors: e })
  }
}

export function* getProfileWatcher() {
  yield takeEvery(ActionTypes.GET_PROFILE.request, getProfile)
}

export function* loginUser(action: UserActions | any) {
  try {
    const result = yield call(userApi.loginUser, action.payload.credentials)
    yield put({
      type: ActionTypes.LOGIN.success,
      data: result,
    })
    yield put({
      type: ActionTypes.GET_PROFILE.request,
    })
  } catch (e) {
    // console.log('e', e)
    yield put({ type: ActionTypes.LOGIN.failure, errors: e })
  }
}

export function* loginUserWatcher() {
  yield takeEvery(ActionTypes.LOGIN.request, loginUser)
}


export function* logoutUser(action: UserActions | any) {
  try {
    const result = yield call(userApi.logoutUser, action.payload)
    yield put({
      type: ActionTypes.LOGOUT.success,
      data: result,
    })
    yield put(push('/login'))
  } catch (e) {
    // console.log('e', e)
    yield put({ type: ActionTypes.LOGOUT.failure, errors: e })
  }
}

export function* logoutUserWatcher() {
  yield takeEvery(ActionTypes.LOGOUT.request, logoutUser)
}

