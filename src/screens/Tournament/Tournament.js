import Hero from "../../components/TournamentHeader";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import RLSlider from "./RLSlider";
import { Carddiv } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import InnerButton from "../../components/Button/InnerButton";
import ImageRotate from "../../components/ImageRotate/ImageRotate";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
import { Link } from "react-router-dom";

const Tournament = () => {
  const [paid, setPaid] = useState([]);
  const [sponsored, setSponsored] = useState([]);
  const [free, setFree] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };
    setLoader(true);
    axios
      .get("https://gamelyd.onrender.com/tournament/mode/PAID/limit", {
        headers: headers,
      })
      .then((res) => {
        setLoader(false);
        if (!res.data.hasError) {
          setPaid(res.data.tournaments);
        } else {
          setError("error");
        }
      });
    axios
      .get("https://gamelyd.onrender.com/tournament/mode/SPONSORED/limit", {
        headers: headers,
      })
      .then((res) => {
        // console.log(res.data.tournaments)
        if (!res.data.hasError) {
          setSponsored(res.data.tournaments);
        } else {
          setError("error");
        }
        setLoader(false);
      });

    axios
      .get("https://gamelyd.onrender.com/tournament/mode/FREE/limit", {
        headers: headers,
      })
      .then((res) => {
        // console.log(res.data.tournaments)
        if (!res.data.hasError) {
          setFree(res.data.tournaments);
        } else {
          setError("error");
        }
        setLoader(false);
      });
  }, []);

  return (
    <div className="games">
      {loader && <ButtonLoader />}
      <Navbar message="jh" />
      <Hero />

      <RLSlider data={paid} header="Paid Tournament" />
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link style={{ marginRight: "80px" }} to="/tournament/PAID">
          <InnerButton>View More </InnerButton>
        </Link>
      </div>

      <RLSlider data={sponsored} header="Sponsored Tournament" />
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link style={{ marginRight: "80px" }} to="/tournament/SPONSORED">
          <InnerButton>View More </InnerButton>
        </Link>
      </div>

      <RLSlider data={free} header="Free Tournament" />
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link style={{ marginRight: "80px" }} to="/tournament/FREE">
          <InnerButton>View More </InnerButton>
        </Link>
      </div>

      <Carddiv>
        <div className="imagerotate">
          <div className="title2">Sponsors</div>
          <ImageRotate />
        </div>
      </Carddiv>
      <Footer />
    </div>
  );
};

export default Tournament;
