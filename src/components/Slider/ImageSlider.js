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
      participants: "",
      competition: "",
      game: "",
      mode: "",
      shuffle: "",
      type: "",
      size: "",
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

  render() {
    const { properties } = this.state;

    if (this.state.properties[next].id !== 5) {
      this.setState({
        active: next,
        position: 0,
        name: this.state.properties[next].name,
      });
    }
  }

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

  handleSubmit = () => {
    console.log(this.state.competition);
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
    return (
      <Style num={this.state.position}>
        <h1>
          {this.state.switch === false ? (
            "Input Details"
          ) : (
            <span>Select {this.state.name}</span>
          )}
        </h1>

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
                  type="text"
                  required
                  onChange={this.handleChange}
                  value={this.state.date}
                ></input>

                <label>Date</label>
                <div className="underline"></div>
              </div>
            </div>
            <button onClick={this.handleSubmit} type="button">
              Create
            </button>
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

export default ImageSlider;
