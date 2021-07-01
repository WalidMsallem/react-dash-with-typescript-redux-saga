/* eslint-disable no-throw-literal */
import axios from 'axios'
import { requestHeaderWithoutToken } from '../../utils/requestHeader'
import URL from '../constants/services.constants'
import { Range } from '../types/charts.types'

export const fetchBandwidth = async (body: Range): Promise<any> => {
  console.log('mnayek 2', body)

  if (body.to && body.from) {
    const result = await axios.post(
      URL.baseApiUrl() + URL.charts.fetchBandWith,
      body,
      requestHeaderWithoutToken(),
    )
    return result.data
  }

  throw 'services bandwith error'
}
