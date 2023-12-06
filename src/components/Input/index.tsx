import { InputStyle } from "./style";

type Iprop = {
  type: string;
  value: any;
  onChange: any;
  label: string;
  required?: boolean;
};

const Input = (props: Iprop) => {
  return (
    <InputStyle>
      <div className="wrapper">
        {props.type === "text" || props.type === "number" ? (
          <div className="input-data">
            <input
              type={props.type}
              required
              onChange={props.onChange}
              value={props.value as any}
            />
            <label>{props.label}</label>
            <div className="underline"></div>
          </div>
        ) : props.type === "date" ? (
          <div className="input-data">
            <input
              type={props.type}
              required
              onChange={props.onChange}
              value={props.value}
            />
            <label>{props.label}</label>
            <div className="underline"></div>
          </div>
        ) : null}
      </div>
    </InputStyle>
  );
};

export default Input;
