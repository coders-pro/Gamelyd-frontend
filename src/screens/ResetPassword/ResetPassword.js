import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ForgotStyle } from "./style";
import Loader from "../../components/ButtonLoader/ButtonLoader";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";

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
      <div className="left" />

      <div className="right">
        <div>
          <form className="game-form">
            <div className="emp" />

            <div className="wrapper">
              <h2 style={{ textAlign: "center" }}>Reset Password</h2>
              <div className="input-data">
                <input
                  type={type2}
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                ></input>

                <label>New Password</label>
                <div className="underline"></div>
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
                    style={{ color: "white" }}
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
                ></input>

                <label>Confirm Password</label>
                <div className="underline"></div>
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
                    style={{ color: "white" }}
                    className="eye"
                  />
                )}
              </div>
            </div>
            <button className="buty" onClick={handleSubmit} type="button">
              Update
            </button>
          </form>
        </div>
      </div>
    </ForgotStyle>
  );
};

export default ResetPassword;
