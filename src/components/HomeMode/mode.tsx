import React from "react";
import { Style, ImageRotateStyle } from "./style";
import Scroll from "../../components/Scroll/Scroll.js";

const Mode = () => {
  return (
    <Style>
      <div className="both">
        <div
          className="ims"
          style={{
            height: "200px",
            width: "200px",
            position: "absolute",
            borderRadius: "100%",
          }}
        >
          <img
            src={`images/pad.png`}
            alt="muna"
            style={{
              height: "200px",
              width: "200px",
              position: "absolute",
              borderRadius: "100%",
              filter: " blur(4px)",
              right: "0px",
            }}
          />
        </div>

        <ImageRotateStyle>
          <div className="slider">
            <span className="abs">
              <img src={`images/pad.png`} alt="muna" />
            </span>
          </div>
        </ImageRotateStyle>
      </div>

      <Scroll>
        <div className="free">
          <div className="right">
            <div className="about">
              <div className="title">Multiplayer</div>
              <div className="message">
                <div className="head">Create Tournament</div>
                <p>
                  Multiplayer tournaments are grouped in stages with draws, each
                  team gets to qualify by beating there opposition in the
                  current stage or darw and vice versa, you can create a
                  multiplayer tournament by clicking any of the create
                  tournament buttons.
                </p>
                <div className="head">Join Tournament</div>
                <p>
                  To join a Multiplayer tournament, you can go to tournaments
                  page and filter by "MP", select a tounament and click on
                  register button, if the tournament requires more than one
                  players, you can filter and select your teammates before
                  registering.
                </p>
              </div>
            </div>
          </div>
          <Scroll>
            <div className="homecard">
              <div className="homecard-top">
                <img src="/images/ronaldo.png" alt="soldier" />
                <div className="vs" style={{ marginLeft: "-30px" }}>
                  VS
                </div>
                <img
                  src="/images/messi.png"
                  style={{ height: "200px", marginLeft: "-20px" }}
                  alt="soldier"
                />
              </div>
              <div className="homecard-bottom">
                <div className="bottom-first">
                  <div>
                    <h3>Multiplayer</h3>
                    <p>Team 1 VS Team 2</p>
                  </div>
                  <h3>#</h3>
                </div>
                <div className="bottom-second">
                  <p>Level up to next round</p>
                  <p>by winning your opponent</p>
                  <div></div>
                </div>
              </div>
            </div>
          </Scroll>
        </div>
      </Scroll>

      <div style={{ height: "70px" }} />

      <Scroll>
        <div className="free">
          <div className="right">
            <div className="about">
              <div className="title">Battle Royale</div>
              <div className="message">
                <div className="head">Create Tournament</div>
                <p>
                  Battle Royale tournaments comes in table, and is ranked by the
                  team with the highest win. the tournament host decides if he
                  will rank with first blood or kills if we have two or more
                  teams with same scores. You can create tournament by clicking
                  any of the create tournament buttons.
                </p>
                <div className="head">Join Tournament</div>
                <p>
                  To join a Battle Royale tournament, you can go to tournaments
                  page and filter by "BR", select a tounament and click on
                  register button, if the tournament requires more than one
                  players, you can filter and select your teammates before
                  registering.
                </p>
              </div>
            </div>
          </div>

          <Scroll>
            <div className="homecard">
              <div className="homecard-top">
                <img src="/images/soldier6.png" alt="soldier" />
              </div>
              <div className="homecard-bottom">
                <div className="bottom-first">
                  <div>
                    <h3>Battle Royale</h3>
                    <p>Survival of the best</p>
                  </div>
                  <h3>#</h3>
                </div>
                <div className="bottom-second">
                  <p>Level up</p>
                  <p>By winning matches</p>
                  <div></div>
                </div>
              </div>
            </div>
          </Scroll>
        </div>
      </Scroll>

      <div className="both">
        <div
          className="ims"
          style={{
            height: "200px",
            width: "200px",
            position: "absolute",
            borderRadius: "100%",
          }}
        >
          <img
            src={`images/pad.png`}
            alt="muna"
            style={{
              height: "200px",
              width: "200px",
              position: "absolute",
              borderRadius: "100%",
              filter: " blur(4px)",
              right: "0px",
            }}
          />
        </div>

        <ImageRotateStyle>
          <div className="slider">
            <span className="abs">
              <img src={`images/pad.png`} alt="muna" />
            </span>
          </div>
        </ImageRotateStyle>
      </div>
    </Style>
  );
};

export default Mode;
