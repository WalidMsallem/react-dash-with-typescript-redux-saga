import { action } from 'typesafe-actions'
import ActionTypes from '../constants/user.constants'

export const getProfile = () => action(ActionTypes.GET_PROFILE.request)

export const login = (credentials: object) =>
  action(ActionTypes.LOGIN.request, { credentials })

export const logout = () =>
  action(ActionTypes.LOGOUT.request, {
    session_token: localStorage.getItem('token'),
  })
