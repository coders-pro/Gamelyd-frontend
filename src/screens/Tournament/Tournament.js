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
import { useApi } from "../../api";

const Tournament = () => {
  const [paid, setPaid] = useState([]);
  const [sponsored, setSponsored] = useState([]);
  const [free, setFree] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState();

  const { call:GetPaidTournamentsApi, isPending: paidLoader,  } = useApi({
    route: `tournament/mode/PAID/limit`,
    method: "GET",
    callback: (res) => {
      setPaid(res?.tournaments);
    },
  });

  const { call: GetSponsoredTournamentsApi, isPending: sponsoredLoader  } = useApi({
    route: `tournament/mode/SPONSORED/limit`,
    method: "GET",
    callback: (res) => {
      setSponsored(res?.tournaments);
    },
  });

  const { call: GetFreeTournamentsApi, isPending: freeLoader  } = useApi({
    route: `tournament/mode/FREE/limit`,
    method: "GET",
    callback: (res) => {
      setFree(res?.tournaments);
    },
  });

  useEffect(() => {
    GetPaidTournamentsApi();
    GetSponsoredTournamentsApi()
    GetFreeTournamentsApi()
  }, []);

  return (
    <div className="games">
      {paidLoader || sponsoredLoader || freeLoader && <ButtonLoader />}
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
