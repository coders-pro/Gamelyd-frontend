import styled from "styled-components";

export const Style = styled.div`
  margin: auto;
  margin-top: 6em;
  margin-bottom: 6em;
  position: relative;
  width: 100%;
  height: 250px;
  background: #ffffff08;

  .game-form {
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

    .emp {
      height: 10px;
    }

    button {
      width: 130px;
      padding: 8px 8px;
      margin: 10px auto;
      display: flex;
      justify-content: center;
      background: rgb(11, 192, 180);
      color: white;
      border: none;
    }

    .wrapper {
      width: 450px;
      background: rgba(0, 0, 0, 0.6);
      padding: 10px 30px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      margin: 0px auto;

      @media (max-width: 850px) {
        width: 75%;
      }
    }

    .wrapper .input-data {
      height: 30px;
      width: 100%;
      position: relative;
      margin: 20px 0;
    }
    .wrapper .input-data input {
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
      font-size: 17px;
      background: transparent;
      color: white;
    }
    .input-data input:valid ~ label {
      transform: translateY(-20px);
      font-size: 16px;
      font-weight: 500;
      color: rgb(11, 192, 180);
    }
    .wrapper .input-data label {
      position: absolute;
      bottom: 4px;
      left: 0;
      color: rgba(197, 198, 199, 1);
      pointer-events: none;
    }
    .underline {
      margin: -4px;
    }
    .wrapper .input-data .underline {
      position: absolute;
      height: 2px;
      width: 100%;
      bottom: 0;
      background: linear-gradient(
        273deg,
        rgba(197, 198, 199, 1) 0%,
        rgb(11, 192, 180) 25%,
        rgba(31, 40, 51, 1) 100%
      );
    }

    .input-data .underline:before {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      background: rgb(11, 192, 180);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.3s ease;
    }

    .input-data input:focus ~ .underline:before,
    .input-data input:valid ~ .underline:before {
      transform: scaleX(1);
    }
  }
  h1 {
    position: absolute;
    top: -85px;
    margin-bottom: 1em;
    margin-top: 0;
    color: white;
    letter-spacing: 3px;
    width: 100%;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 25px;
    }
  }

  .previous {
    position: absolute;
    margin-left: 1em;
    top: -35px;
    margin-bottom: 1em;
    margin-top: 0;
    color: black;
    letter-spacing: 3px;
    width: 100px;
    background: transparent;
    border: none;
    outline: none;
    .undo1 {
      color: white;
      opacity: 0.5;
    }
    .undo {
      color: rgb(11, 192, 180);
      cursor: pointer;
      opacity: 1;
    }
  }

  .prev_button {
    position: absolute;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    left: 15px;
    top: 50%;
    outline: none;
    cursor: pointer;
    z-index: 90;
    @media (max-width: 600px) {
      left: 0px;
    }
  }
  .next_button {
    position: absolute;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    right: 15px;
    top: 50%;
    outline: none;
    cursor: pointer;
    z-index: 90;
    @media (max-width: 600px) {
      right: 0px;
    }
  }
  .cards-slider {
    position: relative;
    max-width: 200px;
    margin: 0 auto;

    ::before {
      content: "";
      display: block;
      width: 100%;
      height: 250px;
      outline: 5px solid #ffffff50;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .cards-slider-wrapper {
      position: absolute;
      width: 100%;
      display: flex;
      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
  }
  .cards-slider.active-slide-${(props) => props.num}
    #card-${(props) => props.num} {
    transform: scale(1);
    opacity: 1;
    z-index: 0;
  }
`;

export const StyleCard = styled.div`
  position: relative;

  h2 {
    position: absolute;
    top: 80px;
    text-align: center;
    width: 140px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    margin-left: 30px;
    font-size: 18px;
    padding: 5px 0;
  }
  .card {
    color: red;
    margin: auto;
    width: 200px;
    height: 250px;
    flex: 1;
    opacity: 0.5;
    transform: scale(0.7);
    transition: opacity 0.3s linear,
      transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    z-index: 0;

    img {
      width: 200px;
      height: 250px;
      margin: auto;
      object-position: 50% 15%;
      object-fit: cover;
      margin: auto;
      z-index: 1000;
    }
  }
`;
