import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Loader from "../ButtonLoader/ButtonLoader";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Div } from "./Style";

const DisplayModal = (props) => {
  const [users, setUsers] = useState([]);
  const [Filteredusers, setFilteredUsers] = useState([]);
  const [team, setTeam] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [set, setSet] = useState(true);
  const [load, setLoad] = useState(false);
  // const players = [];

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify([]));
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };
    axios
      .get(`https://gamelyd.herokuapp.com/users`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          setUsers(res.data.users);
          setFilteredUsers(res.data.users);
          setLoading(false);
          toast.success(res.data.message);
        } else {
          setUsers([]);
          setFilteredUsers([]);
          toast.error(res.data.message);
          setLoading(false);
        }
      });
  }, []);

  const addUser = (user) => {
    let players = JSON.parse(localStorage.getItem("players"));
    if (players.length > 0) {
      for (let i = 0; i < players.length; i++) {
        if (
          user.user_name === players[i].UserName ||
          user.user_name === localStorage.getItem("user")
        ) {
          toast.error("Player already added");
          return;
        }
      }
    }

    let tempUser = {
      UserName: user.user_name,
      GameUserName: user.user_name,
      User_id: user.user_id,
      Email: user.email,
    };
    if (
      !localStorage.getItem("players") ||
      localStorage.getItem("players") === null ||
      localStorage.getItem("players") === undefined
    ) {
      localStorage.setItem("players", JSON.stringify([tempUser]));
    } else {
      players = JSON.parse(localStorage.getItem("players"));
      players.push(tempUser);
      localStorage.setItem("players", JSON.stringify(players));
    }
    setSet(!set);
    toast.success(`@${user.user_name} added as teammate`);
  };

  const filter = (e) => {
    setUsers(
      Filteredusers.filter(
        (t) => t.user_name.toLowerCase().indexOf(e.toLowerCase()) !== -1
      )
    );
  };

  const remove = (name) => {
    let players = JSON.parse(localStorage.getItem("players"));
    let newPlayers = [];
    for (let i = 0; i < players.length; i++) {
      if (players[i].UserName !== name) {
        newPlayers.push(players[i]);
      }
    }
    localStorage.setItem("players", JSON.stringify(newPlayers));
    setSet(!set);
  };

  const join = async () => {
    setLoad(true);
    if (!team) {
      toast.error("You must choose a team name");
      setLoad(false);
      return;
    }
    let players = JSON.parse(localStorage.getItem("players"));
    players.push({
      UserName: localStorage.getItem("user"),
      GameUserName: localStorage.getItem("user"),
      User_id: localStorage.getItem("id"),
      Email: localStorage.getItem("email"),
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    };

    const data = {
      TeamName: team,
      Players: players,
    };

    const res = await axios.post(
      `https://gamelyd.herokuapp.com/tournament/register/${props.id}`,
      data,
      config
    );
    if (!res.data.hasError) {
      setLoad(false);
      toast.success(res.data.message);
    } else {
      setLoad(false);
      toast.error(res.data.message);
    }
  };

  return (
    <div>
      {load && <Loader />}
      <Div>
        <div onClick={props.close} className="backdrop"></div>
        <section className="sect">
          <div onClick={props.close} className="close">
            X
          </div>
          <div className="box">
            <input
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              placeholder="Team Name"
              type="text"
              style={{ width: "70%", height: "27px" }}
            />
            <button className="join" onClick={join}>
              Register
            </button>

            <h3>Choose Teammates</h3>
            <div className="sele">
              <div>@{localStorage.getItem("user")}</div>
              {!JSON.parse(localStorage.getItem("players")) ? (
                <>No Teammates selected</>
              ) : (
                <>
                  {JSON.parse(localStorage.getItem("players")).map(
                    (player, i) => (
                      <div key={i} style={{ position: "relative" }}>
                        <div
                          style={{
                            position: "absolute",
                            top: "-10px",
                            right: "0",
                            color: "#0bc0b4",
                            cursor: "pointer",
                          }}
                          onClick={() => remove(player.UserName)}
                        >
                          X
                        </div>
                        <div
                          style={{ display: "relative" }}
                          key={player.User_id}
                        >
                          @{player.UserName}
                        </div>
                      </div>
                    )
                  )}
                </>
              )}
            </div>
            <div>
              <input
                value={search}
                onChange={(e) => [
                  setSearch(e.target.value),
                  filter(e.target.value),
                ]}
                style={{ margin: "20px 0", width: "100%", height: "20px" }}
                placeholder="Search username"
                type="text"
              />
            </div>
            {!loading ? (
              users.length !== 0 ? (
                <>
                  {users.length === 0 ? (
                    <div>No User Found</div>
                  ) : (
                    <>
                      {users.map((user, i) => (
                        <div
                          key={i}
                          className="list"
                          onClick={() => addUser(user)}
                        >
                          <div className="imgbx">
                            <AccountCircleIcon
                              className="imd"
                              style={{ fontSize: "50px" }}
                            />
                          </div>
                          <div className="content">
                            <h2 className="rank">
                              <small>#</small>
                              {i + 1}
                            </h2>
                            <h4>
                              {user.first_name} {user.last_name}
                            </h4>
                            <p>@{user.user_name}</p>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </>
              ) : (
                <div>No user found try again</div>
              )
            ) : (
              <div className="bx">
                <CircularProgress />
              </div>
            )}
          </div>
        </section>
      </Div>
    </div>
  );
};

export default DisplayModal;
