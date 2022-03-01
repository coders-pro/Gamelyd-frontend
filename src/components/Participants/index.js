import { Link } from "react-router-dom";
import { Style } from "./style";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
// import Navbar from "../../components/NavBar/Navbar";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import Button from "../../components/Button/InnerButton";

const Participants = (props) => {
  console.log(props);
  return (
    <>
      {!props.teams ? (
        <>
          <Style>
            <div className="draw">
              <div className="team">
                <GroupWorkIcon sx={{ fontSize: 85 }} />
                <div className="teamName"> No Registrations Yet</div>
              </div>
              <div className="bot">
                <div className="player"></div>
              </div>
            </div>
          </Style>
        </>
      ) : (
        <>
          {props.teams.map((team, index) => (
            <Style key={index}>
              <div className="draw">
                <div className="team">
                  <div className="teamName"> Team {team.teamname}</div>
                </div>
                <div className="bot">
                  <div className="player">
                    {team.players.map((person, i) => (
                      <div key={i} className="playerName">
                        <span>{i + 1}.</span> {person.username}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Style>
          ))}
        </>
      )}
    </>
  );
};

export default Participants;
