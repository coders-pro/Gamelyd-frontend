import { Phone } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Style } from "./style";
import Loader from "../ButtonLoader/ButtonLoader";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ChangePassword(props) {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

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
      Message: message,
      Name: name,
      Email: email,
      For: subject,
      UserId: localStorage.getItem("id"),
    };

    try {
      const res = await axios.post(
        `https://gamelyd.onrender.com/reportAbuse/save`,
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
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>

            <label>Full Name</label>
            <div className="underline"></div>
          </div>

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

          <div className="input-data">
            <input
              type="text"
              required
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            ></input>

            <label>Subject</label>
            <div className="underline"></div>
          </div>

          <div className="input-data">
            <input
              type="text"
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></input>

            <label>Complain</label>
            <div className="underline"></div>
          </div>
        </div>
        <button className="buty" onClick={handleSubmit} type="button">
          Send
        </button>
      </form>
    </Style>
  );
}
