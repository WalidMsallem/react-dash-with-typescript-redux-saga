import { action } from 'typesafe-actions'
import ActionTypes from '../constants/user.constants'

export const getProfile = () => action(ActionTypes.GET_PROFILE.request)

export const login = (credentials: object) =>
  action(ActionTypes.LOGIN.request, { credentials })
