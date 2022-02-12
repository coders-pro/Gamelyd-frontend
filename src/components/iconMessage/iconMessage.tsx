import React from "react";
import { Style } from "./style";
import Button from "../Button/button";
import Scroll from "../../components/Scroll/Scroll.js";
import Scroll2 from "../../components/Scroll/Scroll2.js";
import Scroll3 from "../../components/Scroll/Scroll3.js";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum asperiores corporis nam eum similique doloremque
                  ducimus nostrum nobis, nisi vel veniam ea quod! Voluptate
                  cupiditate a quae, sequi veniam sapiente
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum asperiores corporis nam eum similique doloremque
                  ducimus nostrum nobis, nisi vel veniam ea quod! Voluptate
                  cupiditate a quae, sequi veniam sapiente
                </p>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </Scroll>
    </Style>
  );
};

export default Message;
