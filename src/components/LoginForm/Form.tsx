import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { LoginFormStyle } from "./style";
import { login } from "../../actions/userActions";
import { RootState } from "../../store.js";
import { Userstate } from "../../reducers/userReducer.js";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";

const LoginForm = () => {
  // login state
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector<RootState, Userstate>(
    (state) => state.userLogin
  );

  const { loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const loginHandler = (e: any) => {
    e.preventDefault();

    dispatch(login(emails, password));
  };
  return (
    <LoginFormStyle>
      {loading && <ButtonLoader />}
      <div className="desktop">
        <form>
          <h3 style={{ color: "white" }}>Login </h3>
          <div className="inpu">
            <div className="wrapper">
              <div className="input-data">
                <input
                  type="text"
                  required
                  value={emails}
                  onChange={(e) => setEmails(e.target.value)}
                ></input>

                <label>Email</label>
                <div className="underline"></div>
              </div>
              <div className="input-data">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>

                <label>Password</label>
                <div className="underline"></div>
              </div>
            </div>
          </div>
          <button
            className="submit"
            type="submit"
            onClick={(e) => loginHandler(e)}
          >
            Login
          </button>
        </form>
      </div>
      <div className="mobile">
        <form>
          <h2>Login</h2>
          <div className="inpu">
            <div className="wrapper">
              <div className="input-data">
                <input
                  type="text"
                  required
                  value={emails}
                  onChange={(e) => setEmails(e.target.value)}
                ></input>

                <label>Email</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>

                <label>Password</label>
                <div className="underline"></div>
              </div>

              <button
                className="submit"
                type="submit"
                onClick={(e) => loginHandler(e)}
              >
                Login{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </LoginFormStyle>
  );
};

export default LoginForm;
