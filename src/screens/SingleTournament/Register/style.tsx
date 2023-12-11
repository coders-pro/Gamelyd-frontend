import styled from "styled-components";

export const Div = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  .con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    margin: auto;
    @media (max-width: 750px) {
      width: 90vw;
    }
    .in {
      display: flex;
      /* flex-direction: row; */
      flex-wrap: wrap;
      input {
        border-radius: 3px;
        border: 2px solid #0bc0b4;
        width: 580px;
        padding: 15px 20px;
        background: #fff;
        outline: none;
        height: 35px;
        margin-right: 30px;
        @media (max-width: 750px) {
          width: 90vw;
          margin: auto;
          margin-bottom: 20px;
        }
      }
    }
    .team {
      width: 100%;
      .tit {
        color: #fff;
        font-size: 28.016px;
        font-style: normal;
        font-weight: 400;
        text-align: left;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      input {
        border-radius: 3px;
        border: 2px solid #0bc0b4;
        width: 380px;
        padding: 15px 20px;
        background: #fff;
        outline: none;
        height: 35px;
        margin-right: 30px;
        @media (max-width: 750px) {
          width: 90vw;
          margin: auto;
        }
      }
      .selected {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        .select {
          border-radius: 3px;
          border: 1px solid #0bc0b4;
          background: #06252c;
          padding: 5px 10px;
          position: relative;
          width: 160px;
          margin-right: 10px;
          margin-top: 10px;

          .cancel {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
          }
          .name {
            color: #fff;
            font-family: Lalezar;
            font-size: 20.059px;
            font-style: normal;
            font-weight: 400;
            line-height: 93.2%; /* 22.423px */
            padding-bottom: 5px;
          }
          .userName {
            color: #fff;
            font-family: Inter;
            font-size: 8.705px;
            font-style: normal;
            font-weight: 500;
            line-height: 13.057px; /* 150% */
          }
        }
      }
    }
    .users {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;
      .user {
        margin-top: 20px;
      }
    }
  }
`;
