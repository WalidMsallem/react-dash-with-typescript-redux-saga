/**
 * charts services
 */

/* eslint-disable no-throw-literal */
import axios from 'axios'
import { requestHeaderWithoutToken } from '../../utils/requestHeader'
import URL from '../constants/services.constants'
import { Range } from '../types/charts.types'

export const fetchBandwidth = async (body: Range): Promise<any> => {
    const result = await axios.post(
      URL.baseApiUrl() + URL.charts.fetchBandWith,
      body,
      requestHeaderWithoutToken(),
    )
    return result.data
}
export const fetchConcurrent = async (body: Range): Promise<any> => {
  const result = await axios.post(
    URL.baseApiUrl() + URL.charts.fetchConcurrent,
    body,
    requestHeaderWithoutToken(),
  )
  return result.data
}

export const fetchAggregatedStatsByCountries = async (body: Range): Promise<any> => {
  const result = await axios.post(
    URL.baseApiUrl() + URL.charts.fetchAggregatedStatsByCountries,
    body,
    requestHeaderWithoutToken(),
  )
  return result.data
}
 