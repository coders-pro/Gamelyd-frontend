import { Phone } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Style } from "./style";
import Loader from "../ButtonLoader/ButtonLoader";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { User } from "../../User";

export default function EditUser(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [twitter, setTwitter] = useState("");
  const [insta, setInsta] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linked, setLinked] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      token: User().get()?.user?.token,
    };
    setFirstName(props.user.first_name);
    setLastName(props.user.last_name);
    setEmail(props.user.email);
    setNumber(props.user.phone);
    setTwitter(props.user.Twitter);
    setInsta(props.user.Instagram);
    setFacebook(props.user.Facebook);
    setCountry(props.user.Country);
    setLinked(props.user.Linkedin);
    setUsername(props.user.user_name);
  }, []);

  const handleSubmit = async () => {
    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
        token: User().get()?.user?.token,
      },
    };

    const data = {
      Email: email,
      Last_name: lastName,
      first_name: firstName,
      user_name: userName,
      Phone: number,
      Twitter: twitter,
      Instagram: insta,
      Linkedin: linked,
      Facebook: facebook,
      Country: country,
    };

    try {
      const res = await axios.post(
        `https://gamelyd-test.onrender.com/users/editUser/${props.user.user_id}`,
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
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            ></input>

            <label>First Name</label>
            <div className="underline"></div>
          </div>

          <div className="input-data">
            <input
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            ></input>

            <label>Last Name</label>
            <div className="underline"></div>
          </div>

          <div className="input-data">
            <input
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={userName}
            ></input>

            <label>User Name</label>
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
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            ></input>

            <label>Phone Number</label>
            <div className="underline"></div>
          </div>

          <div className="input-data">
            <input
              type="text"
              required
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            ></input>

            <label>Country</label>
            <div className="underline"></div>
          </div>

          <div className="input-data">
            <input
              type="text"
              required
              onChange={(e) => setFacebook(e.target.value)}
              value={facebook}
            ></input>

            <label>Facebook Link</label>
            <div className="underline"></div>
          </div>

          <div className="input-data">
            <input
              type="text"
              required
              onChange={(e) => setInsta(e.target.value)}
              value={insta}
            ></input>

            <label>Instagram Link</label>
            <div className="underline"></div>
          </div>

          <div className="input-data">
            <input
              type="text"
              required
              onChange={(e) => setTwitter(e.target.value)}
              value={twitter}
            ></input>

            <label>Twitter Link</label>
            <div className="underline"></div>
          </div>

          <div className="input-data">
            <input
              type="text"
              required
              onChange={(e) => setLinked(e.target.value)}
              value={linked}
            ></input>

            <label>LinkedIn Link</label>
            <div className="underline"></div>
          </div>
        </div>
        <button className="buty" onClick={handleSubmit} type="button">
          Update
        </button>
      </form>
    </Style>
  );
}
