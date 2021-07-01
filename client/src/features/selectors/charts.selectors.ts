import { createSelector } from 'reselect'

export const selectisRange = createSelector(
  (state: any): object => state.charts,
  (charts: any): object => ({
    toTimestamp: charts.local.toTimestamp,
    fromTimestamp: charts.local.fromTimestamp,
  }),
)

export const selectisBandwidthData = createSelector(
  (state: any): object => state.charts,
  (charts: any): object => ({
    bandwidth: charts.data.bandwidth,
    cdnMax: charts.data.bandwidthMax.cdn,
  }),
)
