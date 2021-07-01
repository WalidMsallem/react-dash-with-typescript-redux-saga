import React from 'react'
import { PageHeader, Button, Tag } from 'antd'
import { useSelector, useDispatch as _useDispatch } from 'react-redux'
import { selectisUserInfo } from '../../features/selectors/user.selectors'
import { selectRange } from '../../features/selectors/charts.selectors'
import initials from 'initials'
import ColorHash from 'color-hash'
import { LogoutOutlined } from '@ant-design/icons'
import { DatePicker } from 'antd'
import { changeRange } from '../../features/actions/charts.actions'
import { logout } from '../../features/actions/user.actions'
import moment from 'moment'

const { RangePicker } = DatePicker

type userInfoType =
  | {
      fname: string
      lname: string
      description: string
      website: string
      company: string
    }
  | any

const dateString = (v: number): any => moment.unix(v)

export default function Header(): JSX.Element {
  const userInfo: userInfoType = useSelector(selectisUserInfo)

  const colorHash = new ColorHash()
  const userName = `${userInfo.fname} ${userInfo.lname}`
  const dispatch = _useDispatch()

  const range: { fromTimestamp: number; toTimestamp: number } | any =
    useSelector(selectRange)

  return (
    <header>
      <PageHeader
        title={userName}
        className="site-page-header"
        subTitle={`Company : ${userInfo.company}`}
        tags={<Tag color="blue"> {userInfo.website} </Tag>}
        extra={[
          <RangePicker
            allowClear={false}
            defaultValue={[
              dateString(range.fromTimestamp),
              dateString(range.toTimestamp),
            ]}
            key="range-picker"
            picker="month"
            onChange={(values: any) => {
              dispatch(
                changeRange({
                  toTimestamp: values[1].unix(),
                  fromTimestamp: values[0].unix(),
                }),
              )
            }}
          />,
          <Button key="logout" danger onClick={() => dispatch(logout())}>
            Logout
            <LogoutOutlined />
          </Button>,
        ]}
        avatar={{
          size: 50,
          children: initials(userName),
          style: { backgroundColor: `${colorHash.hex(userName)}` },
        }}
      />
    </header>
  )
}
