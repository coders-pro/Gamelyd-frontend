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

const Draw = (props: any) => {
  return (
    <>
      <Style>
        <div className="draw">
          <div className="time">
            {props.draw.date
              ? props.draw.date
              : "Date and time yet to be fixed"}{" "}
            <span> {props.draw.time ? props.draw.time : ""}</span>
          </div>
          <div className="team">
            <GroupWorkIcon sx={{ fontSize: 85 }} />
            <div className="teamName">
              {props.draw.team1.teamname ? props.draw.team1.teamname : "Nd"}
            </div>
          </div>
          <div className="mix">
            {props.draw.team2.teamname !== "Automatic Qualification" ? (
              <div
                className={`teamScore ${
                  props.draw.Team1Score > props.draw.Team2Score
                    ? "win"
                    : "loose"
                } right`}
              >
                {props.draw.Team1Score ? props.draw.Team1Score : 0}
              </div>
            ) : (
              ""
            )}

            <div className="score">
              {props.draw.team2.teamname !== "Automatic Qualification" ? (
                <div>
                  <div className="vs">VS</div>
                  {/* <div className="date">28th oct 2022</div>
                  <div className="date">9PM west african time</div> */}
                </div>
              ) : (
                ""
              )}
            </div>
            {props.draw.team2.teamname !== "Automatic Qualification" ? (
              <div
                className={`teamScore ${
                  props.draw.Team2Score > props.draw.Team1Score
                    ? "win"
                    : "loose"
                } right`}
              >
                {props.draw.Team2Score ? props.draw.Team2Score : 0}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="team">
            {props.draw.team2.teamname !== "Automatic Qualification" ? (
              <>
                {" "}
                <div className="teamName">
                  {props.draw.team2.teamname
                    ? props.draw.team2.teamname
                    : "Jane"}
                </div>
              </>
            ) : (
              <div className="teamName atom">Automatic Qualification</div>
            )}
            {props.draw.team2.teamname !== "Automatic Qualification" ? (
              <GroupWorkIcon sx={{ fontSize: 85 }} />
            ) : (
              ""
            )}
          </div>
        </div>
      </Style>
    </>
  );
};

export default Draw;
