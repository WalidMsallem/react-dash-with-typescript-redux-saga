/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch as _useDispatch, useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { Divider } from 'antd'
import {
  selectAggregatedStatsByCountriesData,
  selectRange,
} from '../../features/selectors/charts.selectors'
import { fetchAggregatedStatsByCountries } from '../../features/actions/charts.actions'

const AggregatedStatsByCountries = (): JSX.Element => {
  const dispatch = _useDispatch()

  const range: { fromTimestamp: number; toTimestamp: number } | any =
    useSelector(selectRange)

  const aggregatedStatsByCountriesData: [] | any = useSelector(
    selectAggregatedStatsByCountriesData,
  )

  useEffect(() => {
    range && dispatch(fetchAggregatedStatsByCountries())
  }, [])

  const data = {
    labels: aggregatedStatsByCountriesData.map((el: any) => el.country),
    datasets: [
      {
        label: 'CDN traffic in Bytes',
        data: aggregatedStatsByCountriesData.map((el: any) => el.cdn),
        backgroundColor: 'rgba(153, 102, 255, 1)',
      },
      {
        label: 'P2P traffic in Bytes',
        data: aggregatedStatsByCountriesData.map((el: any) => el.p2p),
        backgroundColor: 'rgba(255, 159, 64, 1)',
      },
    ],
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <div className="chart-container">
      <Divider orientation="left" plain>
        <h2 className="chart-title"> Aggregated stats by countries </h2>
      </Divider>
      <Bar type="" data={data} options={options} />
    </div>
  )
}

export default AggregatedStatsByCountries
