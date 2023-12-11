import { Div } from "./style";
import { useState } from "react";

// type Iprop = {
//   // type: string;
//   // value: any;
//   // onChange: any;
//   // label: string;
//   // required?: boolean;
// };

const Fixture = () => {
  return (
    <Div
      player1={
        "https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/girl.png?updatedAt=1701589631511"
      }
      player2={
        "https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/girl.png?updatedAt=1701589631511"
      }
    >
      <div className="con">
        <div className="both">
          <div className="player1" />
          <div className="playerScore1">
            <div className="name">Muna</div>
            <div className="score">2</div>
          </div>
        </div>

        <div className="vs"></div>

        <div className="both2">
          <div className="playerScore2">
            <div className="score">4</div>
            <div className="name">Bobby</div>
          </div>
          <div className="player2" />
        </div>
      </div>
      <div className="date">
        <div className="time">TUE. 12/10 </div>
        <div className="sep">|</div>
        <div className="day">11:45 AM WAT</div>
      </div>
    </Div>
  );
};
export default Fixture;
