import styled from "styled-components";

export const Style = styled.div`
  .draw {
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    width: 800px;
    margin: 10px auto;
    border-radius: 10px;
    position: relative;
    .save {
      padding: 5px;
      cursor: pointer;
      border-radius: 5px;
      background-color: #00ccff;
      border: none;
      outline: none;
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
    }
    input {
      border: none;
      outline: none;
      height: 20px;
    }
    .timeInput {
      margin-left: 30px;
      width: 150px;
      height: 20px;
    }
    .mix {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      width: 30%;
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
      .left {
        margin-left: 20px;
      }
      .right {
        margin-right: 20px;
      }
    }
    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      width: 30%;
      .teamName {
        padding: 0 20px;
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
      width: 35%;
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
  }
  .time {
    position: absolute;
    top: 5px;
    left: 20px;
  }
`;
