import React, { useEffect, useRef, useState } from "react";
import { Div } from "./style";
import { motion } from "framer-motion";
import arrowDown from "../../assets/icons/arrow_down.svg";

type IProp = {
  name: string;
  background: string;
  onClick: any;
};

const Card = (props: IProp): any => {
  return (
    <Div background={props.background} onClick={props.onClick}>
      <div className="name">{props.name}</div>
    </Div>
  );
};

export default Card;
