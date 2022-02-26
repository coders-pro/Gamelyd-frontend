import { Link } from "react-router-dom";
import { Style } from "./style";
import Image from "../../assets/images/multiplayer.jpg";
const Card = (props) => {
  return (
    <Style>
      <div className="all"></div>
      <div className="imgs">
        <img src={Image} alt="ntn" />
      </div>
    </Style>
  );
};

export default Card;
