import React from "react";
import { Style } from "./style";
import Scroll from "../../components/Scroll/Scroll.js";
import Scroll2 from "../../components/Scroll/Scroll2.js";
import Scroll3 from "../../components/Scroll/Scroll3.js";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Button from "../Button/InnerButton";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <Style>
      <Scroll>
        <div className="free">
          <div className="text">
            <div className="top">
              <Scroll2>
                <div className="both">
                  <AppRegistrationIcon sx={{ fontSize: 130 }} />
                  <div className="box">
                    <div className="p1"> Register </div>
                    <div className="p2"> Join tournaments </div>
                  </div>
                </div>
              </Scroll2>
              <Scroll3>
                <div className="both">
                  <ConnectWithoutContactIcon sx={{ fontSize: 130 }} />
                  <div className="box">
                    <div className="p1"> Connect </div>
                    <div className="p2"> Link up with Friends</div>
                  </div>
                </div>
              </Scroll3>
            </div>
            <div className="top">
              <Scroll2>
                <div className="both">
                  <SportsEsportsIcon sx={{ fontSize: 130 }} />
                  <div className="box">
                    <div className="p1"> Play </div>
                    <div className="p2"> Play tornaments </div>
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

          <div className="right">
            <div className="about">
              <div className="title">GAMELYD</div>
              <div className="sub">Online Tournament Plartform</div>
              <div className="message">
                <p>
                  Gamelyd is an online plartform that helps in organizing game
                  tournaments in diffrent modes, Gamelyd simplifies and makes it
                  easy for people in diffrent locations to meet and play
                  tournaments together.
                </p>
                <p>
                  For PAID and SPONSORED tournament, Gamelyd holds the price
                  till proof of win is provided.{" "}
                </p>
                <p>
                  Only the host of a particular tournament has the power to
                  input scores for matches, all draws and rankings happens
                  automatically by the system, you can contact us if you find
                  flaws in your results.
                </p>

                <Link to="/tournament">
                  <Button>Tournaments </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Scroll>
    </Style>
  );
};

export default Message;
