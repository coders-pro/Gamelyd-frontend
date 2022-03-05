import React from "react";
import { Style } from "./style";
import Scroll from "../../components/Scroll/Scroll.js";
import Scroll2 from "../../components/Scroll/Scroll2.js";
import Scroll3 from "../../components/Scroll/Scroll3.js";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import MoneyIcon from "@mui/icons-material/Money";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Tab = () => {
  return (
    <Style>
      <Scroll>
        <div className="free">
          <div className="right">
            <div className="about">
              <div className="title">Tournaments</div>
              <div className="sub">Modes for all tournaments</div>
              <div className="message">
                <div className="head">Free</div>
                <p>
                  Free tournaments are created without payment, and can be
                  joined without payment too. but the host can attach a token
                  for the winner so you can watch out for that in tournament
                  description
                </p>
                <div className="head">Paid</div>
                <p>
                  Paid tournaments are created without payment, but to join you
                  have to pay the specified amount, and the winner leaves with a
                  specified amount too.
                </p>
                <div className="head">Sponsored</div>
                <p>
                  Sponsored tournaments are created by making initial payment,
                  you can join without making payment and winner leaves with a
                  specified amount.
                </p>
              </div>
            </div>
          </div>
          <div className="text">
            <div className="top">
              <Scroll2>
                <div className="both">
                  <MoneyOffIcon sx={{ fontSize: 130 }} />
                  <div className="box">
                    <div className="p1"> Free </div>
                    <div className="p2"> No cash required to join </div>
                  </div>
                </div>
              </Scroll2>
              <Scroll3>
                <div className="both">
                  <MoneyIcon sx={{ fontSize: 130 }} />
                  <div className="box">
                    <div className="p1"> Paid </div>
                    <div className="p2"> Pay to join</div>
                  </div>
                </div>
              </Scroll3>
            </div>
            <div className="top">
              <Scroll2>
                <div className="both">
                  <CreditScoreIcon sx={{ fontSize: 130 }} />
                  <div className="box">
                    <div className="p1"> Sponsored </div>
                    <div className="p2"> No cash required to join </div>
                  </div>
                </div>
              </Scroll2>
              <Scroll3>
                <div className="both">
                  <EmojiEventsIcon sx={{ fontSize: 130 }} />
                  <div className="box">
                    <div className="p1"> Reward </div>
                    <div className="p2"> Win and get price</div>
                  </div>
                </div>
              </Scroll3>
            </div>
          </div>
        </div>
      </Scroll>
    </Style>
  );
};

export default Tab;
