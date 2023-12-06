import { Phone } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Style } from "./style";
import Loader from "../../components/Loader";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/NavBar/Navbar";
import Hero from "../../components/TournamentHeader/index";
import MailIcon from "@mui/icons-material/Mail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Footer from "../../components/Footer/Footer";
import ImageRotate from "../../components/ImageRotate/ImageRotate";
import Scroll from "../../components/Scroll/Scroll4";
import { User } from "../../User";
import Button from "../../components/Button";

export default function FolderList() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let navigate = useNavigate();

  useEffect(() => {}, []);

  const handleSubmit = async () => {
    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
        token: User().get()?.user?.token,
      },
    };

    const data = {
      Name: name,
      Email: email,
      Message: message,
    };

    try {
      const res = await axios.post(
        `https://gamelyd-test.onrender.com/contactUs/save`,
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

      <Nav message="" />
      <div className="page">
        <div className="left">
          <form>
            <div className="txbx">
              <div className="cap">LET'S</div>
              <div className="subCap">GET IN TOUCH</div>
              <div className="sub">Feel free to drop us a line below</div>
            </div>

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
                <textarea
                  className="texta"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  rows={5}
                  placeholder="message"
                ></textarea>
              </div>
            </div>
          </form>
          <div className="button">
            <Button onClick={handleSubmit}>Send</Button>
          </div>
        </div>

        <div className="right">
          <div className="im"></div>
          <div className="info">
            <div className="tit">Contact Us</div>
            <div className="det">
              <table>
                <tbody>
                  <tr>
                    <th>Email</th>
                    <td>Madumcbobby@yahoo.com</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>08161808895</td>
                  </tr>
                  <tr>
                    <th>Twitter</th>
                    <td>@gamelyd.co</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Style>
  );
}
