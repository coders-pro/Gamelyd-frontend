import React from "react";
import { Style, ImageRotateStyle } from "./style";
import Scroll from "../../components/Scroll/Scroll.js";

const Mode = () => {
  return (
    <Style>
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
          <div className="text">
            <div className="top">
              <Scroll>
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
              </Scroll>
            </div>
          </div>
        </div>
      </Scroll>

      <Scroll>
        <div className="free">
          <div className="right">
            <div className="about">
              <div className="title">Battle Royal</div>
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
          <div className="text">
            <div className="top">
              <Scroll>
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
              </Scroll>
            </div>
          </div>
        </div>
      </Scroll>
    </Style>
  );
};

export default Mode;
