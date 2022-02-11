import { HomeStyle } from "./style.js";
import ImageRotate from "../../components/ImageRotate/ImageRotate";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import IconMesage from "../../components/iconMessage/iconMessage";
import Tab from "../../components/HomeTab/homeTab";
import Mode from "../../components/HomeMode/mode";

const Home = () => {
  return (
    <>
      <Navbar message="jh" />
      <HomeStyle>
        <Hero
          pic1={"/images/soldier7.png"}
          pic2={"/images/soldier14.png"}
          background={"/images/soldier7.png"}
          message="WELCOME ABOARD SOLDIER"
          time="TIME TO CONNECT"
        />
        <IconMesage />
        <div style={{ height: "20px" }}></div>
        <Mode />
        <div style={{ height: "20px" }}></div>
        <Tab />

        <div className="imagerotate">
          <ImageRotate />
        </div>
      </HomeStyle>
      <Footer />
    </>
  );
};

export default Home;
