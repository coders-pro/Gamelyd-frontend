import styled from "styled-components";

export const Style = styled.div`
  .head {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin: 40px auto;
    width: 90vw;
    .mi {
      font-size: 18px;
      font-weight: 500;
      padding-top: 20px;
    }
  }
  .det {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: auto;
    .single {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 20px auto;
      .topper {
        font-size: 30px;
        font-weight: 700;
      }
      .bopper {
        p {
          font-size: 20px;
        }
      }
    }
  }
`;
