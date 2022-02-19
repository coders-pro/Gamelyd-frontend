import styled from "styled-components";

export const Style = styled.div`
  .draw {
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    padding: 30px;
    width: 80vw;
    max-width: 1000px;
    margin: 10px auto;
    border-radius: 10px;
    position: relative;
    @media (max-width: 800px) {
      flex-direction: column;
      width: 70vw;
    }
    .save {
      padding: 5px;
      cursor: pointer;
      border-radius: 5px;
      background-color: #00ccff;
      border: none;
      outline: none;
      @media (max-width: 550px) {
        width: 150px;
      }
    }
    .editButton {
      position: absolute;
      top: 0px;
      left: -50px;
      cursor: pointer;
      background-color: #00ccff;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      color: black;
      @media (max-width: 550px) {
        left: 0px;
      }
    }
    input {
      border: none;
      outline: none;
      height: 20px;
    }
    .timeInput {
      margin: 0 30px;
      width: 150px;
      height: 20px;
      @media (max-width: 550px) {
        margin-left: 0px;
        margin-bottom: 5px;
      }
    }
    .dateInput {
      width: 150px;
      @media (max-width: 550px) {
        width: 150px;
        margin-bottom: 5px;
      }
    }
    .mix {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      margin: auto;

      input {
        width: 40px;
        height: 30px;
        border: none;
        outline: none;
      }
      .teamScore {
        padding: 5px 10px;
        font-size: 20px;
        border-radius: 5px;
        color: white;
      }
      .win {
        background-color: green;
      }
      .loose {
        background-color: red;
      }
      /* .left {
        margin-left: 20px;
      }
      .right {
        margin-right: 20px;
      } */
    }
    .team {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      width: 250px;
      margin: auto;
      .teamName {
        /* padding: 0 20px; */
        font-size: 23px;
        font-weight: 600;
      }
    }
    .score {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: column;
      text-align: center;
      /* width: 35%; */
      .date {
        font-size: 17px;
      }
      .vs {
        font-size: 30px;
      }
    }
  }
  .atom {
    color: green;
    font-size: 15px;
  }
  .time {
    position: absolute;
    top: 5px;
    left: 30px;
    @media (max-width: 550px) {
      top: 0px;
      display: flex;
      flex-direction: column;
    }
  }
`;
