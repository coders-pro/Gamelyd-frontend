import { useRef, useEffect } from "react";
import Modal from "../Modal/Modal";
import ImageSlider from "../Slider/ImageSlider";
import Text from "../Text/Text";
import { HeroStyle } from "./style";
import open from "../../assets/audios/Open.mp3";
import Button from "../Button";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User } from "../../User";
import TournamentDisplay from "../TournamentDisplay";
import image from "../../assets/images/cod.png";

const Hero = (props) => {
  const modalRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const search = location.search;
  const userInfo = User().get();

  const create = () => {
    if (userInfo?.user) {
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

  useEffect(() => {
    const open = new URLSearchParams(search).get("open");

    if (open) {
      setTimeout(() => {
        modalRef.current.open();
      }, 1000);
    }
  });
  return (
    <HeroStyle background={props.background}>
      <div className="tons">
        <div className="card">
          <TournamentDisplay background={image} />
        </div>
        <div className="card">
          <TournamentDisplay background={image} />
        </div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
