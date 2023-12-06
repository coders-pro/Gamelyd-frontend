import Footer from "../../components/Footer/Footer";
import TournamentDisplay from "../../components/TournamentDisplay";
import next from "../../assets/icons/pageNext.svg";
import prev from "../../assets/icons/pagePrev.svg";
import { Div } from "./style";
import Button from "../../components/Button";
import Navbar from "../../components/NavBar/Navbar";
import Dropdown from "../../components/Dropdown";
import filter from "../../assets/icons/filter.svg";

// type Iprop = {
//   // type: string;
//   // value: any;
//   // onChange: any;
//   // label: string;
//   // required?: boolean;
// };

const Tournaments = () => {
  return (
    <Div>
      <Navbar message="jh" />

      <div className="content">
        <div className="head">
          <div className="filter">
            <div className="fil">
              <div className="filterBack">
                <img className="filImage" src={filter} alt="filter" />
              </div>
              <Dropdown options={["Game", "Me"]} />
            </div>
            <div className="drop">
              <Dropdown options={["Game", "Me"]} />
            </div>
          </div>
          <Button theme="dark">Create Tournament</Button>
        </div>
        <div className="body">
          <TournamentDisplay
            background={
              "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone2.jpeg?updatedAt=1695930036202"
            }
          />
          <TournamentDisplay
            background={
              "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone2.jpeg?updatedAt=1695930036202"
            }
          />
          <TournamentDisplay
            background={
              "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone2.jpeg?updatedAt=1695930036202"
            }
          />
          <TournamentDisplay
            background={
              "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone2.jpeg?updatedAt=1695930036202"
            }
          />
          <TournamentDisplay
            background={
              "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone2.jpeg?updatedAt=1695930036202"
            }
          />
          <TournamentDisplay
            background={
              "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone2.jpeg?updatedAt=1695930036202"
            }
          />
          <TournamentDisplay
            background={
              "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone2.jpeg?updatedAt=1695930036202"
            }
          />
          <TournamentDisplay
            background={
              "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone2.jpeg?updatedAt=1695930036202"
            }
          />
        </div>
        <div className="pagination">
          <img src={prev} alt="icn" />
          <div className="page">1</div>
          <img src={next} alt="icn" />
        </div>
      </div>
      <Footer />
    </Div>
  );
};
export default Tournaments;
