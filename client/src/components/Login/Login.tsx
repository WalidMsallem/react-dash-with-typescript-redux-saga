import React from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch as _useDispatch, useSelector } from 'react-redux'
import { login } from '../../features/actions/user.actions'
import {
  selectLoginError,
  selectLoginLogin,
} from '../../features/selectors/user.selectors'
import { isEmpty } from 'lodash'

import './login.scss'

const Login = (): JSX.Element => {
  const dispatch = _useDispatch()
  const apiError = useSelector(selectLoginError)
  const loading = !!useSelector(selectLoginLogin)

  const onFinish = (values: any):void => {
    dispatch(login(values))
  }

  return (
    <div className="login">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          name="identifiant"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="identifiant" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      {apiError && !isEmpty(apiError) && (
        <div className="errors-section">{apiError}</div>
      )}
    </div>
  )
}

export default Login
