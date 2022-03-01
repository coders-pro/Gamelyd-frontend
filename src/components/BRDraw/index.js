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
import "./style.css";

const BrDraw = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [draws, setDraws] = useState([]);
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const { id } = useParams();

  const update = async () => {
    let data = draws;
    setLoading(true);
    data.brteams = data.brteams.sort(function (a, b) {
      return b.wins - a.wins;
    });
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };
    try {
      const data = {
        Players: draws.brteams,
        Date: date,
        Link: link,
        Time: time,
      };
      console.log(data);

      const res = await axios.post(
        `https://gamelyd.herokuapp.com/draws/updateBrDraw/621c8e1d888d3f373ee7c297`,
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
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };
    console.log(props?.draws);

    setDraws(props?.draws);
    setLink(props?.draws?.link);
    setDate(props?.draws?.date);
    setTime(props?.draws?.time);
    setRefresh(!refresh);
  }, []);

  const setWins = (i, v) => {
    let data = draws;
    data.brteams[i].wins = +v;

    setDraws(data);
    setRefresh(!refresh);
  };
  const setBlood = (i, v) => {
    let data = draws;
    data.brteams[i].firstbloods = +v;
    setDraws(data);
    setRefresh(!refresh);
  };

  const setKills = (i, v) => {
    let data = draws;
    data.brteams[i].kills = +v;
    setDraws(data);
    setRefresh(!refresh);
  };

  return (
    <>
      {loading && <Loader />}
      <Style>
        <div
          style={{ textAlign: "center", fontSize: "30px", margin: "30px 0" }}
        >
          <>
            <span>BR TABLE</span>
          </>
        </div>
        <div style={{ textAlign: "center", fontSize: "16px" }}>
          <>
            {date}
            <span style={{ padding: "0 20px", color: "#00CCFF" }}>{time}</span>
          </>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {id === localStorage.getItem("id") && (
              <div
                className="editButton"
                style={{ width: "30px" }}
                onClick={() => setIsEditMode(!isEditMode)}
              >
                {!isEditMode ? <EditIcon /> : <EditOffIcon />}
              </div>
            )}
            {isEditMode && (
              <div
                className="editButton"
                style={{
                  width: "60px",
                  marginLeft: "20px",
                  paddingTop: "10px",
                }}
                onClick={update}
              >
                Update
              </div>
            )}
          </div>
          <div>
            {isEditMode && (
              <>
                <input
                  type="date"
                  placeholder="date for next match"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: "150px", margin: "0 5px" }}
                />
                <input
                  type="text"
                  placeholder="time for next match"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={{ width: "150px", margin: "0 5px" }}
                />
                <input
                  type="text"
                  placeholder="link for next match"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  style={{ width: "150px", margin: "0 5px" }}
                />
              </>
            )}

            {!isEditMode && link && (
              <a
                style={{ textDecoration: "none" }}
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="editButton"
                  style={{
                    width: "90px",
                    marginLeft: "20px",
                    paddingTop: "10px",
                  }}
                >
                  Join Match
                </div>
              </a>
            )}
          </div>
        </div>

        <section className="wrapper">
          <main className="row title">
            <ul>
              <li>Team Name</li>
              <li>Position</li>

              <li>Win</li>
              <li>Kills</li>
              <li>First Blood </li>
            </ul>
          </main>

          {draws?.brteams?.map((team, index) => (
            <section key={index} className="row-fadeIn-wrapper">
              <article className="row fadeIn nfl">
                <ul>
                  <li>{team.teamname}</li>
                  <li>{index + 1}</li>
                  {isEditMode ? (
                    <li>
                      <input
                        type="number"
                        placeholder="0"
                        value={props?.draws?.brteams[index].wins}
                        onChange={(e) => setWins(index, e.target.value)}
                        id={index}
                      />
                    </li>
                  ) : (
                    <li>{team.wins}</li>
                  )}
                  {isEditMode ? (
                    <li>
                      <input
                        type="number"
                        placeholder="0"
                        value={props?.draws?.brteams[index].kills}
                        onChange={(e) => setKills(index, e.target.value)}
                      />{" "}
                    </li>
                  ) : (
                    <li>{team.kills}</li>
                  )}
                  {isEditMode ? (
                    <li>
                      <input
                        type="number"
                        placeholder="0"
                        value={props?.draws?.brteams[index].firstbloods}
                        onChange={(e) => setBlood(index, e.target.value)}
                      />{" "}
                    </li>
                  ) : (
                    <li>{team.firstbloods}</li>
                  )}
                </ul>
                <ul className="more-content">
                  {team?.players?.map((player, index) => (
                    <li key={index}>@{player.username}</li>
                  ))}
                </ul>
              </article>
            </section>
          ))}
        </section>
      </Style>
    </>
  );
};

export default BrDraw;
