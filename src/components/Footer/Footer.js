import { FooterStyle } from "./styled";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import Modal from "../Modal/Modal";
import ImageSlider from "../Slider/ImageSlider";
import Text from "../Text/Text";
import open from "../../assets/audios/Open.mp3";
import Button from "../Button/InnerButton";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Abuse from "../ReportAbuse";

const Footer = () => {
  const modalRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const search = location.search;

  const create = () => {
    let token = localStorage.getItem("token");

    if (token) {
      modalRef.current.open();

      let audio = new Audio(open);
      audio.play();
    } else {
      toast.info("You need to login to create tournament");
      setTimeout(() => {
        navigate(`/signup?${location.pathname}`);
      }, 1000);
    }
  };

  const close = () => {
    modalRef.current.close();
  };
  const modalRef1 = useRef();

  const create1 = () => {
    modalRef1.current.open();
  };

  const close1 = () => {
    modalRef1.current.close();
  };

  useEffect(() => {
    const open = new URLSearchParams(search).get("open");

    if (open) {
      setTimeout(() => {
        modalRef.current.open();
      }, 1000);
    }
  });

  return (
    <FooterStyle>
      <Modal ref={modalRef}>
        <button onClick={close} className="close">
          X
        </button>
        <ImageSlider />
      </Modal>
      <Modal ref={modalRef1}>
        <button onClick={close1} className="close">
          X
        </button>
        <Abuse />
      </Modal>
      <div className="flex-container">
        <div className="flexer">
          <div className="about">
            <h3>About Us</h3>
            <p>
              It includes rich features and contents. It's designed and
              developed based on One Page/ Multi-page Layout,blog themes,world
              press themes and blogspot. You can use any layout from any demo
              anywhere.
            </p>
            <p>
              Our company is completely creative, clean and 100% responsive
              website. Put your business into next level with us.
            </p>
          </div>
        </div>
        <div className="flexer">
          <h3>Tags Widget</h3>
          <ul className=" kilimanjaro_widget">
            <li>
              <NavLink to="/tournament">fifa</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">CODM</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">PUBG</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Warzone</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Multipurpose</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Minimal</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Classic</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Medical</NavLink>
            </li>
          </ul>
        </div>

        <div className="flexer">
          <h3>Important Links</h3>
          <ul className="kilimanjaro_links">
            <li onClick={create}>
              <NavLink to="#">Create new tournament</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/">Terms and Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/">Privacy and policy</NavLink>
            </li>
            <li onClick={create1}>
              <NavLink to="#">Report abuse</NavLink>
            </li>
          </ul>
        </div>
        <div className="flexer">
          <div className="conta">
            <h3>Quick Contact</h3>
            <h4>Phone: </h4>
            <p>+1(975)-457-5420</p>
            <p>+1(975)-457-5420</p>
            <h4>Email: </h4>
            <p>big@ballz.nutz</p>
            <h4>Social Links</h4>
            <ul className="kilimanjaro_social_links">
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-pinterest"></i> Pinterest
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="last">© 2022 GAMELYD INC. ALL RIGHTS RESERVED.</div>
    </FooterStyle>
  );
};

export default Footer;
