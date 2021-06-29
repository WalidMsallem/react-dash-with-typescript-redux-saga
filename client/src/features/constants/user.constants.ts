import { generateActionTypes } from '../../utils/generic-saga'

const root = 'app/User/'

const LOGIN = generateActionTypes(root, 'LOGIN')
const GET_PROFILE = generateActionTypes(root, 'GET_PROFILE')

const constants = {
  LOGIN,
  GET_PROFILE,
}
export default constants
