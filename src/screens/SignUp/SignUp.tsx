import { useState } from "react";

import "./style.css";

import { SignUpStyle } from "./style.js";
import SignupMobile from "../../components/SignupMobile/SignupMobile";
import SignupForm from "../../components/SignupForm/Form";
import LoginForm from "../../components/LoginForm/Form";
import { Link } from "react-router-dom";

const Signup = () => {
  const [flip, setFlip] = useState(false);

  const flipMode = () => {
    setFlip(!flip);
  };

  return (
    <SignUpStyle>
      <div className="flex"></div>

      <SignupMobile />

      <div className="body">
        <div className="containers">
          <div className="blueBg">
            <div className="box signin">
              <img
                src={`/images/logos/logoWhite.png`}
                alt="muna"
                style={{ width: "200px" }}
              />
              <h2>Already have an account</h2>
              <button
                onClick={flipMode}
                className="signinbtn"
                style={{ background: "rgb(11, 192, 180)", color: "white" }}
              >
                Sign In
              </button>
            </div>

            <div className="box signup">
              <img
                src={`/images/logos/logoWhite.png`}
                alt="muna"
                style={{ width: "200px" }}
              />
              <h2>Dont have an account?</h2>
              <button
                onClick={flipMode}
                className="signinbtn"
                style={{ background: "rgb(11, 192, 180)", color: "white" }}
              >
                Sign Up
              </button>

              <Link
                to="/forgotpassword"
                className="forgotten"
                style={{
                  textDecoration: "none",
                  margin: "5px 0",
                  color: "white",
                }}
              >
                forgot password?
              </Link>
            </div>
          </div>

          <div className={`formBx ${flip ? "active" : ""}`}>
            {flip ? (
              <div className="form signinForm">
                <SignupForm />
              </div>
            ) : (
              <div className="form signinForm">
                <LoginForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </SignUpStyle>
  );
};

export default Signup;
