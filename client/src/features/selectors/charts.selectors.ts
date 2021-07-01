/**
 * Charts selectors
 */

import { createSelector } from 'reselect'

export const selectRange = createSelector(
  (state: any): object => state.charts,
  (charts: any): object => ({
    toTimestamp: charts.local.toTimestamp,
    fromTimestamp: charts.local.fromTimestamp,
  }),
)

export const selectBandwidthData = createSelector(
  (state: any): object => state.charts,
  (charts: any): object => ({
    bandwidth: charts.data.bandwidth,
    cdnMax: charts.data.bandwidthMax.cdn,
  }),
)

export const selectConcurrentData = createSelector(
  (state: any): object => state.charts,
  (charts: any): object => ({
    concurrent: charts.data.concurrent,
  }),
)
export const selectAggregatedStatsByCountriesData = createSelector(
  (state: any): object => state.charts,
  (charts: any): object =>
    charts.data.aggregatedStatsByCountries.filter(
      (el: any, index: number) => index < 10,
    ),
)
