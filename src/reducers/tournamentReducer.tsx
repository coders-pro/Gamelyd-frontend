import { SAVE_ITEM } from '../constants/tournamentConstants'

interface data {
  Game?: string
  Type?: string
  Mode?: string
  Shuffle?: string
  Size?: string
}

const initialState: data = {}

interface Action {
  type: string
  payload?: { name: string; value: string }
}

export const userLoginReducer = (
  state: data = initialState,
  action: Action
) => {
  switch (action.type) {
    case SAVE_ITEM:
      return {
        loading: true,
      }
    default:
      return state
  }
}
