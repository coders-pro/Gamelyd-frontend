import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Singlediv, Carddiv, Draws } from "./style";
import Navbar from "../../components/NavBar/Navbar";
import Hero from "../../components/Hero/Hero";
import ImageRotate from "../../components/ImageRotate/ImageRotate";
import Footer from "../../components/Footer/Footer";
import InnerButton from "../../components/Button/InnerButton";
import Draw from "../../components/draw/draw";
import Loader from "../../components/ButtonLoader/ButtonLoader";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import Modal from "../../components/Modal/Modal";
import Tournament from "../../components/TounamentDetail/index";
import Particpants from "../../components/Participants/index";
import { toast } from "react-toastify";

const SingleTournament = () => {
  const [single, setSingle] = useState([]);
  const [teams, setTeams] = useState([]);
  const [draws, setDraws] = useState([]);
  const [drawLoading, setDrawLoading] = useState(true);
  const [TournamentLoading, setTournamentLoading] = useState(true);

  const modalRef = useRef();
  const modalRef2 = useRef();

  const create = () => {
    modalRef.current.open();
  };

  const close = () => {
    modalRef.current.close();
  };

  const create2 = () => {
    modalRef2.current.open();
  };

  const close2 = () => {
    modalRef2.current.close();
  };

  const { id } = useParams();

  const startTournament = () => {
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };
    axios
      .get(`https://gamelyd.herokuapp.com/tournament/start/${id}`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          setTournamentLoading(false);
          console.log(res.data.tournament);
          setTeams(res.data.tournament);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      });
  };

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    };
    axios
      .get(`https://gamelyd.herokuapp.com/tournament/${id}`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          setTournamentLoading(false);
          setSingle(res.data.tournament);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      });

    axios
      .get(`https://gamelyd.herokuapp.com/tournament/participants/${id}`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          toast.message(res.data.message);
          setTournamentLoading(false);
          setTeams(res.data.tournament);
        } else {
          toast.error(res.data.message);
        }
      });

    axios
      .get(`https://gamelyd.herokuapp.com/draws/${id}`, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          setDrawLoading(false);
          let newDraws = [];
          let tempArray = [];

          for (let i = 0; i < res.data.draws.length; i++) {
            if (i === 0) {
              tempArray.push(res.data.draws[i]);
            } else {
              if (res.data.draws[i].stage === res.data.draws[i - 1].stage) {
                tempArray.push(res.data.draws[i]);
                if (res.data.draws.length - 1 === i) {
                  newDraws.push(tempArray);
                }
              } else {
                newDraws.push(tempArray);

                tempArray = [];
                tempArray.push(res.data.draws[i]);
                if (res.data.draws.length - 1 === i) {
                  newDraws.push(tempArray);
                }
              }
            }
          }
          setDraws(newDraws);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      });
  }, [id]);

  return (
    <div>
      {drawLoading && <Loader />}
      <Navbar message="jh" />
      <Hero
        pic1={"/images/soldier12.png"}
        pic2={"/images/soldier11.png"}
        background={"/images/soldier12.png"}
        message="SINGLE TOURNAMENT"
        time="TOURNAMENT INFO"
      />

      <Modal ref={modalRef}>
        <button onClick={close} className="close">
          X
        </button>
        <Tournament single={single} />
      </Modal>

      <Modal ref={modalRef2}>
        <button onClick={close2} className="close">
          X
        </button>
        <Particpants teams={teams} />
      </Modal>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <div onClick={create}>
          <InnerButton>View Details</InnerButton>
        </div>

        <div onClick={create2}>
          <InnerButton>Teams</InnerButton>
        </div>
        <div onClick={create2}>
          <InnerButton>Register</InnerButton>
        </div>
        <div onClick={create2}>
          <InnerButton>Start</InnerButton>
        </div>
        <div onClick={create2}>
          <InnerButton>Draw</InnerButton>
        </div>
      </div>

      <Draws>
        {draws.length === 0 && (
          <div className="noDraw">
            Draws has not been made for this tournament check back later
            <span>
              <DoNotDisturbIcon sx={{ fontSize: 200 }} />
            </span>
          </div>
        )}
        {draws.map((singleDraw, index) => (
          <div key={index}>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              {singleDraw.length < 2
                ? "FINALS"
                : singleDraw.length < 3
                ? "SEMI FINALS"
                : singleDraw.length < 5
                ? "QUATER FINALS"
                : singleDraw.length < 9
                ? "ROUND OF SIXTEEN"
                : `Stage  ${index + 1}`}
            </div>
            {singleDraw.map((draw, i) => (
              <div key={i}>
                <Draw draw={draw} />
              </div>
            ))}
          </div>
        ))}
      </Draws>

      <Carddiv>
        <div className="imagerotate">
          <div className="title2">Sponsors</div>
          <ImageRotate />
        </div>
      </Carddiv>
      <Footer />
    </div>
  );
};

export default SingleTournament;
