import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ForgotStyle } from "./style";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import logo from "../../assets/images/logoWhite.png";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");
  const [type3, setType3] = useState("password");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = async () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    };

    const data = {
      NewPassword: newPassword,
    };

    if (!newPassword) {
      toast.error("New password is required");
      setLoading(false);
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("New password does not match confirm password");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `https://gamelyd-test.onrender.com/users/reset`,
        data,
        config
      );
      if (!res.data.hasError) {
        setLoading(false);
        toast.success(res.data.message);
        navigate("/signup", { replace: true });
      } else {
        setLoading(false);
        toast.error(res.data.message);
      }
    } catch (err) {
      setLoading(false);
      toast.error("Error please try again");
    }
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
          <div className="tit">Reset Password</div>

          <form className="form">
            <div className="emp" />

            <div className="inputs">
              <div className="input-data">
                <input
                  type={type2}
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                  className="inputText2"
                  placeholder="New Password"
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

              <div className="input-data">
                <input
                  type={type3}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  className="inputText2"
                  placeholder="Confirm New Password"
                ></input>
                {type3 === "text" && (
                  <VisibilityOffIcon
                    onClick={() =>
                      setType3(type3 === "password" ? "text" : "password")
                    }
                    style={{ color: "rgb(11, 192, 180)" }}
                    className="eye"
                  />
                )}
                {type3 === "password" && (
                  <VisibilityIcon
                    onClick={() =>
                      setType3(type3 === "password" ? "text" : "password")
                    }
                    style={{ color: "black" }}
                    className="eye"
                  />
                )}
              </div>
            </div>
            <div className="bt">
              <Button className="buty" onClick={handleSubmit} type="button">
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ForgotStyle>
  );
};

export default ResetPassword;
