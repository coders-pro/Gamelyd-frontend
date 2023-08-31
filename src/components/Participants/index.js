import { Link } from "react-router-dom";
import { Style } from "./style";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useParams } from "react-router-dom";
import Loader from "../ButtonLoader/ButtonLoader";

const Participants = (props) => {
  const [drawLoading, setDrawLoading] = useState(true);
  const [teams, setTeams] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };

    axios
      .get(`https://gamelyd.onrender.com/tournament/participants/${id}`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          setTeams(res.data.tournament);
          setDrawLoading(false);
          // toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
          setDrawLoading(false);
        }
      });
  }, []);
  return (
    <>
      <>{drawLoading && <Loader />}</>
      {!teams || teams.lenght === 0 ? (
        <>
          {drawLoading ? (
            <AccountCircleIcon />
          ) : (
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
          )}
        </>
      ) : (
        <>
          {teams.map((team, index) => (
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
