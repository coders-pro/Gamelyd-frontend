import React, { useState } from "react";
import { Div } from "./style";
import Tag from "../Tag";
import Button from "../Button";

type IProp = {
  color: string;
  rgb: string;
  background: string;
  size: string;
  name: string;
  num: string;
};

const Profile = (props: IProp): any => {
  return (
    <Div
      background={props.background}
      color={props.color}
      rgb={props.rgb}
      size={props.size}
    >
      <div className="proBox">
        <div className="proNum">{props.num}</div>
      </div>
      <div className="proName">{props.name}</div>
    </Div>
  );
};

export default Profile;
