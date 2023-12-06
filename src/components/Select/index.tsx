import { InputStyle } from "./style";

type Iprop = {
  data: { name: string; value: string }[];
  value: string;
  onChange: any;
  label: string;
  required?: boolean;
};

const Select = (props: Iprop) => {
  return (
    <InputStyle>
      <div className="wrapper">
        <div className="input-data">
          <select required onChange={props.onChange} value={props.value}>
            {props.data.map((item: any, index: number) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <label>{props.label}</label>
          <div className="underline"></div>
        </div>
      </div>
    </InputStyle>
  );
};

export default Select;
