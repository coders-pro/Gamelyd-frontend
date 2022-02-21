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
          console.log(res.data);
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
    console.log(e);
    setUsers(
      Filteredusers.filter(
        (t) => t.user_name.toLowerCase().indexOf(e.toLowerCase()) !== -1
      )
    );
  };

  const join = async () => {
    setLoad(true);
    if (!team) {
      toast.error("You must choose a team name");
      return;
    }
    console.log(props.id, localStorage.getItem("id"));
    let players = JSON.parse(localStorage.getItem("players"));
    players.push({
      UserName: localStorage.getItem("user"),
      GameUserName: localStorage.getItem("user"),
      User_id: localStorage.getItem("id"),
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

    console.log(data);

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
        <section className="sect">
          <div className="box">
            <input
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              placeholder="Team Name"
              type="text"
            />
            <button className="join" onClick={join}>
              Join
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
                      <div key={player.User_id}>@{player.UserName}</div>
                    )
                  )}
                </>
              )}
            </div>
            {!loading ? (
              users.length !== 0 ? (
                <>
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