import { useRef, useEffect } from "react";
import Modal from "../Modal/Modal";
import ImageSlider from "../Slider/ImageSlider";
import Text from "../Text/Text";
import { HeroStyle } from "./style";
import open from "../../assets/audios/Open.mp3";
import Button from "../Button/InnerButton";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User } from "../../User";


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
      <div className="images">
        <div className="first">
          <img src={props.pic1} alt="soldier2" />
        </div>
        {/* <div className="rotate">
          <div className="slider">
            <span>
              <img src={`images/pad.png`} alt="muna" />
            </span>
          </div>
        </div> */}
        <div className="last">
          <img src={props.pic2} alt="soldier2" />
        </div>
      </div>
      <div className="text">
        <Text message={props.message} time={props.time} />
      </div>
      <div className="create-button">
        <div className="but" onClick={create}>
          <Button>New Tournament</Button>
        </div>
        <Modal title="Create Tournament" ref={modalRef}>
          <button onClick={close} className="close">
            X
          </button>
          <ImageSlider />
        </Modal>
      </div>
    </HeroStyle>
  );
};

export default Hero;
