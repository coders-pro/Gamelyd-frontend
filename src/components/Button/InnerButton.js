import { Style } from "./style";
import { Link } from "react-router-dom";

const InnerButton = (props) => {
  return (
    <Style>
      <div className="container">
        <div className="a">
          <span className="button">{props.children}</span>
        </div>
      </div>
    </Style>
  );
};

export default InnerButton;
