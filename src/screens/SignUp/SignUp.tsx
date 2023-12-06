import { useState } from "react";
import { SignUpStyle } from "./style.js";
import SignupForm from "../../components/SignupForm/Form";
import LoginForm from "../../components/LoginForm/Form";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoWhite.png";

const Signup = () => {
  const [flip, setFlip] = useState(false);

  const flipMode = () => {
    setFlip(!flip);
  };

  // <div className={`formBx ${flip ? "active" : ""}`}>
  //   {flip ? (
  //     <div className="form signinForm">
  //       <SignupForm />
  //     </div>
  //   ) : (
  //     <div className="form signinForm">
  //       <LoginForm />
  //     </div>
  //   )}
  // </div>;

  return (
    <SignUpStyle>
      <div className="left">
        <div className="pad" />
      </div>
      <div className="right">
        <div className="top">
          <img className="logo" src={logo} alt="" />
          <div className="tit">{flip ? "Create an Account" : "Welcome Back"}</div>
        </div>
        {!flip ? (
          <LoginForm flip={() => setFlip(!flip)} />
        ) : (
          <SignupForm flip={() => setFlip(!flip)} />
        )}
      </div>
    </SignUpStyle>
  );
};

export default Signup;
