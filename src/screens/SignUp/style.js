import styled from "styled-components";

export const SignUpStyle = styled.div`
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
    @media (max-width: 700px) {
      display: none;
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
    @media (max-width: 700px) {
      width: 100vw;
    }
  }
`;
