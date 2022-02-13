import {
  CREATE_TOURNAMENT_FAIL,
  CREATE_TOURNAMENT_REQUEST,
  CREATE_TOURNAMENT_SUCCESS,
} from '../constants/tournamentConstants'

export interface Userstate {
  loading?: boolean
  error?: string
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
    case CREATE_TOURNAMENT_REQUEST:
      return {
        loading: true,
      }
    case CREATE_TOURNAMENT_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }
    case CREATE_TOURNAMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
