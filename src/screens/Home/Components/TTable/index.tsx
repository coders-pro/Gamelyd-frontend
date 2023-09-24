import React, { useRef, useState } from "react";
import { Div } from "./style";
import Dropdown from "../../../../components/Dropdown";
import filter from "../../../../assets/icons/filter.svg";
import Table from "../../../../components/Table";

type IProp = {
  //   message: string
  //   time : string
};

const Tournaments = (props: IProp): any => {
  return (
    <Div>
      <div className="top">
        <div className="tSide">
          <div className="title">TOURNAMENTS</div>
          <div className="sub">Here is a list of tournament you can join</div>
        </div>
        <div className="bSide">
          <div className="fil">
            <div className="filterBack">
              <img className="filImage" src={filter} alt="filter" />
            </div>
            <Dropdown options={["Game", "Me"]} />
          </div>
          <div className="drop">
            <Dropdown options={["Game", "Me"]} />
          </div>
          <div className="drop">
            <Dropdown options={["Game", "Me"]} />
          </div>
        </div>
      </div>
      <div className="table">
        <Table />
      </div>
    </Div>
  );
};

export default Tournaments;
