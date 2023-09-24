import { FooterStyle } from "./styled";
import logo from "../../assets/images/logoWhite.png";
import { Link } from "react-router-dom";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import facebook from "../../assets/icons/facebook.svg";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="top">
        <img src={logo} alt="logo" className="logo" />
        <div className="desc">
          Gamelyd is an online platform used for organising tournamnets
        </div>
        <div className="links">
          <Link className="link" to="/">
            Tournament
          </Link>
          <Link className="link" to="/">
            Connect With Friends
          </Link>
          <Link className="link" to="/">
            Contact Us
          </Link>
          <Link className="link" to="/">
            Terms & Condition
          </Link>
          <Link className="link" to="/">
            Report Abuse
          </Link>
        </div>
      </div>
      <div className="middle"></div>
      <div className="bottom">
        <div className="com">© 2023 GAMELYD INC. . All rights reserved.</div>
        <div className="social">
          <img src={twitter} alt="social" className="socialIcn" />
          <img src={linkedin} alt="social" className="socialIcn" />
          <img src={facebook} alt="social" className="socialIcn" />
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
