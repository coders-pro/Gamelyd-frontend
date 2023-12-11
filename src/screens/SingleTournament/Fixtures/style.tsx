import styled from "styled-components";

export const Div = styled.div`
  margin-bottom: 40px;
  .pages {
    display: flex;
    flex-direction: column;
    .games {
      display: flex;
      flex-direction: column;
      .top {
        display: flex;
        padding: 20px 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: #062c2a;
        color: #fff;
        text-align: center;
        font-size: 23.077px;
        font-style: normal;
        font-weight: 400;
        line-height: 91.7%;
        margin-bottom: 30px;
      }
      .game {
        margin: 10px 0;
        margin-top: 20px;
      }
    }
  }
`;
