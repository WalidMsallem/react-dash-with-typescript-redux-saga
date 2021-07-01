/**
 * user reducer
 */

import ActionTypes from '../constants/user.constants'
import { UserState, UserActions } from '../types/user.types'
import produce from 'immer'

// The initial state of the reducer
export const initialState: UserState = {
  data: {
    userInfo: {},
  },
  local: {
    isAuthenticated: false,
    loading: {
      loginUser: false,
      getProfile: false,
      logoutUser: false,
    },
    errors: {
      loginUser: '',
      getProfile: '',
      logoutUser: '',
    },
  },
}

const userReducer = (
  state: UserState = initialState,
  action: UserActions | any,
): UserState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.LOGIN.request:
        draft.local.loading.loginUser = true
        draft.local.errors.loginUser = ''
        break
      case ActionTypes.LOGIN.success:
        draft.local.loading.loginUser = false
        draft.local.errors.loginUser = ''
        localStorage.setItem('token', action.data.session_token)
        break
      case ActionTypes.LOGIN.failure:
        draft.local.loading.loginUser = false
        localStorage.removeItem('token')
        try {
          draft.local.errors.loginUser = action.errors.response.data
        } catch (e) {
          draft.local.errors.loginUser = 'Server error'
        }
        break

      case ActionTypes.GET_PROFILE.request:
        draft.local.loading.getProfile = true
        draft.local.errors.getProfile = ''
        break
      case ActionTypes.GET_PROFILE.success:
        draft.local.loading.getProfile = false
        draft.data.userInfo = action.data
        draft.local.isAuthenticated = true

        break
      case ActionTypes.GET_PROFILE.failure:
        draft.local.loading.getProfile = false
        draft.local.isAuthenticated = false
        try {
          draft.local.errors.getProfile = action.errors.response.data
        } catch (e) {
          draft.local.errors.getProfile = 'Server error'
        }
        localStorage.removeItem('token')
        break

        case ActionTypes.LOGOUT.request:
          draft.local.loading.logoutUser = true
          draft.local.errors.logoutUser = ''
          break
        case ActionTypes.LOGOUT.success:
          draft.local.loading.logoutUser = false
          draft.local.isAuthenticated = false
          localStorage.removeItem('token')
          break
        case ActionTypes.LOGOUT.failure:
          draft.local.loading.logoutUser = false
          draft.local.isAuthenticated = false
          try {
            draft.local.errors.logoutUser = action.errors.response.data
          } catch (e) {
            draft.local.errors.logoutUser = 'Server error'
          }
          localStorage.removeItem('token')
          break

    }
  })

export default userReducer
