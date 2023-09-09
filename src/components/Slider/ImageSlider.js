import React from "react";
import { Style, StyleCard } from "./style";
import data from "./data";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import UndoIcon from "@mui/icons-material/Undo";

import next from "../../assets/audios/Next.mp3";
import prev from "../../assets/audios/Prev.mp3";
import Open from "../../assets/audios/Open.mp3";
import back from "../../assets/audios/Select.mp3";
import { PaystackButton } from "react-paystack";
import axios from "axios";
import { toast } from "react-toastify";
import withRouter from "../Navigate/Navigate";
import Loader from "../ButtonLoader/ButtonLoader";
import { User } from "../../User";

class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: data.properties,
      position: 0,
      next: next,
      prev: prev,
      active: 0,
      name: "Game",
      switch: true,
      date: "",
      link: "",
      refno: "",
      paychannel: "",
      participants: "",
      competition: "",
      amount: "",
      regamount: "",
      mode: "",
      note: "",
      paid: false,
      loading: false,
    };
  }

  nextProperty = () => {
    let audio = new Audio(this.state.next);
    audio.play();

    if (this.state.position < data.properties.length + 1) {
      this.setState((prevState) => ({
        position: prevState.position + 1,
      }));
    }
  };

  prevProperty = () => {
    let audio = new Audio(this.state.prev);
    audio.play();
    if (this.state.position > 0) {
      this.setState((prevState) => ({
        position: prevState.position - 1,
      }));
    }
  };

  select = (next, index) => {
    let items = {};

    if (
      !localStorage.getItem("all") ||
      localStorage.getItem("all") === undefined ||
      localStorage.getItem("all") === null
    ) {
      items[this.state.properties[this.state.active].name] =
        this.state.properties[this.state.active].data[index].value;

      localStorage.setItem("all", JSON.stringify(items));
    } else {
      items = JSON.parse(localStorage.getItem("all"));

      items[this.state.properties[this.state.active].name] =
        this.state.properties[this.state.active].data[index].value;

      localStorage.setItem("all", JSON.stringify(items));
    }

    let audio = new Audio(Open);
    audio.play();

    if (this.state.properties[next].id === 8) {
      this.setState({
        switch: false,
      });
    }

    if (this.state.properties[next].id !== 8) {
      this.setState({
        active: next,
        position: 0,
        name: this.state.properties[next].name,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleCom = (e) => {
    this.setState({
      competition: e.target.value,
    });
  };

  handlePar = (e) => {
    this.setState({
      participants: e.target.value,
    });
  };

  handleLink = (e) => {
    this.setState({
      link: e.target.value,
    });
  };

  handleAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleRegAmount = (e) => {
    this.setState({
      regamount: e.target.value,
    });
  };
  handleNote = (e) => {
    this.setState({
      note: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      loading: true,
    });
    const options = JSON.parse(localStorage.getItem("all"));

    const body = {
      Name: this.state.competition.toLocaleUpperCase(),
      GameName: options.Game,
      Payment: options.Payment,
      Icon: "Munachi",
      TournamentType: options.Type,
      TournamentMode: options.Mode,
      Team: options.Team_Size,
      Shuffle: options.Shuffle,
      TournamentSize: parseInt(this.state.participants),
      Link: this.state.link,
      Date: this.state.date,
      IsPaid: false,
      Note: this.state.note,
    };

    const headers = {
      "Content-Type": "application/json",
      token: User().get()?.user?.token,
    };

    axios
      .post("https://gamelyd.onrender.com/tournament/save", body, {
        headers: headers,
      })
      .then((res) => {
        if (!res.data.hasError) {
          console.log(res.data);
          this.setState({
            loading: false,
          });
          toast.success("Tournament created successfully");
          this.props.navigate(`/tournament/view/${res.data.data.TournamentId}`);
        } else {
          toast.error("Sorry something happened");
          this.setState({
            loading: false,
          });
        }
      })
      .catch((err) => {
        toast.error("Sorry something happened");
        this.setState({
          loading: false,
        });
      });
  };

  previous = () => {
    let audio = new Audio(back);
    audio.play();

    this.setState({
      active: this.state.properties[this.state.active].data[0].prev,
      position: 0,
      name: this.state.properties[this.state.active - 1].name,
    });
  };

  render() {
    const { properties } = this.state;

    // PAYSTACK INTEGRATION

    const componentProps = {
      email: localStorage.getItem("email"),
      amount: parseInt(this.state.amount * 100),
      metadata: {
        user: localStorage.getItem("user"),
        phone: localStorage.getItem("phone"),
      },
      publicKey: "pk_test_465b4f76e2438127c64e2055370bc5f1e10b65db",
      text: "Pay Now",
      onSuccess: (res) => {
        const options = JSON.parse(localStorage.getItem("all"));

        if (res.status === "success") {
          this.setState({
            paid: true,
          });
          const body = {
            Note: this.state.note,
            Name: this.state.competition.toLocaleUpperCase(),
            GameName: options.Game,
            Payment: options.Payment,
            Icon: "Munachi",
            TournamentType: options.Type,
            TournamentMode: options.Mode,
            Team: options.Team_Size,
            Shuffle: options.Shuffle,
            TournamentSize: parseInt(this.state.participants),
            Link: this.state.link,
            Date: this.state.date,
            IsPaid: this.state.paid,
            RefNumber: res.reference,
            PaymentChannel: "paystack",
            Amount: parseInt(this.state.active),
            RegistrationAmount: parseInt(this.state.regamount),
          };

          const headers = {
            "Content-Type": "application/json",
            token: User().get()?.user?.token,
          };

          axios
            .post("https://gamelyd.onrender.com/tournament/save", body, {
              headers: headers,
            })
            .then((res) => {
              if (!res.data.hasError) {
                this.setState({
                  loading: false,
                });
                toast.success("Tournament created successfully");
                this.props.navigate(
                  `/tournament/view/${res.data.data.TournamentId}`
                );
              } else {
                toast.error("Sorry something happened");
              }
            })
            .catch((err) => {
              toast.error("Sorry something happened");
              this.setState({
                loading: false,
              });
            });
        }
      },
      onClose: () => toast.info("You just exited"),
    };

    const options = JSON.parse(localStorage.getItem("all"));

    return (
      <Style num={this.state.position}>
        {this.state.loading && <Loader />}
        <div
          style={{
            color: "white",
            position: "absolute",
            top: "-35px",
            left: "100px",
            fontSize: "20px",
          }}
        >
          {this.state.switch === false ? (
            "Input Details"
          ) : (
            <span>Select {this.state.name}</span>
          )}
        </div>

        {this.state.switch && (
          <button
            className="previous"
            onClick={this.previous}
            disabled={
              this.state.properties[this.state.active].data[0].prev === -1
            }
          >
            <UndoIcon
              className={
                this.state.properties[this.state.active].data[0].prev === -1
                  ? "undo1"
                  : "undo"
              }
            />
          </button>
        )}

        {this.state.switch === false ? (
          <form className="game-form">
            <div className="emp" />
            <div className="wrapper">
              <div className="input-data">
                <input
                  type="text"
                  required
                  onChange={this.handleCom}
                  value={this.state.competition}
                ></input>

                <label>Competition Name</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="number"
                  required
                  onChange={this.handlePar}
                  value={this.state.participants}
                ></input>

                <label>No Of Participants</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="text"
                  required
                  onChange={this.handleLink}
                  value={this.state.link}
                ></input>

                <label>Link</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="date"
                  required
                  onChange={this.handleChange}
                  value={this.state.date}
                ></input>

                {/* <label>Date</label> */}
                <div className="underline"></div>
              </div>

              {options.Payment === "PAID" || options.Payment === "SPONSORED" ? (
                <div className="input-data">
                  <input
                    type="text"
                    required
                    onChange={this.handleAmount}
                    value={this.state.amount}
                  ></input>

                  <label>Amount</label>
                  <div className="underline"></div>
                </div>
              ) : null}

              {options.Payment === "PAID" && (
                <div className="input-data">
                  <input
                    type="text"
                    required
                    onChange={this.handleRegAmount}
                    value={this.state.regamount}
                  ></input>

                  <label>Registration Amount</label>
                  <div className="underline"></div>
                </div>
              )}
              <div className="input-data">
                <textarea
                  className="texta"
                  type="text"
                  required
                  onChange={this.handleNote}
                  value={this.state.note}
                  rows="5"
                  placeholder="message, rules or instructions for participants"
                ></textarea>
              </div>
            </div>

            {(options.Payment === "PAID" &&
              options.Integration === "PAYSTACK") ||
            (options.Payment === "SPONSORED" &&
              options.Integration === "PAYSTACK") ? (
              <PaystackButton {...componentProps} />
            ) : null}

            {options.Payment === "FREE" && (
              <button onClick={this.handleSubmit} type="button">
                Create
              </button>
            )}
          </form>
        ) : (
          <>
            <button
              onClick={() => this.prevProperty()}
              disabled={this.state.position === 0}
              className="prev_button"
            >
              <SkipPreviousIcon />
            </button>

            <button
              onClick={() => this.nextProperty()}
              disabled={
                this.state.position ===
                properties[this.state.active].data.length - 1
              }
              className="next_button"
            >
              <SkipNextIcon />
            </button>

            <div className={`cards-slider active-slide-${this.state.position}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${this.state.position * 100}%)`,
                }}
              >
                {properties[this.state.active].data.map((propertyItem) => (
                  <StyleCard
                    onClick={() =>
                      this.select(propertyItem.next, propertyItem.index)
                    }
                    key={propertyItem.index}
                  >
                    <div id={`card-${propertyItem.index}`} className="card">
                      <img src={propertyItem.picture} alt="" />
                    </div>
                    <h2>{propertyItem.name}</h2>
                  </StyleCard>
                ))}
              </div>
            </div>
          </>
        )}
      </Style>
    );
  }
}

export default withRouter(ImageSlider);
