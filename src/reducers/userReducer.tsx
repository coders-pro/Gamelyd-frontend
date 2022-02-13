import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'

export interface Userstate {
  loading?: boolean
  error?: string
  userInfo?: {
    first_Name?: string
    last_Name?: string
    EmailVerified?: boolean
    ID?: string
    IsDeleted?: boolean
    IsSuspended?: boolean
    email?: string
    phone?: string
    token?: string
    created_at?: string
    updated_at?: string
    user_name?: string
    user_type?: string
  }
}

const initialState: Userstate = {}

interface Action {
  type: string
  payload?: string
}

export const userLoginReducer = (
  state: Userstate = initialState,
  action: Action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      }
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (
  state: Userstate = initialState,
  action: Action
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      }
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
