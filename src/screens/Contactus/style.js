import styled from "styled-components";

export const Style = styled.div`
  padding-top: 105px;
  width: 100vw;
  height: 100vh;
  background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Backgrounds/startBack.svg?updatedAt=1701539367604");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 750px) {
    padding-top: 20px;
  }
  /* .title {
    font-size: 50px;
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-style: italic;
    color: #b8bcbf;
    text-align: center;
  } */

  .page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 750px) {
      flex-direction: column;
    }
    /* align-items: center; */
  }

  .left {
    padding-bottom: 100px;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
    @media (max-width: 750px) {
      width: 90vw;
      margin: auto;
    }
    form {
      background-color: #1f2731;
      width: 450px;
      padding-bottom: 100px;
      padding-top: 20px;
      @media (max-width: 1000px) {
        width: 350px;
      }
      @media (max-width: 750px) {
        width: 90vw;
      }
    }
    .button {
      width: 450px;
      margin-top: 20px;
      @media (max-width: 1000px) {
        width: 350px;
      }
      @media (max-width: 750px) {
        width: 90vw;
        margin: auto;
        margin-top: 20px;
      }
    }
    .txbx {
      margin: auto;
      width: 400px;
      @media (max-width: 1000px) {
        width: 300px;
      }
    }
    .cap {
      color: #0bc0b4;
      font-family: Lalezar;
      font-size: 30.79px;
      font-style: normal;
      font-weight: 400;
      line-height: 100.7%;
      text-transform: uppercase;
    }
    .subCap {
      color: #fff;
      font-family: Lalezar;
      font-size: 30.79px;
      font-style: normal;
      font-weight: 400;
      line-height: 100.7%;
      text-transform: uppercase;
      padding: 10px 0;
    }
    .sub {
      color: #fff;
      font-family: Inter;
      font-size: 16.311px;
      font-style: normal;
      font-weight: 400;
      line-height: 100.7%;
    }
    .texta {
      border: 1px solid rgb(11, 192, 180);
      background: transparent;
      padding: 10px;
      outline: none;
      width: 100%;
      color: white;
      font-size: 19px;
    }
    .wrapper {
      width: 450px;
      padding: 10px 30px;
      margin: 0px auto;
      @media (max-width: 1000px) {
        width: 350px;
      }
      @media (max-width: 750px) {
        width: 90vw;
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
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    @media (max-width: 750px) {
      width: 90vw;
      margin: auto;
      margin-top: -50px;
      margin-bottom: 20px;
    }
    .im {
      width: 40vw;
      height: 400px;
      background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Backgrounds/23c24237f57a4a2ff8908ae2d33c8a33.svg?updatedAt=1701544439454");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      @media (max-width: 750px) {
        display: none;
      }
    }
    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 20px;
      .tit {
        color: #0bc0b4;
        font-family: Lalezar;
        font-size: 25.571px;
        font-style: normal;
        font-weight: 400;
        line-height: 91.7%; /* 37.203px */
        text-transform: capitalize;
      }
      th,
      td {
        padding: 5px;
        text-align: left;
      }
      th {
        color: #0bc0b4;
        font-family: Lato;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
      }
      td {
        color: #fff;
        font-family: Lato;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
      }
    }
  }
`;
