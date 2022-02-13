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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum asperiores corporis nam eum similique doloremque
                  ducimus nostrum nobis, nisi vel veniam ea quod! Voluptate
                </p>
                <div className="head">Join Tournament</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum asperiores corporis nam eum similique doloremque
                  ducimus nostrum nobis, nisi vel veniam ea quod! Voluptate
                </p>
              </div>
            </div>
          </div>
          <Scroll>
            <div className="homecard">
              <div className="homecard-top">
                <img src="/images/ronaldo.png" alt="soldier" />
                <div className="vs">VS</div>
                <img
                  src="/images/messi.png"
                  style={{ height: "200px" }}
                  alt="soldier"
                />
              </div>
              <div className="homecard-bottom">
                <div className="bottom-first">
                  <div>
                    <h3>Muna</h3>
                    <p>muna</p>
                  </div>
                  <h3>#</h3>
                </div>
                <div className="bottom-second">
                  <p>Level 1: minister</p>
                  <p>lorem ipsum goalie minister</p>
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum asperiores corporis nam eum similique doloremque
                  ducimus nostrum nobis, nisi vel veniam ea quod! Voluptate
                </p>
                <div className="head">Join Tournament</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum asperiores corporis nam eum similique doloremque
                  ducimus nostrum nobis, nisi vel veniam ea quod! Voluptate
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
                    <h3>Muna</h3>
                    <p>muna</p>
                  </div>
                  <h3>#</h3>
                </div>
                <div className="bottom-second">
                  <p>Level 1: minister</p>
                  <p>lorem ipsum goalie minister</p>
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
