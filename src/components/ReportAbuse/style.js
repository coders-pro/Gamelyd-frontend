import styled from "styled-components";

export const Style = styled.div`
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
      .eye {
          cursor: pointer;
          position: absolute;
          top: 0;
          right: 20px;
      }
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
  }
`;
