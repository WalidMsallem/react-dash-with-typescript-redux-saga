/* eslint-disable react-hooks/exhaustive-deps */
import moment from 'moment'
import { useDispatch as _useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Divider } from 'antd'
import {
  selectBandwidthData,
  selectRange,
} from '../../features/selectors/charts.selectors'
import { fetchBandWidth } from '../../features/actions/charts.actions'

const dateString = (v: number): any => moment.unix(v).format('MMM DD')
const formatTogGbps = (n: number): number => Number((n * 1e-6).toFixed(2))

const Bandwidth = (): JSX.Element => {
  const dispatch = _useDispatch()

  const range: { fromTimestamp: number; toTimestamp: number } | any =
    useSelector(selectRange)

  const bandwidthData = useSelector(selectBandwidthData)
  const { bandwidth, cdnMax }: any = bandwidthData

  useEffect(() => {
    range && dispatch(fetchBandWidth(range))
  }, [])

  const data = {
    labels: bandwidth.p2p.map((el: any) => dateString(el[1])),
    datasets: [
      {
        label: 'Max combined',
        data: bandwidth.p2p.map((el: any, index: number) =>
          formatTogGbps(el[1] + bandwidth.p2p[index][1]),
        ),
        fill: false,
        backgroundColor: '#1D874D',
        borderColor: '#1D874D',
      },
      {
        label: 'CDN Max',
        data: bandwidth.p2p.map((el: any, index: number) =>
          formatTogGbps(cdnMax),
        ),
        fill: false,
        backgroundColor: '#FFBF10',
        borderColor: '#FFBF10',
      },
      {
        label: 'P2P',
        data: bandwidth.cdn.map((el: any) => formatTogGbps(el[1])),
        fill: true,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'CDN',
        data: bandwidth.p2p.map((el: any) => formatTogGbps(el[1])),
        fill: true,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  }

  return (
    <div className="chart-container">
      <Divider orientation="left" plain>
        <h2 className="chart-title"> Bandwidth usage </h2>
      </Divider>
      <Line data={data} options={{}} type="" />
    </div>
  )
}

export default Bandwidth
