import styled from "styled-components";

export const Div = styled.div`
  background: #0F0F13;
  padding-bottom: 50px;
  .top {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    padding-top: 50px;
    
    .tSide {
      margin-right: 30px;
      margin-bottom: 30px;
      .title {
        color: #fff;
        text-align: center;
        font-family: Lalezar;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 93.2%;
        @media (max-width: 700px) {
          font-size: 30px;
        }
      }
      .sub {
        color: #fff;
        text-align: left;
        font-family: Lato;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        @media (max-width: 700px) {
          font-size: 13px;
        }
      }
    }
    .bSide {
      padding-right: 20px;
      display: flex;
      flex-direction: row;
      margin-bottom: 30px;

      .drop {
        margin-left: 10px;
      }
      .fil {
        display: flex;
        flex-direction: row;
        .filterBack {
          border-radius: 3px;
          background: #0bc0b4;
          width: 33px;
          height: 33px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .filImage {
        }
      }
    }
  }
  .table {
      margin: 50px;
      margin-top: 20px;
    }
`;
