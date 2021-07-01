import React, { useEffect } from 'react'
import moment from 'moment'
import { Line } from 'react-chartjs-2'
import { Divider } from 'antd'

import { useDispatch as _useDispatch, useSelector } from 'react-redux'
import {
  selectConcurrentData,
  selectRange,
} from '../../features/selectors/charts.selectors'
import { fetchConcurrent } from '../../features/actions/charts.actions'

const dateString = (v: number): any => moment.unix(v).format('MMM DD')

const Concurrent = (): JSX.Element => {
  const dispatch = _useDispatch()

  const range: { fromTimestamp: number; toTimestamp: number } | any =
    useSelector(selectRange)

  const concurrentData = useSelector(selectConcurrentData)
  const { concurrent }: any = concurrentData

  useEffect(() => {
    range && dispatch(fetchConcurrent(range))
  }, [])

  const data = {
    labels: concurrent.audience.map((el: any) => dateString(el[1])),
    datasets: [
      {
        label: 'Audience',
        data: concurrent.audience.map((el: any) => el[1]),
        fill: false,
        backgroundColor: ' #333',
        borderColor: ' #333',
      },
    ],
  }

  return (
    <div className="chart-container">
      <Divider orientation="left" plain>
        <h2 className="chart-title"> Concurrent viewers </h2>
      </Divider>
      <Line type="" data={data} options={{}} />
    </div>
  )
}

export default Concurrent
