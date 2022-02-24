import styled from "styled-components";

export const Style = styled.div`
  .top {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 100px;
    /* border-bottom: 1px solid #0bc0b4; */
    background-color: #000;
    background-image: repeating-linear-gradient(
        transparent,
        transparent 50px,
        rgba(0, 255, 255, 0.25) 50px,
        rgba(0, 255, 255, 0.25) 100px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(0, 255, 255, 0.25),
        rgba(0, 255, 255, 0.25) 50px,
        transparent 50px,
        transparent 100px
      ),
      repeating-linear-gradient(
        135deg,
        transparent,
        transparent 4px,
        rgba(255, 255, 255, 0.1) 4px,
        rgba(255, 255, 255, 0.1) 8px
      ),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 4px,
        rgba(255, 255, 255, 0.1) 4px,
        rgba(255, 255, 255, 0.1) 8px
      ),
      repeating-linear-gradient(
        transparent,
        transparent 20px,
        rgba(100, 250, 250, 0.2) 20px,
        rgba(100, 250, 250, 0.2) 21px,
        transparent 21px,
        transparent 29px,
        rgba(100, 250, 250, 0.2) 29px,
        rgba(100, 250, 250, 0.2) 30px,
        transparent 30px,
        transparent 50px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 20px,
        rgba(100, 250, 250, 0.2) 20px,
        rgba(100, 250, 250, 0.2) 21px,
        transparent 21px,
        transparent 29px,
        rgba(100, 250, 250, 0.2) 29px,
        rgba(100, 250, 250, 0.2) 30px,
        transparent 30px,
        transparent 50px
      );
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
