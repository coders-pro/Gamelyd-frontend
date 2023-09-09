import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { toast } from "react-toastify";

import axios from "axios";

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
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
          token: "",
        },
      };

      const data = {
        email: emails,
        password,
      };

      const response = await axios.post(
        "https://gamelyd-test.onrender.com/users/login",
        data,
        config
      );

      let userData = response.data.data;

      if (response.data.hasError === false) {
        localStorage.setItem("id", response.data.data.ID);
        localStorage.setItem("first", response.data.data.first_name);
        localStorage.setItem("last", response.data.data.last_name);
        localStorage.setItem("user", response.data.data.user_name);
        localStorage.setItem("email", response.data.data.email);
        localStorage.setItem("phone", response.data.data.phone);
        localStorage.setItem("token", response.data.data.token);
        toast.success("Login successful");
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: userData,
        });
      } else {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: response.data.error,
        });
        toast.error(response.data.message);
      }

      // pass  data to reducer
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error,
      });
    }
  };

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
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
          token: "",
        },
      };

      const data = {
        Email: signupEmail,
        Password: signupPassword,
        User_name: username,
        Last_name: lastName,
        First_name: firstName,
        Phone: phone,
        User_type: "USER",
      };

      const response = await axios.post(
        "https://gamelyd-test.onrender.com/users/signup",
        data,
        config
      );

      let userData = response.data.data;

      if (response.data.hasError === false) {
        localStorage.setItem("id", response.data.data.ID);
        localStorage.setItem("first", response.data.data.first_name);
        localStorage.setItem("last", response.data.data.last_name);
        localStorage.setItem("user", response.data.data.user_name);
        localStorage.setItem("email", response.data.data.email);
        localStorage.setItem("phone", response.data.data.phone);
        localStorage.setItem("token", response.data.data.token);
        toast.success("Login successful");
        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: userData,
        });
      } else {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: response.data.error,
        });

        toast.error("Sorry something went wrong");
      }

      // pass  data to reducer
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error,
      });
    }
  };
