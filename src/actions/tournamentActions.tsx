import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { createBrowserHistory } from "history";

import axios from "axios";
import {
  CREATE_TOURNAMENT_FAIL,
  CREATE_TOURNAMENT_REQUEST,
  CREATE_TOURNAMENT_SUCCESS,
} from "../constants/tournamentConstants";

export const login =
  (
    competition: string,
    participants: string,
    date: string,
    link: string,
    game: string,
    mode: string,
    shuffle: string,
    size: string,
    type: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: CREATE_TOURNAMENT_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
          token: "",
        },
      };

      const data = {
        Date: date,
      };

      const response = await axios.post(
        "https://gamelyd-test.onrender.com/users/login",
        data,
        config
      );

      let userData = response.data.data;

      let history = createBrowserHistory();

      history.push("/");

      // console.log(history)

      // console.log(response.data.hasError)

      if (response.data.hasError === false) {
        localStorage.setItem("id", response.data.data.ID);
        localStorage.setItem("first", response.data.data.first_name);
        localStorage.setItem("last", response.data.data.last_name);
        localStorage.setItem("user", response.data.data.user_name);
        localStorage.setItem("token", response.data.data.token);
      } else {
      }

      // pass  data to reducer

      dispatch({
        type: CREATE_TOURNAMENT_SUCCESS,
        payload: userData,
      });
    } catch (error) {
      dispatch({
        type: CREATE_TOURNAMENT_FAIL,
        payload: error,
      });
    }
  };
