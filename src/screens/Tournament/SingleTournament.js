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

const SingleTournament = () => {
  const [single, setSingle] = useState([]);
  const [draws, setDraws] = useState([]);
  const [drawLoading, setDrawLoading] = useState(true);
  const [TournamentLoading, setTournamentLoading] = useState(true);

  const modalRef = useRef();

  const create = () => {
    modalRef.current.open();
  };

  const close = () => {
    modalRef.current.close();
  };

  const { id } = useParams();

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
        setTournamentLoading(false);
        // console.log(res.data.tournament)
        setSingle(res.data.tournament);
      });

    axios
      .get(`https://gamelyd.herokuapp.com/draws/${id}`, {
        headers: headers,
      })
      .then((res) => {
        setDrawLoading(false);
        let newDraws = [];
        let tempArray = [];

        for (let i = 0; i < res.data.draws.length; i++) {
          console.log(res.data.draws.length - 1, i);
          if (i === 0) {
            tempArray.push(res.data.draws[i]);
          } else {
            if (res.data.draws[i].stage === res.data.draws[i - 1].stage) {
              tempArray.push(res.data.draws[i]);

              console.log(i, tempArray);
              console.log(res.data.draws[i - 1].stage, res.data.draws[i].stage);
              if (res.data.draws.length - 1 === i) {
                newDraws.push(tempArray);
              }
            } else {
              newDraws.push(tempArray);

              tempArray = [];
              tempArray.push(res.data.draws[i]);
              console.log(i, tempArray);
              console.log(res.data.draws[i - 1].stage, res.data.draws[i].stage);
              if (res.data.draws.length - 1 === i) {
                newDraws.push(tempArray);
              }
            }
          }
        }
        setDraws(newDraws);
      });
  }, [id]);

  return (
    <div>
      {TournamentLoading && <Loader />}
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
                          {single.Name}
                        </td>
                      </tr>
                      <tr>
                        <th style={{ padding: "10px", textAlign: "left" }}>
                          Game Name :
                        </th>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {" "}
                          {single.GameName}
                        </td>
                      </tr>
                      <tr>
                        <th style={{ padding: "10px", textAlign: "left" }}>
                          Payment Type :
                        </th>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {" "}
                          {single.Payment}
                        </td>
                      </tr>
                      <tr>
                        <th style={{ padding: "10px", textAlign: "left" }}>
                          Shuffle :
                        </th>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {" "}
                          {single.Shuffle}
                        </td>
                      </tr>
                      <tr>
                        <th style={{ padding: "10px", textAlign: "left" }}>
                          Team :
                        </th>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {" "}
                          {single.Team}
                        </td>
                      </tr>
                      <tr>
                        <th style={{ padding: "10px", textAlign: "left" }}>
                          Tournament Mode :
                        </th>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {" "}
                          {single.TournamentMode}
                        </td>
                      </tr>
                      <tr>
                        <th style={{ padding: "10px", textAlign: "left" }}>
                          Tournament Size :
                        </th>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {" "}
                          {single.TournamentSize}
                        </td>
                      </tr>
                      <tr>
                        <th style={{ padding: "10px", textAlign: "left" }}>
                          Tournament Type :
                        </th>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {" "}
                          {single.TournamentType}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Singlediv>
      </Modal>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <div onClick={create}>
          <InnerButton>View Details</InnerButton>
        </div>

        <div onClick={create}>
          <InnerButton>Teams</InnerButton>
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
