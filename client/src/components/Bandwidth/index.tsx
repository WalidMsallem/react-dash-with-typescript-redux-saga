import React, { useEffect } from 'react'
import { CanvasJSChart } from 'canvasjs-react-charts'
import moment from 'moment'
import { useDispatch as _useDispatch, useSelector } from 'react-redux'
import {
  selectisBandwidthData,
  selectisRange,
} from '../../features/selectors/charts.selectors'
import { fetchBandWidth } from '../../features/actions/charts.actions'

const dateString = (v: number): any => moment.unix(v).format('MMM DD')
const formatTogGbps = (n: number): number => Number((n * 1e-6).toFixed(2))

export default function Bandwidth() {
  const dispatch = _useDispatch()

  const range: { fromTimestamp: number; toTimestamp: number } | any =
    useSelector(selectisRange)

  const bandwidthData = useSelector(selectisBandwidthData)
  const { bandwidth, cdnMax }: any = bandwidthData

  useEffect(() => {
    range && dispatch(fetchBandWidth(range))
  }, [])
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light1',
    zoomEnabled: true,
    title: {
      text: 'Bandwidth usage',
    },
    axisX: {
      valueFormatString: 'DD MMM',
    },
    axisY: {
      scaleBreaks: {
        autoCalculate: true,
      },
      suffix: 'Gbps',
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: 'area',
        name: 'P2P',
        showInLegend: true,
        dataPoints: bandwidth.p2p.map((el: any) => ({
          y: formatTogGbps(el[1]),
          label: dateString(el[1]),
        })),
      },
      {
        type: 'area',
        name: 'CDN',
        showInLegend: true,
        dataPoints: bandwidth.cdn.map((el: any) => ({
          y: formatTogGbps(el[1]),
          label: dateString(el[1]),
        })),
      },
      {
        type: 'spline',
        name: 'Max combined',
        showInLegend: true,
        dataPoints: bandwidth.cdn.map((el: any, index: number) => ({
          y: formatTogGbps(el[1] + bandwidth.p2p[index][1]),
          label: dateString(el[1]),
        })),
      },
      {
        name: 'CDN Max',
        showInLegend: true,
        type: 'spline',
        dataPoints: bandwidth.cdn.map((el: any, index: number) => ({
          label: dateString(el[1]),
          y: formatTogGbps(cdnMax),
        })),
      },
    ],
  }

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  )
}
