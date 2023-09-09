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

export const userReducer = (state = initialState, action: any) => {  
  switch (action.type) {
    case 'SAVE_USER_DETAILS_TO_LOCAL_STORAGE':
      // Handle the action and update state if needed
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
