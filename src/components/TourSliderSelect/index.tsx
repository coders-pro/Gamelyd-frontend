import React, { useEffect, useRef, useState } from "react";
import { Div } from "./style";
import { motion } from "framer-motion";
import arrowUp from "../../assets/icons/arrowUp.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import TourSelectCard from "../TourSelectCard";
import { log } from "console";

type IProp = {
  data: any;
  onSelect: any;
  setActiveIndex: any;
  onSoftSelect: any;
};

const Select = (props: IProp): any => {
  const [values, setValues] = useState<any>(props.data.data);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    props.setActiveIndex(index);
  }, [index, props]);

  useEffect(() => {
    if (!props.data.selectedValue) {
      setIndex(0);
    } else {
      setIndex(props.data.selectedValue);
    }
  }, [props.data]);

  useEffect(() => {

    setValues(props.data.data);
  }, [props.data.data]);

  const up = () => {
    if (index >= 1) {
      setIndex(index - 1);
      props.onSoftSelect(index - 1);
    }
  };
  const down = () => {
    if (index <= values.length - 2) {
      setIndex(index + 1);
      props.onSoftSelect(index + 1);
    }
  };

  return (
    <Div>
      <img src={arrowUp} alt="arrow up" onClick={up} />
      <TourSelectCard
        name={values[index].value}
        background={values[index].image}
        onClick={() => {
          props.onSelect(index, values[index]);
        }}
      />
      <img src={arrowDown} alt="arrow down" onClick={down} />
    </Div>
  );
};

export default Select;
