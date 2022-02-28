import styled from "styled-components";

export const Style = styled.div`
  .top {
    /* border: 3px solid red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    padding-top: 100px;
    height: 100%;
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
      /* border: 3px solid blue; */
      width: 500px;
      display: flex;
      justify-content: center;
    }
    .text {
      /* border: 3px solid purple; */
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 800px;
      padding: 0 20px;
      padding-top: 50px;
      color: white;
      .buttons {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        margin-top: 30px;
      }
    }
  }
  .name {
    /* border: 3px solid green; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* margin-top: 70px; */
    width: 100%;
    .main {
      /* border: 3px solid red; */
      @media (max-width: 400px) {
        text-align: center;
      }
      .aha {
        font-size: 30px;
      }
      .user {
        font-size: 20px;
        padding: 5px 0;
      }
    }
    .socials {
      /* border: 3px solid red; */
      margin-right: 30px;
      @media (max-width: 400px) {
        width: 100%;
        text-align: center;
      }
      .soc {
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
  .bottom {
    /* border: 3px solid yellow; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    margin: auto;
    margin-top: 60px;
    @media (max-width: 800px) {
      flex-direction: column;
    }
    .bio {
      border: 1px solid rgba(0, 0, 0, 0.3);
      width: 40vw;
      height: 100%;
      margin: 20px;
      @media (max-width: 800px) {
        width: 80vw;
        margin: auto;
      }
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
      width: 40vw;
      height: 100%;
      margin: 20px;
      @media (max-width: 800px) {
        width: 80vw;
        margin: auto;
        margin-top: 30px;
      }
      .head {
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 10px 10px;
        font-size: 20px;
        .bts {
          border: none;
          outline: none;
          padding: 10px 10px;
          cursor: pointer;
          border-radius: 10px;
        }
        .act {
          background-color: #0bc0b4;
          color: #15202b;
        }
        .inAct {
          background-color: #15202b;
          color: white;
        }
      }
      .bod {
        padding: 10px 10px;
        p {
          overflow-wrap: break-word;
        }
      }
    }
  }
`;
