import styled from "styled-components";

export const Style = styled.div`
  .draw {
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    width: 80%;
    margin: 10px auto;
    border-radius: 10px;
    position: relative;
    color: white;
    .bot {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .vs {
        font-size: 20px;
        text-align: left;
      }
      .player {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
      }
      .playerName {
        padding: 0 20px;
        font-size: 15px;
        text-align: left;
      }
    }
    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      .teamName {
        padding: 0 20px;
        font-size: 23px;
        font-weight: 600;
      }
    }
  }
`;
