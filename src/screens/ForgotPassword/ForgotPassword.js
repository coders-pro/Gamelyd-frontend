import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ForgotStyle } from "./style";
import Loader from "../../components/ButtonLoader/ButtonLoader";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const back = () => {
    navigate("/signup", { replace: true });
  };

  const handleSubmit = () => {
    let body = {
      Email: email,
    };
    setLoading(true);
    axios
      .post(`https://gamelyd-test.onrender.com/users/forgot`, body)
      .then((res) => {
        if (!res.data.hasError) {
          toast.success(res.data.message);
          setLoading(false);
        } else {
          toast.error(res.data.message);
          setLoading(false);
        }
      });
  };

  return (
    <ForgotStyle>
      {loading && <Loader />}
      <div className="left" />

      <div className="right">
        <div>
          <form className="game-form">
            <div className="emp" />
            <div className="wrapper">
              <h2 style={{ textAlign: "center" }}>Forgot Password</h2>

              <div className="input-data">
                <input
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></input>
                <label>Email</label>
                <div className="underline"></div>
              </div>

              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
              <div
                onClick={back}
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                Back
              </div>
            </div>
          </form>
        </div>
      </div>
    </ForgotStyle>
  );
};

export default ForgotPassword;
