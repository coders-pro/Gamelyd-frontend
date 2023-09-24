import { Div } from "./style";
import { Link } from "react-router-dom";

type IProp = {
    background: string;
    name: string;
  };

const InnerButton = (props: IProp) => {
  return (
    <Div background={props.background}>
        <div className="name">{props.name}</div>
    </Div>
  );
};

export default InnerButton;
