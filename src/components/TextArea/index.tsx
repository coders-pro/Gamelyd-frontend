import { Text } from "./style";

type Iprop = {
  type: string;
  value: string;
  onChange: any;
  label: string;
  required?: boolean;
  placeholder: string
  row: number
};

const TextArea = (props: Iprop) => {
  return (
    <Text>
      <div className="input-data">
        <textarea
          className="texta"
          // type="text"
          required
          onChange={props.onChange}
          value={props.value}
          rows={props.row}
          placeholder={props.placeholder}
        ></textarea>
      </div>
    </Text>
  );
};

export default TextArea;
