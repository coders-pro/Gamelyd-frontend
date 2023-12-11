import styled from "styled-components";

type Display = {
  //   bg: string;
  //   player2: string;
};

export const Div = styled.div<Display>`
  background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/teamCard.svg?updatedAt=1702140208686");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 234px;
  height: 326px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    .box .names .PlayerNames {
      display: block;
    }
  }
  @media (max-width: 570px) {
    width: 160px;
    height: 226px;
  }
  .box {
    background-color: pink;
    width: 180px;
    height: 296px;
    background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/girl.png?updatedAt=1701589631511");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: end;
    @media (max-width: 570px) {
      width: 120px;
      height: 206px;
    }

    .names {
      background-color: black;

      .name {
        background: url("https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/teamName.svg?updatedAt=1702140208879");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 22.016px;
        font-style: normal;
        font-weight: 400;
        background-color: black;
        @media (max-width: 570px) {
          font-size: 16.016px;
        }
      }
      .PlayerNames {
        padding: 5px 10px;
        /* display: none; */
        .sin {
          color: #fff;
          font-size: 16.016px;
          font-style: normal;
          font-weight: 400;
          padding: 2px 0px;
          @media (max-width: 570px) {
            font-size: 13.016px;
          }
        }
      }
    }
  }
`;
