import styled from 'styled-components'

export const Style = styled.div`
  .top {
    /* border: 3px solid red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    padding-top: 100px;
    /* border-bottom: 1px solid #0bc0b4; */
    background: rgba(0, 0, 0, 0.3);
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
      .buttons {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        margin-top: 20px;
      }
    }
  }
  .name {
    /* border: 3px solid green; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 70px;
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
    width: 90vw;
    margin: auto;
    margin-top: 60px;
    .bio {
      border: 1px solid rgba(0, 0, 0, 0.3);
      width: 100%;
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
      width: 100%;
      height: 100%;
      margin: 20px;
      .head {
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 10px 10px;
        font-size: 20px;
      }
      .bod {
        padding: 10px 10px;
        p {
          overflow-wrap: break-word;
        }
      }
    }
  }
`
