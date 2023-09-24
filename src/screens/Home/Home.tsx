import React, { useRef } from "react";
import { HomeStyle } from "./style.js";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import Tournament from "./Components/Tournament";
import TTable from "./Components/TTable";
import Leaderboard from "./Components/Leaderboard";

const Home = () => {
  return (
    <>
      <HomeStyle>
        <Navbar message="jh" />
        <Hero />
        <div className="striped-background">
          <div className="fade">
            <div className="fade">
              <div className="fade">
                <div className="gTitle">ALL GAMES</div>
                <div className="gSub">Select a game to start a tournament</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tournament />
        </div>
        <div>
          <TTable />
        </div>
        <div>
          <Leaderboard />
        </div>

        {/* <IconMesage />
        <p style={{ display: "none" }}>{shouldShowAction}</p>
        <div style={{ height: "20px" }}></div>
        <Mode />
        <div style={{ height: "20px" }}></div>
        <Tab />

        <div className="imagerotate">
          <div className="title">Sponsors</div>
          <ImageRotate />
        </div> */}
      </HomeStyle>
      <Footer />
    </>
  );
};

export default Home;
