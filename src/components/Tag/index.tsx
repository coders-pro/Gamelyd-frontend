import { Div } from "./style";

type IProp = {
  content: string;
  background?: string;
};
const tagColors: { [key: string]: string } = {
  primary: "#D72F76",
  secondary: "#137C56",
};

const Tag = (props: IProp): any => {    
  return (
    <Div
      background={props.background ? tagColors[props.background] : "#137C56"}
    >
      {props.content}
    </Div>
  );
};

export default Tag;
