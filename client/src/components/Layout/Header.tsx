import React from 'react'
import { PageHeader, Menu, Dropdown, Button, Tag } from 'antd'
import { useSelector, useDispatch as _useDispatch } from 'react-redux'
import { selectisUserInfo } from '../../features/selectors/user.selectors'
import { selectisRange } from '../../features/selectors/charts.selectors'
import initials from 'initials'
import ColorHash from 'color-hash'
import { DatePicker } from 'antd'
import { changeRange } from '../../features/actions/charts.actions'

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

const menu: JSX.Element = (
  <Menu>
    <Menu.Item>Logout</Menu.Item>
  </Menu>
)

const DropdownMenu = (): JSX.Element => (
  <Dropdown key="more" overlay={menu}>
    <Button>Menu</Button>
  </Dropdown>
)

const dateString = (v: number): any => moment.unix(v)

export default function Header(): JSX.Element {
  const userInfo: userInfoType = useSelector(selectisUserInfo)

  const colorHash = new ColorHash()
  const userName = `${userInfo.fname} ${userInfo.lname}`
  const dispatch = _useDispatch()

  const range: { fromTimestamp: number; toTimestamp: number } | any =
    useSelector(selectisRange)
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
          <DropdownMenu key="more" />,
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
