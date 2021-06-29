import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from './user.reducer'
import history from '../../utils/history'


const createReducer = (injectedReducers = {}): object | any => {
  const rootReducer = combineReducers({
    user: userReducer,
    router: connectRouter(history),
    ...injectedReducers,
  })

  return rootReducer
}
export default createReducer
