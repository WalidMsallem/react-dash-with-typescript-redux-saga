import React from 'react'
import { PageHeader, Menu, Dropdown, Button, Tag } from 'antd'
import { useSelector } from 'react-redux'
import { selectisUserInfo } from '../../features/selectors/user.selectors'
import initials from 'initials'
import ColorHash from 'color-hash'

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

export default function Header(): JSX.Element {
  const userInfo: userInfoType = useSelector(selectisUserInfo)

  const colorHash = new ColorHash()
  const userName = `${userInfo.fname} ${userInfo.lname}`
  return (
    <header>
      <PageHeader
        title={userName}
        className="site-page-header"
        subTitle={
          <div>
            <div>{`Company : ${userInfo.company}`} </div>
            <div>{`${userInfo.description}`} </div>
          </div>
        }
        tags={<Tag color="blue"> {userInfo.website} </Tag>}
        extra={[<DropdownMenu key="more" />]}
        avatar={{
          size: 50,
          children: initials(userName),
          style: { backgroundColor: `${colorHash.hex(userName)}` },
        }}
      />
    </header>
  )
}
