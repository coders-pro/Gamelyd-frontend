import styled from "styled-components";
type Display = {
  background: string;
};
export const Div = styled.div<Display>`
  background: url("${(props) => props.background}"),
    lightgray 50% / cover no-repeat;
  width: 550px;
  height: 350px;
  min-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 40px; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 700px) {
    width: 80vw;
    height: 300px;
    .feeText {
      font-size: 13px;
    }
  }
  .top {
    width: 100%;
    .paid {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0px;
      padding: 20px;
      width: 100%;
      .feeBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin: 0;
        .fee {
          display: inline-flex;
          padding: 6.544px;
          flex-direction: column;
          align-items: flex-start;
          background: #1f2833;
          margin-top: 10px;
          .feeText {
            color: #fff;
            font-family: Lalezar;
            font-size: 19.061px;
            font-style: normal;
            font-weight: 400;
            line-height: 1em; /* 17.764px */
            @media (max-width: 700px) {
              font-size: 13px;
            }
          }
          .feeAmount {
            color: #0bc0b4;
            font-family: Lalezar;
            font-size: 2.6em;
            font-style: normal;
            font-weight: 400;
            line-height: 93.2%;
            @media (max-width: 700px) {
              font-size: 1.5em;
            }
          }
        }
      }
      .prize {
        display: inline-flex;
        padding: 5px;
        flex-direction: column;
        align-items: flex-end;
        background: #1f2731;
        border-radius: 5px;
        .prizeText {
          color: #fff;
          font-family: Lalezar;
          font-size: 1.9em;
          font-style: normal;
          font-weight: 400;
          line-height: 93.2%; /* 29.38px */
          text-align: right;
          @media (max-width: 700px) {
            font-size: 1.3em;
          }
        }
        .prizeAmount {
          color: #0bc0b4;
          font-family: Lalezar;
          font-size: 4.3em;
          font-style: normal;
          font-weight: 400;
          line-height: 93.2%; /* 65.24px */
          @media (max-width: 700px) {
            font-size: 2.9em;
          }
        }
      }
    }
    .platform {
      display: inline-flex;
      padding: 10px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      background: #000;
      color: #fbf67e;
      text-align: right;
      font-family: Lato;
      font-size: 21.74px;
      font-style: normal;
      font-weight: 700;
      line-height: 93.2%; /* 20.262px */
      text-transform: uppercase;
      margin-left: 20px;
      @media (max-width: 700px) {
        font-size: 16px;
      }
    }
  }
  .bottom {
    background-color: black;
    height: 82px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    .infoBox {
      .date {
        color: #fff;
        font-family: Lato;
        font-size: 17.74px;
        font-style: normal;
        font-weight: 700;
        line-height: 93.2%; /* 20.262px */
        text-transform: uppercase;
        line-height: 1.2em;
        @media (max-width: 700px) {
          font-size: 12px;
        }
      }
      .info {
        color: #fbf67e;
        font-family: Lato;
        font-size: 17.74px;
        font-style: normal;
        font-weight: 700;
        line-height: 93.2%; /* 20.262px */
        text-transform: uppercase;
        line-height: 1.2em;
        @media (max-width: 700px) {
          font-size: 12px;
        }
      }
    }
    .time {
      color: #0bc0b4;
      font-family: Lalezar;
      font-size: 20.007px;
      font-style: normal;
      font-weight: 400;
      line-height: 93.2%;
      width: 59px;
      line-height: 1.2em;
      @media (max-width: 700px) {
        font-size: 16px;
      }
    }
  }
`;
