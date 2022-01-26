import { SignUpStyle } from "./style.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import { motion, AnimatePresence } from "framer-motion";

const Signup = () => {
  const [flip, setFlip] = useState(false);
  const flipMode = () => {
    setFlip(!flip);
    console.log(flip);
  };
  return (
    <div className="body">
      <div className="containers">
        <div className="blueBg">
          <div className="box signin">
            <h2>Already have an account</h2>
            <button onClick={flipMode} className="signinbtn">
              Sign In
            </button>
          </div>

          <div className="box signup">
            <h2>Dont have an account</h2>
            <button onClick={flipMode} className="signinbtn">
              Sign Up
            </button>
          </div>
        </div>

        <div className={`formBx ${flip ? "active" : ""}`}>
          <div className="form signinForm">
            <form>
              <h3>Signin </h3>
              <input type="text" placeholder="Username"></input>
              <input type="password" placeholder="Password"></input>
              <input
                className="submit"
                type="submit"
                placeholder="Login"
              ></input>
              <br></br>
              <Link to="/" className="forgotten">
                forgotten password
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
