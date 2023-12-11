import { Div } from "./style";
import Button from "../../../components/Button";
import { useState } from "react";
import Fixture from "../Components/Fixture";

// type Iprop = {
//   // type: string;
//   // value: any;
//   // onChange: any;
//   // label: string;
//   // required?: boolean;
// };

const Fixtures = () => {
  return (
    <Div>
      <div className="pages">
        <div className="games">
          <div className="top">STAGE 1</div>
          <div className="game">
            <Fixture />
          </div>
          <div className="game">
            <Fixture />
          </div>
          <div className="game">
            <Fixture />
          </div>
          <div className="game">
            <Fixture />
          </div>
          <div className="game">
            <Fixture />
          </div>
          <div className="game">
            <Fixture />
          </div>
        </div>
        <div className="games">
          <div className="top">STAGE 2</div>
          <div className="game">
            <Fixture />
          </div>
          <div className="game">
            <Fixture />
          </div>
          <div className="game">
            <Fixture />
          </div>
          <div className="game">
            <Fixture />
          </div>
          <div className="game">
            <Fixture />
          </div>
          <div className="game">
            <Fixture />
          </div>
        </div>
      </div>
    </Div>
  );
};
export default Fixtures;
