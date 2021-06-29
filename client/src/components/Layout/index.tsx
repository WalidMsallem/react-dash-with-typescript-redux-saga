import React from 'react'
import { selectisAuthenticated } from '../../features/selectors/user.selectors'
import { useSelector } from 'react-redux'
import Header from './Header'
import './layout.scss'
type AppProps = {
  children?: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: AppProps): JSX.Element => {
  const isAuthenticated = useSelector(selectisAuthenticated)

  if (!isAuthenticated) {
    return <div className="auth-theme">{children}</div>
  }
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__content">{children}</div>
    </div>
  )
}

export default Layout
