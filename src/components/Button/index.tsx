import { Style } from "./style";
import { Link } from "react-router-dom";

type Iprops = {
  children: any;
  onClick?: any;
  theme?: string;
};

const Button = (props: Iprops) => {
  return (
    <Style
      theme={props.theme}
      onClick={props.onClick}
    >
      {props.children}
    </Style>
  );
};

export default Button;
