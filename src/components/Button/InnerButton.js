import { Style } from "./style";
import { Link } from "react-router-dom";

const InnerButton = (props) => {
  return (
    <Style>
      {props.children}
    </Style>
  );
};

export default InnerButton;
