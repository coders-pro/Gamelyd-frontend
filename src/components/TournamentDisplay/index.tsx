import React, { useState } from "react";
import { Div } from "./style";
import Tag from "../Tag";
import Button from "../Button";

type IProp = {
  //   message: string
  //   time : string
  background: string;
};

const TournamentDisplay = (props: IProp): any => {
  return (
    <Div background={props.background}>
      <div className="top">
        <div className="paid">
          <div className="feeBox">
            <Tag content="PAID" background="primary" />
            <div className="fee">
              <div className="feeText">Entry Fee</div>
              <div className="feeAmount">N5k</div>
            </div>
          </div>
          <div className="prize">
            <div className="prizeText">Prize</div>
            <div className="prizeAmount">N50k</div>
          </div>
        </div>
        <div className="platform">Cross Platform</div>
      </div>
      <div className="bottom">
        <div className="infoBox">
          <div className="date">Saturday, 25th sept</div>
          <div className="info">winner takes all</div>
        </div>
        <div className="time">9pm WAT</div>
        <div className="">
          <Button>ENTER TOURNAMENT</Button>
        </div>
      </div>
    </Div>
  );
};

export default TournamentDisplay;
