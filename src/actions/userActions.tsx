import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '../store'
import { createBrowserHistory } from 'history'

import axios from 'axios'

export const login =
  (
    emails: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
          token: '',
        },
      }

      const data = {
        email: emails,
        password,
      }

      console.log(data)

      const response = await axios.post(
        'https://gamelyd.herokuapp.com/users/login',
        data,
        config
      )

      let userData = response.data.data

      let history = createBrowserHistory()

      history.push('/')

      // console.log(history)

      // console.log(response.data.hasError)

      if (response.data.hasError === false) {
        localStorage.setItem('id', response.data.data.ID)
        localStorage.setItem('first', response.data.data.first_name)
        localStorage.setItem('last', response.data.data.last_name)
        localStorage.setItem('user', response.data.data.user_name)
        localStorage.setItem('token', response.data.data.token)
      } else {
        console.log('error')
      }

      // pass  data to reducer

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userData,
      })
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error,
      })
    }
  }

export const register =
  (
    signupEmail: string,
    signupPassword: string,
    username: string,
    firstName: string,
    lastName: string,
    phone: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
          token: '',
        },
      }

      const data = {
        Email: signupEmail,
        Password: signupPassword,
        User_name: username,
        Last_name: lastName,
        First_name: firstName,
        Phone: phone,
        User_type: 'USER',
      }

      console.log(data)

      const response = await axios.post(
        'https://gamelyd.herokuapp.com/users/signup',
        data,
        config
      )

      //   let userData = response.data.data

      if (response.data.hasError) {
        localStorage.setItem('id', response.data.data.ID)
        localStorage.setItem('first', response.data.data.first_name)
        localStorage.setItem('last', response.data.data.last_name)
        localStorage.setItem('user', response.data.data.user_name)
        localStorage.setItem('token', response.data.data.token)
      } else {
        console.log('error')
      }

      let userData = response.data.data

      // pass  data to reducer

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: userData,
      })
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error,
      })
    }
  }
