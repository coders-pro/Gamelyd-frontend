import { Link } from "react-router-dom";
import { Singlediv } from "./style";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
// import Navbar from "../../components/NavBar/Navbar";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import Button from "../../components/Button/InnerButton";

const Tournament = (props: any) => {
  return (
    <Singlediv>
      <div className="info-div">
        <div className="sub-info-div">
          <div className="bio">
            <div className="head">Details</div>
            <div className="bod">
              <table>
                <tbody>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Tournament :
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {props.single.Name}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Game Name :
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {" "}
                      {props.single.GameName}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Payment Type :
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {" "}
                      {props.single.Payment}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Shuffle :
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {" "}
                      {props.single.Shuffle}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Team :
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {" "}
                      {props.single.Team}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Tournament Mode :
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {" "}
                      {props.single.TournamentMode}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Tournament Size :
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {" "}
                      {props.single.TournamentSize}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Tournament Type :
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {" "}
                      {props.single.TournamentType}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Singlediv>
  );
};

export default Tournament;
