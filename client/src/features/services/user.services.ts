import axios from 'axios'
import { requestHeaderWithoutToken } from '../../utils/requestHeader'
import URL from '../constants/services.constants'

export const loginUser = async (body: object): Promise<any> => {
  const result = await axios.post(
    URL.baseApiUrl() + URL.user.auth,
    {
      ...body,
    },
    requestHeaderWithoutToken(),
  )
  return result.data
}

export const getProfileByToken = async (): Promise<any> => {
  const result = await axios.post(
    URL.baseApiUrl() + URL.user.me,
    { session_token: localStorage.getItem('token') },
    requestHeaderWithoutToken(),
  )
  return result.data
}
