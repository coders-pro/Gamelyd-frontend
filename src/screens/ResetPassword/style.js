import styled from "styled-components";

export const ForgotStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: black;

  .left {
    width: 60vw;
    height: 100vh;
    background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Backgrounds/siren.svg?updatedAt=1701865629886"),
      url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Backgrounds/siren1.svg?updatedAt=1701869410057"),
      black 0px -0.057px / 161.712% 79.129% no-repeat;
    background-blend-mode: hard-light;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .pad {
      width: 422px;
      height: 370px;
      background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Backgrounds/pad.svg?updatedAt=1701866171804"),
        black 0px -0.057px / 161.712% 79.129% no-repeat;
      background-blend-mode: hard-light;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  .right {
    width: 40vw;
    height: 100vh;
    overflow: auto;
    .top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .logo {
      width: 220px;
      height: 90px;
      margin-top: 60px;
      margin-bottom: 70px;
    }
    .tit {
      color: #fff;
      font-family: Lalezar;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 91.7%;
      margin-bottom: 50px;
    }
  }
  .form {
    width: 100%;
    .inputs {
      width: 90%;
      margin: auto;
      .input-data {
        position: relative;
      }
      .eye {
        position: absolute;
        top: 8px;
        right: 30px
      }
    }

    .inputText1 {
      width: 100%;
      border-radius: 8px;
      border: 1px solid #121315;
      background-color: #121315;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      padding: 10px 14px;
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      outline: none;
      margin-bottom: 20px;
    }
    .inputText2 {
      width: 100%;
      display: flex;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid var(--gray-300, #d0d5dd);
      background: var(--White, #fff);
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      margin-bottom: 20px;
      outline: none;
    }
    .bt {
      width: 90%;
      margin: auto;
    }
    .already {
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      margin-top: 40px;
      .lin {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
  }
`;
