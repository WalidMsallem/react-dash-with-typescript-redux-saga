import React, { useEffect } from 'react'
import Login from './components/Login'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import PrivateRoute from './components/PrivateRoute'
import { useDispatch as _useDispatch, useSelector } from 'react-redux'
import userActionTypes from './features/constants/user.constants'
import {  Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { selectisAuthenticated } from './features/selectors/user.selectors'
import history from './utils/history'
import './App.scss'

function App() {
  const dispatch = _useDispatch()
  const isAuthenticated = !!useSelector(selectisAuthenticated)

  useEffect(() => {
    if (!isAuthenticated && localStorage.getItem('token')) {
      dispatch({ type: userActionTypes.GET_PROFILE.request })
    }
  }, []) 

  return (
    <Layout>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={'/login'} component={Login} />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            path="/"
            authenticationPath="/login"
            component={LandingPage}
          />
        </Switch>
      </ConnectedRouter>
    </Layout>
  )
}

export default App
