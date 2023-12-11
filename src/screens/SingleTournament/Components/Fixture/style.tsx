import styled from "styled-components";

type Display = {
  player1: string;
  player2: string;
};

export const Div = styled.div<Display>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .con {
    display: flex;
    flex-direction: row;
    @media (max-width: 770px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .player1 {
      background: url("${(props) => props.player1}"),
        lightgray 50% / cover no-repeat;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100.313px;
      height: 100.313px;
      border: 7.358px solid #242e39;
      border-radius: 50%;
      position: absolute;
      left: 1px;
    }
    .player2 {
      background: url("${(props) => props.player2}"),
        lightgray 50% / cover no-repeat;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100.313px;
      height: 100.313px;
      border: 7.358px solid #242e39;
      border-radius: 50%;
      position: absolute;
      right: 1px;
    }
    .playerScore1 {
      border: 2.679px solid #242e39;
      width: 265.207px;
      height: 45.959px;
      background: #fff;
      margin-left: 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      @media (max-width: 770px) {
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        width: 70vw;
      }
      .score {
        color: #fff;
        text-align: center;
        font-size: 20.016px;
        font-style: normal;
        font-weight: 400;
        border-radius: 5.518px;
        background: #e94654;
        margin-right: 30px;
        padding: 5px 10px;
      }
      .name {
        color: #242e39;
        text-align: center;
        font-family: Lalezar;
        font-size: 20.016px;
        font-style: normal;
        font-weight: 400;
        line-height: 93.2%;
        padding-left: 40px;
      }
    }
    .playerScore2 {
      border: 2.679px solid #242e39;
      width: 265.207px;
      height: 45.959px;
      background: #fff;
      margin-right: 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      @media (max-width: 770px) {
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;
        width: 70vw;
      }
      .score {
        color: #fff;
        text-align: center;
        font-size: 20.016px;
        font-style: normal;
        font-weight: 400;
        border-radius: 5.518px;
        background: #fdc115;
        margin-left: 30px;
        padding: 5px 10px;
      }
      .name {
        color: #242e39;
        text-align: center;
        font-family: Lalezar;
        font-size: 20.016px;
        font-style: normal;
        font-weight: 400;
        line-height: 93.2%;
        padding-right: 40px;
      }
    }
    .both {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      @media (max-width: 770px) {
        margin-right: 0;
      }
    }
    .both2 {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      margin-left: -12px;
      @media (max-width: 770px) {
        margin-left: 0;
      }
    }
    .vs {
      background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/vs.svg?updatedAt=1702070662602");
      /* lightgray 50% / cover no-repeat; */
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 60.313px;
      height: 60.313px;
      border-radius: 50%;
      margin-left: -12px;
      z-index: 2;
      @media (max-width: 770px) {
        margin: 10px 0;
      }
    }

    .score {
    }
  }
  .date {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    @media (max-width: 770px) {
      margin-top: 30px;
      margin-bottom: 40px;
    }
    .day,
    .time {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 15.5px;
      font-style: normal;
      font-weight: 700;
    }
    .sep {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 15.5px;
      font-style: normal;
      font-weight: 700;
      margin: 0 15px;
    }
  }
`;
