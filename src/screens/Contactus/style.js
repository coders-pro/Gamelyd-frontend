import styled from "styled-components";

export const Style = styled.div`
.title {
    font-size: 50px;
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-style: italic;
    color: #b8bcbf;
    text-align: center;
  }
  .bod {
    padding: 150px 0;
    .bos {
      width: 70vw;
      height: 700px;
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      background: rgba(0, 0, 0, 0.6);
      @media (max-width: 850px) {
        width: 90vw;
      }
      
      .form {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content:center;
        align-items: center;
        .texta {
          border: 1px solid rgb(11, 192, 180);
          background: transparent;
          padding: 10px;
          outline: none;
          width: 95%;
          color: white;
          font-size: 19px;
        }
        .hi {
          font-size: 35px;
          text-align: center;
        }
        .sub {
          font-size: 18px;
          text-align: center;
        }
        .wrapper {
        width: 450px;
        padding: 10px 30px;
        margin: 0px auto;
        @media (max-width: 850px) {
        width: 300px;
      }
      @media (max-width: 450px) {
        width: 200px;
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
  .buty {
    width: 130px;
    padding: 8px 8px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    background: rgb(11, 192, 180);
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 100px;
  }
      }
      .info {
        width: 35%;
        height: 70%;
        background: rgb(11, 192, 180);;
        margin-left: -200px;
        margin-top: 70px;
        color: #15202b;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 30px;
        @media (max-width: 1100px) {
        width: 0px;
        display: none;
      }
        .head {
          font-size: 30px;
          font-weight: 600;
        }
        td {
          padding: 20px;
        }
        .icons {
          display: flex;
          justify-content: space-between;
          a{
            text-decoration: none;
            color: #15202b;
          }
        }
      }
    }
  }
`;
