import { Link } from "react-router-dom";
import { Style } from "./style";
import Image from "../../assets/images/icon.png";
const Card = (props) => {
  return (
    <Style>
      <div className="all"></div>
      <div className="imgs">
        <img style={{ width: "150px" }} src={Image} alt="logo" />
      </div>
    </Style>
  );
};

export default Card;
