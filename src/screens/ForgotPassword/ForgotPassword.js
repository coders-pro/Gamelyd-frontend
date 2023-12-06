import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ForgotStyle } from "./style";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logoWhite.png";
import Button from "../../components/Button";

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
      <div className="left">
        <div className="pad"></div>
      </div>

      <div className="right">
        <div className="top">
          <img className="logo" src={logo} alt="" />
          <div className="tit">Forgot Password</div>

          <form className="form">
            <div className="emp" />
            <div className="inputs">
              <div className="input-data">
                <input
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="inputText2"
                  placeholder="Email"
                ></input>
              </div>
            </div>
            <div className="bt">
              <Button className="buty" onClick={handleSubmit} type="button">
                Update
              </Button>
            </div>
          
            <div className="already">
              want to login? <span className="lin" onClick={back}>Go Back</span>
            </div>
          </form>
        </div>
      </div>
    </ForgotStyle>
  );
};

export default ForgotPassword;
