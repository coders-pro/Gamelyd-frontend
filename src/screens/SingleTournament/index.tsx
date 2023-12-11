import Footer from "../../components/Footer/Footer";
import TournamentDisplay from "../../components/TournamentDisplay";
import next from "../../assets/icons/pageNext.svg";
import prev from "../../assets/icons/pagePrev.svg";
import { Div } from "./style";
import Button from "../../components/Button";
import Navbar from "../../components/NavBar/Navbar";
import Dropdown from "../../components/Dropdown";
import filter from "../../assets/icons/filter.svg";
import Details from "./Details";
import { useState } from "react";
import Fixtures from "./Fixtures";
import Teams from "./Teams";
import Register from "./Register";

// type Iprop = {
//   // type: string;
//   // value: any;
//   // onChange: any;
//   // label: string;
//   // required?: boolean;
// };

const TournamentView = () => {
  const [active, setActive] = useState<string>("details");
  return (
    <Div>
      <Navbar message="jh" />
      <div className="page">
        <div className="header"></div>
        <div className="buttons">
          <div className="but">
            <Button
              theme={active === "details" ? "active" : "green"}
              onClick={() => setActive("details")}
            >
              Tournament Details
            </Button>
          </div>

          <div className="but">
            <Button
              theme={active === "fixtures" ? "active" : "green"}
              onClick={() => setActive("fixtures")}
            >
              Fixtures
            </Button>
          </div>
          <div className="but">
            <Button
              theme={active === "teams" ? "active" : "green"}
              onClick={() => setActive("teams")}
            >
              All Teams
            </Button>
          </div>
          <div className="but">
            <Button
              theme={active === "register" ? "active" : "green"}
              onClick={() => setActive("register")}
            >
              Register
            </Button>
          </div>
          <div className="but">
            <Button theme="danger">Unregister</Button>
          </div>
        </div>
        <div className="body">
          {active === "details" && <Details />}
          {active === "fixtures" && <Fixtures />}
          {active === "teams" && <Teams />}
          {active === "register" && <Register />}
        </div>
      </div>

      <Footer />
    </Div>
  );
};
export default TournamentView;
