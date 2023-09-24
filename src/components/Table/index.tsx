import React, { useState } from "react";
import { Div } from "./style";
import Tag from "../Tag";
import Button from "../Button/InnerButton";

type IProp = {
  //   message: string
  //   time : string
  //   background: string;
};

const Table = (props: IProp): any => {
  return (
    <Div>
      <table>
        <tr>
          <th>Game</th>
          <th>Game Type</th>
          <th>Entry Fee</th>
          <th>Team Size</th>
          <th>Skill Level</th>
          <th>Platform</th>
          <th>Mode</th>
          <th></th>
        </tr>
        <tr>
          <td>image</td>
          <td>BATTLE ROYALE</td>
          <td>N50K</td>
          <td>4 TEAMS</td>
          <td>EXPERT</td>
          <td>MOBILE</td>
          <td>PAID</td>
          <td>
            <div className="but">
              <Button>Join</Button>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>BATTLE ROYALE</td>
          <td>N50K</td>
          <td>4 TEAMS</td>
          <td>EXPERT</td>
          <td>MOBILE</td>
          <td>PAID</td>
          <td>
            <div className="but">
              <Button>Join</Button>
            </div>{" "}
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>BATTLE ROYALE</td>
          <td>N50K</td>
          <td>4 TEAMS</td>
          <td>EXPERT</td>
          <td>MOBILE</td>
          <td>PAID</td>
          <td>
            <div className="but">
              <Button>Join</Button>
            </div>{" "}
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>BATTLE ROYALE</td>
          <td>N50K</td>
          <td>4 TEAMS</td>
          <td>EXPERT</td>
          <td>MOBILE</td>
          <td>PAID</td>
          <td>
            <div className="but">
              <Button>Join</Button>
            </div>{" "}
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>BATTLE ROYALE</td>
          <td>N50K</td>
          <td>4 TEAMS</td>
          <td>EXPERT</td>
          <td>MOBILE</td>
          <td>PAID</td>
          <td>
            <div className="but">
              <Button>Join</Button>
            </div>{" "}
          </td>
        </tr>
      </table>
    </Div>
  );
};

export default Table;
