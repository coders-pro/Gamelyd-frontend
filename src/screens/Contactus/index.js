import { Phone } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Style } from "./style";
import Loader from "../../components/ButtonLoader/ButtonLoader";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/NavBar/Navbar";
import Hero from "../../components/Hero/Hero";
import MailIcon from "@mui/icons-material/Mail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Footer from "../../components/Footer/Footer";
import ImageRotate from "../../components/ImageRotate/ImageRotate";

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
        token: localStorage.getItem("token"),
      },
    };

    const data = {
      Name: name,
      Email: email,
      Message: message,
    };

    console.log(data);

    try {
      const res = await axios.post(
        `https://gamelyd.herokuapp.com/contactUs/save`,
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

      <Nav />
      <Hero
        pic1={"/images/soldier7.png"}
        pic2={"/images/soldier14.png"}
        background={"/images/soldier7.png"}
        message="WELCOME ABOARD SOLDIER"
        time="TIME TO CONNECT"
      />
      <div className="bod">
        <div className="bos">
          <div className="info">
            <div className="head">Contact Us</div>
            <table>
              <tbody>
                <tr>
                  <th>
                    <MailIcon />
                  </th>
                  <td>madumcbobby@yahoo.com</td>
                </tr>
                <tr>
                  <th>
                    <MailIcon />
                  </th>
                  <td>stanley@yahoo.com</td>
                </tr>
                <tr>
                  <th>
                    <PhoneInTalkIcon />
                  </th>
                  <td>+2348161808892</td>
                </tr>
                <tr>
                  <th>
                    <PhoneInTalkIcon />
                  </th>
                  <td>+2348161804732</td>
                </tr>
              </tbody>
            </table>
            <div className="icons">
              <a href="twiter.com">
                {" "}
                <TwitterIcon />
              </a>
              <a href="twiter.com">
                <FacebookIcon />
              </a>
              <a href="twiter.com">
                {" "}
                <LinkedInIcon />
              </a>
              <a href="twiter.com">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="form">
            <form className="game-form">
              <div className="hi">Get in Touch</div>
              <div className="sub">Feel free to drop us a line below</div>
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
                    type="text"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    rows="5"
                    placeholder="message"
                  ></textarea>
                </div>
              </div>
              <button className="buty" onClick={handleSubmit} type="button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="body">
        <div className="boz">
          <form className="game-form">
            <div className="hi">Get in Touch</div>
            <div className="sub">Feel free to drop us a line below</div>
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
                  type="text"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  rows="5"
                  placeholder="message"
                ></textarea>

               
              </div>
            </div>
            <button className="buty" onClick={handleSubmit} type="button">
              Send
            </button>
          </form>
        </div>
        <div className="side">
          <div className="head">Contact Us</div>
          <table>
            <tbody>
              <tr>
                <th>
                  <MailIcon />
                </th>
                <td>madumcbobby@yahoo.com</td>
              </tr>
              <tr>
                <th>
                  <MailIcon />
                </th>
                <td>stanley@yahoo.com</td>
              </tr>
              <tr>
                <th>
                  <PhoneInTalkIcon />
                </th>
                <td>+2348161808892</td>
              </tr>
              <tr>
                <th>
                  <PhoneInTalkIcon />
                </th>
                <td>+2348161804732</td>
              </tr>
            </tbody>
          </table>
          <div className="icons">
            <a href="twiter.com">
              {" "}
              <TwitterIcon />
            </a>
            <a href="twiter.com">
              <FacebookIcon />
            </a>
            <a href="twiter.com">
              {" "}
              <LinkedInIcon />
            </a>
            <a href="twiter.com">
              <InstagramIcon />
            </a>
          </div>
        </div> */}
      {/* </div> */}
      <div className="imagerotate">
        <div className="title">Sponsors</div>
        <ImageRotate />
      </div>
      <Footer />
    </Style>
  );
}
