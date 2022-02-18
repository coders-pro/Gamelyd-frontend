import styled from "styled-components";

export const Style = styled.div`
  .top {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 100px;
    /* border-bottom: 1px solid #0bc0b4; */
    background: rgba(0, 0, 0, 0.3);
    .pic {
      width: 500px;
      display: flex;
      justify-content: center;
    }
    .text {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 800px;
      padding: 0 20px;
      .buttons {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
      }
    }
  }
  .name {
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
    width: 100%;
    .main {
      .aha {
        font-size: 30px;
      }
      .user {
        font-size: 20px;
        padding: 5px 0;
      }
    }
    .socials {
      margin-right: 30px;
      .soc {
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
  .bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90vw;
    margin: auto;
    margin-top: 60px;
    .bio {
      border: 1px solid rgba(0, 0, 0, 0.3);
      width: 600px;
      height: 100%;
      margin: 20px;
      .head {
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 10px 10px;
        font-size: 20px;
      }
      .bod {
        padding: 10px 10px;
      }
    }
    .det {
      border: 1px solid rgba(0, 0, 0, 0.3);
      width: 600px;
      height: 100%;
      margin: 20px;
      .head {
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 10px 10px;
        font-size: 20px;
      }
      .bod {
        padding: 10px 10px;
      }
    }
  }
`;
