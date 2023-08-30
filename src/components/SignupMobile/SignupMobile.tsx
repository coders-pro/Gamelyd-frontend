import React, { useState } from "react";

import { SignUpStyle } from "./style.js";
import SignupForm from "../SignupForm/Form";
import LoginForm from "../LoginForm/Form";
import { Link } from "react-router-dom";

const SignupMobile = () => {
  const [flip, setFlip] = useState(false);

  const flipMode = () => {
    setFlip(!flip);
  };

  return (
    <SignUpStyle>
      <img
        src={`/images/logos/logoWhite.png`}
        alt="muna"
        style={{ width: "200px" }}
        className="logos"
      />
      <div className="mobile-body">
        <div className="blue">
          <div className="signup">
            <h2>Already have an account?</h2>
            <button onClick={flipMode} className="signinbtn">
              Sign In
            </button>
          </div>

          <div className="signup">
            <h2>Dont have an account?</h2>
            <button onClick={flipMode} className="signinbtn">
              Sign Up
            </button>
            <Link
              to="/forgotpassword"
              style={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
                color: "white",
              }}
            >
              Forgot Password
            </Link>
          </div>
        </div>

        <div className="white">
          <div className={`white ${flip ? "mobactive" : ""}`}>
            {flip ? (
              <div className="signinForm">
                <div className="bx">
                  <SignupForm />
                </div>
              </div>
            ) : (
              <>
                <div className="signinForm">
                  <div className="bx">
                    <LoginForm />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </SignUpStyle>
  );
};

export default SignupMobile;
