import styled from "styled-components";

export const SignupFormStyle = styled.div`
  margin: 0;
  padding: 0;

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
        right: 30px;
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
      font-size: 14px;
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
