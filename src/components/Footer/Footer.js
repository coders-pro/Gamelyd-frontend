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
      <Modal title="Create Tournament" ref={modalRef}>
        <button onClick={close} className="close">
          X
        </button>
        <ImageSlider />
      </Modal>
      <Modal title="Report Abuse" ref={modalRef1}>
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
              Gamelyd is an online plartform used for organising tournaments,
            </p>
            <p>
              We do the heavy liftings by handling all draws and stages in your
              multiplayer tornaments and all sortings in your battle royale
              tournaments.
            </p>
          </div>
        </div>
        <div className="flexer">
          <h3>Tags Widget</h3>
          <ul className=" kilimanjaro_widget">
            <li>
              <NavLink to="/tournament">Fifa</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">COD</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">PES</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">PUBG</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Fortnite</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Escape from Tarkov</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Minecraft</NavLink>
            </li>

            <li>
              <NavLink to="/tournament">Monster hunter</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Broforce</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Rocket League</NavLink>
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
              <NavLink to="/terms">Terms and Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/policy">Privacy and policy</NavLink>
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
            <p>+2348161808895</p>
            <h4>Email: </h4>
            <p>info@gamelyd.com</p>
            <p>contact@gamelyd.com</p>
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
