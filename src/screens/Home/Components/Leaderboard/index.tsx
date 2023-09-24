import React, { useState } from "react";
import { Div } from "./style";
import Profile from "../../../../components/LeaderboardProfile";
import girl from "../../../../assets/images/girl.png";
import Dropdown from "../../../../components/Dropdown";
import filter from "../../../../assets/icons/filter.svg";

type IProp = {
  //   message: string
  //   time : string
  //   background: string;
};

const Leaderboard = (props: IProp): any => {
  return (
    <Div>
      <div className="leadTitle">
        <div className="title">LEADERBOARD</div>
        <div className="fil">
          <div className="filterBack">
            <img className="filImage" src={filter} alt="filter" />
          </div>
          <Dropdown options={["PAID", "SPONSORED", 'FREE']} />
        </div>
      </div>
      <div className="profiles">
        <Profile
          background={girl}
          color="#D01966"
          rgb="190, 25, 95, 0.50"
          size="small"
          name="Dozy"
          num="2"
        />
        <Profile
          background={girl}
          color="#d0be19"
          rgb="190, 174, 25, 0.5"
          size="big"
          name="Mie mie"
          num="1"
        />
        <Profile
          background={girl}
          color="#1DD019"
          rgb="29, 190, 25, 0.50"
          size="small"
          name="Bobby"
          num="3"
        />
      </div>
    </Div>
  );
};

export default Leaderboard;
