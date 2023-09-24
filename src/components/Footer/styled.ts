import styled from "styled-components";

type Foot = {};

export const FooterStyle = styled.div<Foot>`
  background: #1f2731;
  padding: 30px 70px;
  @media (max-width: 750px) {
    padding: 30px 30px;
  }
  .top {
    display: flex;
    flex-direction: column;
    .logo {
      width: 200px;
      margin-bottom: 30px;
    }
    .desc {
      color: #e9d7fe;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      width: 300px;
      margin-bottom: 30px;
    }
    .link {
      text-decoration: none;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      margin-right: 30px;
      padding: 10px;
      cursor: pointer;
      color: #e9d7fe;
      padding-left: 0;

      @media (max-width: 950px) {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
  .middle {
    width: 100%;
    height: 2px;
    background: #7f56d9;
    margin-top: 60px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;

    .com {
      color: #d6bbfb;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      margin-top: 40px;
    }
    .social {
      margin-top: 40px;

      .socialIcn {
        cursor: pointer;
        margin-left: 20px;
      }
    }
  }
`;
