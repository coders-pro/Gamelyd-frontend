import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Style } from "./style";
import Navbar from "../../components/NavBar/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "../../components/Button/InnerButton";
import Loader from "../../components/ButtonLoader/ButtonLoader";
import List from "../../components/List/list";
import { toast } from "react-toastify";
import Scroll from "../../components/Scroll/scroll6";
import Modal from "../../components/Modal/Modal";
import EditUser from "../../components/EditUser";
import ChangePassword from "../../components/ChangePassword";
import CTournys from "../../components/UserGraphs/CreatedAndJoinedTounys";
const Profile = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("mine");
  const [myToynys, setMyToynys] = useState([]);
  const [myToynysLimit, setMyToynysLimit] = useState([]);
  const [myCToynys, setMyCToynys] = useState([]);
  const [myCToynysLimit, setMyCToynysLimit] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const { id } = useParams();

  const modalRef5 = useRef();

  const create = () => {
    modalRef5.current.open();
  };

  const close = () => {
    modalRef5.current.close();
  };

  const modalRef = useRef();

  const create1 = () => {
    modalRef.current.open();
  };

  const close1 = () => {
    modalRef.current.close();
  };

  const getUserTourny = (user_name) => {
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };
    try {
      axios
        .get(
          `https://gamelyd.herokuapp.com/tournament/userRegisteredTournaments/${id}`,
          { headers: headers }
        )
        .then((res) => {
          setLoading(false);
          if (!res.data.hasError) {
            if (!res.data.tournaments) {
              setMyToynys([]);
            } else {
              setMyToynys(res.data.tournaments);
            }
          } else {
            toast.error(res.data.message);
          }
        });

      axios
        .get(`https://gamelyd.herokuapp.com/users/tournaments/${id}`, {
          headers: headers,
        })
        .then((res) => {
          setLoading(false);
          if (!res.data.hasError) {
            if (!res.data.tournaments) {
              setMyCToynys([]);
            } else {
              setMyCToynys(res.data.tournaments);
            }
          } else {
            toast.error(res.data.message);
          }
        });

      axios
        .get(
          `https://gamelyd.herokuapp.com/tournament/userRegisteredTournaments/${id}/limit`,
          { headers: headers }
        )
        .then((res) => {
          setLoading(false);
          if (!res.data.hasError) {
            if (!res.data.tournaments) {
              setMyToynysLimit([]);
            } else {
              setMyToynysLimit(res.data.tournaments);
            }
          } else {
            toast.error(res.data.message);
          }
        });

      axios
        .get(`https://gamelyd.herokuapp.com/users/tournaments/${id}/limit`, {
          headers: headers,
        })
        .then((res) => {
          setLoading(false);
          if (!res.data.hasError) {
            if (!res.data.tournaments) {
              setMyCToynysLimit([]);
            } else {
              setMyCToynysLimit(res.data.tournaments);
            }
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (err) {
      toast.error("Error please try again");
    }
  };

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };

    try {
      axios
        .get(`https://gamelyd.herokuapp.com/users/${id}`, { headers: headers })
        .then((res) => {
          setLoading(false);
          if (!res.data.hasError) {
            // toast.success(res.data.message);
            setUser(res.data.user);
            getUserTourny(res.data.user.user_name);
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (err) {
      toast.error("Error please try again");
      setLoading(false);
    }
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      <Navbar message="jh" />
      <Style>
        <div className="top">
          <div className="pic">
            <AccountCircleIcon
              style={{ color: "white" }}
              sx={{ fontSize: 200 }}
            />
          </div>
          <div className="text">
            <div className="name">
              <div className="main">
                <div className="aha">{user.first_name}</div>
                <div className="user">@{user.user_name}</div>
                <div className="user">
                  {" "}
                  <LocationOnIcon sx={{ fontSize: 15 }} /> {user.Country}
                </div>
              </div>
              <div className="socials">
                <a href={user.Twitter} target="_blank" rel="noreferrer">
                  <TwitterIcon className="soc" />
                </a>
                <a href={user.Facebook} target="_blank" rel="noreferrer">
                  <FacebookIcon className="soc" />
                </a>
                <a href={user.Linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon className="soc" />
                </a>
                <a href={user.Instagram} target="_blank" rel="noreferrer">
                  <InstagramIcon className="soc" />
                </a>
              </div>
            </div>
            <div className="buttons">
              <div onClick={create1}>
                <Button>Reset Password</Button>
              </div>
              <div onClick={create}>
                <Button>Edit</Button>
              </div>
              {/* <Button>Button 1</Button> */}
            </div>
          </div>

          <Modal title="Edit Details" ref={modalRef5}>
            <button onClick={close} className="close">
              X
            </button>
            <EditUser user={user} />
          </Modal>

          <Modal title="Change Password" ref={modalRef}>
            <button onClick={close1} className="close">
              X
            </button>
            <ChangePassword user={user} />
          </Modal>
        </div>

        <div className="bottom">
          <div className="bio">
            <div className="head">Details</div>
            <div className="bod">
              <table>
                <tbody>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      First Name:
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {user.first_name}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Last Name:
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {user.last_name}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Username:
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      @{user.user_name}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Email:
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {user.email}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Number:
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {user.phone}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CTournys
              data={{
                joined: myToynys ? myToynys.length : 0,
                created: myCToynys ? myCToynys.length : 0,
              }}
            />
          </div>

          <div className="det">
            <div className="head">
              <button
                onClick={() => setActive("mine")}
                className={`bts ${active === "mine" ? "act" : "inAct"}`}
              >
                Joined tounaments
              </button>{" "}
              <button
                onClick={() => setActive("join")}
                className={`bts ${active === "join" ? "act" : "inAct"}`}
              >
                Created tounaments
              </button>
            </div>
            <div className="bod">
              {active === "mine" && (
                <Scroll>
                  <List mode="mine" tourny={myToynysLimit} />{" "}
                </Scroll>
              )}
              {active === "join" && (
                <Scroll>
                  {" "}
                  <List mode="join" tourny={myCToynysLimit} />{" "}
                </Scroll>
              )}
            </div>
          </div>
        </div>
      </Style>
    </>
  );
};

export default Profile;
