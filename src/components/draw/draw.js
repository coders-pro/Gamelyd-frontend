import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Style } from "./style";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../components/ButtonLoader/ButtonLoader";

const Draw = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [team1, setTeam1] = useState(0);
  const [team2, setTeam2] = useState(0);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const addTime = async () => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };
    try {
      const data = {
        Time: time,
        Date: date,
      };

      console.log(data);

      const res = await axios.post(
        `https://gamelyd.herokuapp.com/draws/addTime/${props.draw.drawid}`,
        data,
        { headers: headers }
      );
      console.log(res);

      if (!res.data.hasError) {
        setLoading(false);
        toast.success(res.data.message);
      } else {
        setLoading(false);
        toast.error(res.data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error: please try again");
    }
  };

  const addScore = async () => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };
    try {
      const data = {
        Team1: team1,
        Team2: team2,
        Winner: team1 > team2 ? "Team1" : team2 > team1 ? "Team2" : "Draw",
      };

      console.log(data);

      const res = await axios.post(
        `https://gamelyd.herokuapp.com/draws/addScore/${props.draw.drawid}`,
        data,
        { headers: headers }
      );
      console.log(res);

      if (!res.data.hasError) {
        setLoading(false);
        toast.success(res.data.message);
      } else {
        setLoading(false);
        toast.error(res.data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error: please try again");
    }
  };

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };
    setTeam1(props.draw.Team1Score);
    setTeam2(props.draw.Team2Score);
    setTime(props.draw.time);
    setDate(props.draw.date);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Style>
        <div className="draw">
          <div
            className="editButton"
            onClick={() => setIsEditMode(!isEditMode)}
          >
            {!isEditMode ? <EditIcon /> : <EditOffIcon />}
          </div>
          <div className="time">
            {!isEditMode ? (
              <>
                {date ? date : "Date and time yet to be fixed"}{" "}
                <span> {time ? time : ""}</span>
              </>
            ) : (
              <>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="text"
                  className="timeInput"
                  placeholder="9:00 AM WAT"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                <button
                  onClick={addTime}
                  style={{ marginLeft: "10px" }}
                  className="save"
                >
                  Update
                </button>
              </>
            )}
          </div>
          <div className="team">
            <GroupWorkIcon sx={{ fontSize: 85 }} />
            <div className="teamName">
              {props.draw.team1.teamname ? props.draw.team1.teamname : "Nd"}
            </div>
          </div>
          <div className="mix">
            {props.draw.team2.teamname !== "Automatic Qualification" ? (
              !isEditMode ? (
                <div
                  className={`teamScore ${
                    team1 > team2 ? "win" : "loose"
                  } right`}
                >
                  {team1 ? team1 : 0}
                </div>
              ) : (
                <input
                  type="number"
                  placeholder="0"
                  value={team1}
                  onChange={(e) => setTeam1(parseInt(e.target.value))}
                />
              )
            ) : (
              ""
            )}

            <div className="score">
              {props.draw.team2.teamname !== "Automatic Qualification" ? (
                <div>
                  <div className="vs">VS</div>
                  {isEditMode && (
                    <button onClick={addScore} className="save">
                      Update
                    </button>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            {props.draw.team2.teamname !== "Automatic Qualification" ? (
              !isEditMode ? (
                <div
                  className={`teamScore ${
                    team2 > team1 ? "win" : "loose"
                  } right`}
                >
                  {team2 ? team2 : 0}
                </div>
              ) : (
                <input
                  type="number"
                  placeholder="0"
                  value={team2}
                  onChange={(e) => setTeam2(parseInt(e.target.value))}
                />
              )
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
