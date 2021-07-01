import { ActionType } from 'typesafe-actions'
import * as actions from '../actions/charts.actions'

/* --- STATE --- */
type Bandwidth =
  | {
      cdn: []
      p2p: []
    }
  | {}

interface Data {
  bandwidth: Bandwidth
  bandwidthMax: { cdn: Number | null; p2p: Number | null }
}
interface Local {
  fromTimestamp: number
  toTimestamp: number
  loading: {
    fetchingBandwidth: boolean
  }
  errors: {
    fetchingBandwidth: string
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
