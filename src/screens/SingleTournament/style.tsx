import styled from "styled-components";

export const Div = styled.div`
  .page {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    background-color: black;
    .header {
      width: 100vw;
      height: 25vh;
      background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone.jpg?updatedAt=1695929792320");
      background-blend-mode: hard-light;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 20px;
      @media (max-width: 700px) {
        justify-content: left;
      }
      .but {
        margin: 10px 5px;
      }
    }
    .body {
      background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Backgrounds/siren2.svg?updatedAt=1701866045867"),
        black 0px -0.057px / 161.712% 79.129% no-repeat;
      background-blend-mode: hard-light;
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: center bottom;
      background-attachment: fixed;
      @media (max-width: 600px) {
        background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Backgrounds/siren1.svg?updatedAt=1701869410057"),
          url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Backgrounds/siren.svg?updatedAt=1701865629886"),
          black 0px -0.057px / 161.712% 79.129% no-repeat;
        font-size: 12px;
        background-position: center ;
        background-attachment: fixed;
      }
    }
  }
`;
