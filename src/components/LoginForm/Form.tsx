import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";

import { LoginFormStyle } from "./style";
import ButtonLoader from "../Loader";
import { useApi } from "../../api";
import { User } from "../../User";
import Button from "../Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
interface propType {
  flip: any;
}

const LoginForm = ({ flip }: propType) => {
  // login state
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [type2, setType2] = useState<any>("password");

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
  if(error){
    console.log(error);
    
  }

  const userInfo = User().get();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    // if (userInfo?.user) {
    //   navigate(redirect);
    // }
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
      <form className="form">
        <div className="inputs">
          <div className="wrapper">
            <div className="input-data">
              <input
                className="inputText1"
                type="text"
                required
                value={emails}
                onChange={(e) => setEmails(e.target.value)}
                placeholder="Email Address"
              ></input>
            </div>
            <div className="input-data">
              <input
                className="inputText2"
                type={type2}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              ></input>
              {type2 === "text" && (
                <VisibilityOffIcon
                  onClick={() =>
                    setType2(type2 === "password" ? "text" : "password")
                  }
                  style={{ color: "rgb(11, 192, 180)" }}
                  className="eye"
                />
              )}
              {type2 === "password" && (
                <VisibilityIcon
                  onClick={() =>
                    setType2(type2 === "password" ? "text" : "password")
                  }
                  style={{ color: "black" }}
                  className="eye"
                />
              )}
            </div>
          </div>
        </div>
        <div className="bt">
          <Button onClick={(e: any) => loginHandler(e)}>Login</Button>
        </div>
        <div className="forgot">
          <NavLink to="/forgotpassword">forgot password</NavLink>
        </div>

        <div className="already">
          Already have an account?
          <span className="lin" onClick={flip}>
            Sign Up
          </span>
        </div>
      </form>
    </LoginFormStyle>
  );
};

export default LoginForm;
