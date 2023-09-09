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
import { useParams } from "react-router-dom";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import { User } from "../../User";

const Draw = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [team1, setTeam1] = useState(0);
  const [team2, setTeam2] = useState(0);
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const addTime = async () => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      token: User().get()?.user?.token,
    };
    try {
      const data = {
        Time: time,
        Date: date,
      };

      const res = await axios.post(
        `https://gamelyd-test.onrender.com/draws/addTime/${props.draw.drawid}`,
        data,
        { headers: headers }
      );

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

  const addLink = async () => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      token: User().get()?.user?.token,
    };
    try {
      const data = {
        Link: link,
      };

      const res = await axios.post(
        `https://gamelyd-test.onrender.com/draws/addLink/${props.draw.drawid}`,
        data,
        { headers: headers }
      );

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
      token: User().get()?.user?.token,
    };
    try {
      const data = {
        Team1: team1,
        Team2: team2,
        Winner: team1 > team2 ? "Team1" : team2 > team1 ? "Team2" : "Draw",
      };

      const res = await axios.post(
        `https://gamelyd-test.onrender.com/draws/addScore/${props.draw.drawid}`,
        data,
        { headers: headers }
      );

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
    setTeam1(props.draw.Team1Score);
    setTeam2(props.draw.Team2Score);
    setTime(props.draw.time);
    setDate(props.draw.date);
    setLink(props.draw.Link);
    console.log(props.draw);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Style>
        <div className="draw">
          <div className="team">
            {props.id === localStorage.getItem("id") && (
              <div
                className="editButton"
                onClick={() => setIsEditMode(!isEditMode)}
              >
                {!isEditMode ? <EditIcon /> : <EditOffIcon />}
              </div>
            )}
            <div className="time">
              {!isEditMode ? (
                <>
                  {date ? date : "Date and time yet to be fixed"}{" "}
                  <span> {time ? time : ""}</span>
                </>
              ) : (
                <>
                  <input
                    className="dateInput"
                    style={{ width: "150px" }}
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
                  <button onClick={addTime} className="save">
                    Update Time
                  </button>
                </>
              )}
            </div>
            <div className="link">
              {!isEditMode ? (
                link && (
                  <>
                    <button style={{ marginLeft: "20px" }} className="save">
                      <a
                        style={{ color: "#15202b", textDecoration: "none" }}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Join Match
                      </a>
                    </button>
                  </>
                )
              ) : (
                <>
                  <input
                    className="dateInput"
                    style={{ width: "150px" }}
                    type="text"
                    value={link}
                    placeholder="Match Link"
                    onChange={(e) => setLink(e.target.value)}
                  />
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={addLink}
                    className="save"
                  >
                    Update Link
                  </button>
                </>
              )}
            </div>
            <div className="teamName">
              {props.draw.team1.teamname ? props.draw.team1.teamname : "Nd"}
            </div>
            <div>
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
              </div>
            </div>
          </div>
          <div className="mix">
            <div className="score">
              {props.draw.team2.teamname !== "Automatic Qualification" ? (
                <div>
                  <div className="vs">VS</div>
                  {isEditMode && (
                    <button onClick={addScore} className="save">
                      Update Score
                    </button>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="team">
            <div>
              {props.draw.team2.teamname !== "Automatic Qualification" ? (
                <div className="mix">
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
              ) : (
                ""
              )}
            </div>
            <div>
              {" "}
              {props.draw.team2.teamname !== "Automatic Qualification" ? (
                // <>
                <div className="teamName">
                  {props.draw.team2.teamname
                    ? props.draw.team2.teamname
                    : "Not Available"}
                </div>
              ) : (
                // </>
                <div className="teamName atom" style={{ fontSize: "17px" }}>
                  Automatic Qualification
                </div>
              )}
            </div>
          </div>
        </div>
      </Style>
    </>
  );
};

export default Draw;
