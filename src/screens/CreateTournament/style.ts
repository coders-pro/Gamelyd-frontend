import styled from "styled-components";

type DivType = {
  background: string;
};

export const Div = styled.div<DivType>`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* padding: 80px; */
  padding-top: 150px;
  padding-bottom: 0px;
  height: 100vh;
  width: 100vw;
  background: url("${(props) => props.background}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow-y: auto;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    overflow-y: auto;
    padding-top: 150px;
    @media (max-width: 1000px) {
      padding-top: 100px;
    }
  }

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 80px;
    padding-top: 0;
    padding-bottom: 0;
    @media (max-width: 700px) {
      padding: 20px;
    }
    @media (max-width: 500px) {
      padding: 0 10px;
    }
    .tag {
      border: 1.146px solid rgba(13, 176, 165, 0.3);
      background: linear-gradient(
        96deg,
        rgba(11, 192, 180, 0.1) -29.36%,
        rgba(36, 46, 57, 0.1) 102.77%
      );
      box-shadow: 0px 1.14583px 2.29167px 0px rgba(16, 24, 40, 0.05);
      padding: 13.75px 22.917px;
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      width: 351px;
      @media (max-width: 1000px) {
        width: 200px;
        padding: 10px;
        font-size: 14.845px;
        line-height: 28.767px;
      }
      @media (max-width: 500px) {
        width: 150px;
        padding: 0px;
        padding-left: 10px;
        font-size: 11.845px;
        line-height: 28.767px;
      }
    }
  }
  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: auto;
    margin-top: 50px;
    .modes {
      display: flex;
      flex-direction: column;
      .mode {
        border: 1px solid rgba(13, 176, 165, 0.3);
        background: linear-gradient(
          96deg,
          rgba(11, 192, 180, 0.2) -29.36%,
          rgba(36, 46, 57, 0.2) 102.77%
        );
        width: 406px;
        padding: 20px;
        margin: 10px 0;
        cursor: pointer;
        color: #fff;
        font-family: Lalezar;
        font-size: 18.845px;
        font-style: normal;
        font-weight: 500;
        line-height: 38.767px;
        @media (max-width: 1000px) {
          width: 200px;
          padding: 10px;
          font-size: 14.845px;
          line-height: 28.767px;
        }
        @media (max-width: 500px) {
          width: 150px;
          padding: 0px;
          padding-left: 10px;
          font-size: 11.845px;
          line-height: 28.767px;
        }
      }
      .active {
        border: 1px solid rgba(13, 176, 165, 0.3);
        background: linear-gradient(
          96deg,
          rgba(11, 192, 180, 0.7) -29.36%,
          rgba(36, 46, 57, 0.7) 102.77%
        );
      }
    }
  }
  .formData {
    width: 60vw;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: auto;
    padding: 40px;

    .back {
      color: #0bc0b4;
      text-align: right;
      cursor: pointer;
    }

    .space {
      height: 20px;
    }
    @media (max-width: 1000px) {
      width: 90vw;
      padding: 40px;
    }
    @media (max-width: 500px) {
      width: 95vw;
      padding: 20px;
    }
  }
  .button {
    width: 100px;
    margin: auto;
    margin-top: 50px;
  }
  .btn {
    border: 1px solid #0db0a5;
    background: var(
      --gradient,
      linear-gradient(96deg, #0bc0b4 -29.36%, #242e39 102.77%)
    );
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 13px;
    color: white;
    font-weight: 710;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    @media (max-width: 700px) {
      font-size: 9px;
    }
  }
`;
