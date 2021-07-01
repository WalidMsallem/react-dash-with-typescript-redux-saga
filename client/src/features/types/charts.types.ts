import { ActionType } from 'typesafe-actions'
import * as actions from '../actions/charts.actions'

/* --- STATE --- */
interface Data {
  concurrent:
    | {
        cdn: []
        p2p: []
      }
    | any
  bandwidth: { audience: [] } | any
  bandwidthMax: { cdn: Number | null; p2p: Number | null }
  aggregatedStatsByCountries: []
}

interface Local {
  fromTimestamp: number
  toTimestamp: number
  loading: {
    fetchingBandwidth: boolean
    fetchingconcurrent: boolean
    fetchingAggregatedStatsByCountries: boolean
  }
  errors: {
    fetchingBandwidth: string
    fetchingconcurrent: string
    fetchingAggregatedStatsByCountries: string
  }
}
interface ChartrStateInter {
  data: Data
  local: Local
}

/* --- ACTIONS --- */
type chartsActions = ActionType<typeof actions>

/* --- EXPORTS --- */

export type Range = {
  toTimestamp?: number
  fromTimestamp?: number
  to?: number
  from?: number
}
export type FetchBandwithPayload = {
  toTimestamp?: number
  fromTimestamp?: number
  aggregate?: string
}

export type ChartrState = ChartrStateInter
export type ChartsActions = chartsActions
