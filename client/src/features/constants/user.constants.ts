/*
 * User Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 */
import { generateActionTypes } from '../../utils/generic-saga'

const root = 'app/User/'

const LOGIN = generateActionTypes(root, 'LOGIN')
const LOGOUT = generateActionTypes(root, 'LOGOUT')
const GET_PROFILE = generateActionTypes(root, 'GET_PROFILE')

const constants = {
  LOGIN,
  GET_PROFILE,
  LOGOUT,
}
export default constants
