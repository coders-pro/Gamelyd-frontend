import styled from "styled-components";
type Display = {
  //   background: string;
};
export const Div = styled.div<Display>`
  padding-bottom: 50px;
  background: linear-gradient(180deg, #101014 41.42%, #1f262f 163.4%);
  .leadTitle {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .title {
      color: #fff;
      text-align: center;
      font-family: Lalezar;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 93.2%; /* 65.24px */
      text-transform: capitalize;
      margin-top: 40px;
      @media (max-width: 700px) {
        font-size: 30px;
      }
    }
    .fil {
      display: flex;
      flex-direction: row;
      margin-left: 40px;
      margin-top: 40px;

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
  .profiles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 70px 0;
  }
`;
