import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { LoginFormStyle } from "./style";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
import { useApi } from "../../api";
import { User } from "../../User";

const LoginForm = () => {
  // login state
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { state, isPending, error, call, clearState } = useApi({
    route: `users/login`,
    method: "POST",
    callback: (res: any) => {
      User().save({
        user: res?.data,
      });
      localStorage.setItem("id", res.data.data.ID);
      localStorage.setItem("first", res.data.data.first_name);
      localStorage.setItem("last", res.data.data.last_name);
      localStorage.setItem("user", res.data.data.user_name);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("phone", res.data.data.phone);
      localStorage.setItem("token", res.data.data.token);
    },
  });

  const userInfo = User().get();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo?.user) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const loginHandler = (e: any) => {
    e.preventDefault();

    call({
      body: {
        email: emails,
        password,
      },
    });
  };
  return (
    <LoginFormStyle>
      {isPending && <ButtonLoader />}
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
