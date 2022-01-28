import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constants/userConstants'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '../store'
import axios from 'axios'

export const login =
  (
    email: string,
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
        email,
        password,
      }

      const response = await axios.post(
        'https://gamelyd.herokuapp.com/users/login',
        data,
        config
      )

      let userData = response.data.data

      localStorage.setItem('id', response.data.data.ID)

      console.log(localStorage.getItem('id'))

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
