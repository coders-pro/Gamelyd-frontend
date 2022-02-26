import { Phone } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Style } from "./style";
import Loader from "../ButtonLoader/ButtonLoader";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function FolderList(props) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");
  const [type3, setType3] = useState("password");

  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {}, []);

  const handleSubmit = async () => {
    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    };

    const data = {
      Password: password,
      NewPassword: newPassword,
    };

    console.log(data);
    if (newPassword !== confirmPassword) {
      toast.error("New password does not match confirm password");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `https://gamelyd.herokuapp.com/users/changePassword/${props.user.user_id}`,
        data,
        config
      );
      if (!res.data.hasError) {
        setLoading(false);
        toast.success(res.data.message);
        navigate("/", { replace: true });
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
    <Style>
      {loading && <Loader />}
      <form className="game-form">
        <div className="emp" />
        <div className="wrapper">
          <div className="input-data">
            <input
              type={type1}
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>

            <label>Password</label>
            <div className="underline"></div>
            {type1 === "text" && (
              <VisibilityOffIcon
                onClick={() =>
                  setType1(type1 === "password" ? "text" : "password")
                }
                style={{ color: "rgb(11, 192, 180)" }}
                className="eye"
              />
            )}
            {type1 === "password" && (
              <VisibilityIcon
                onClick={() =>
                  setType1(type1 === "password" ? "text" : "password")
                }
                style={{ color: "white" }}
                className="eye"
              />
            )}
          </div>

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

            <label>Confirm New Password</label>
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
    </Style>
  );
}
