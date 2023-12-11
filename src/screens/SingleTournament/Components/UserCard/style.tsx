import styled from "styled-components";

type Display = {
  //   bg: string;
  //   player2: string;
};

export const Div = styled.div<Display>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 3px;
  background: #06252c;
  width: 330px;
  padding: 20px;
  cursor: pointer;
  @media (max-width: 750px) {
    width: 290px;
  }
  @media (max-width: 660px) {
    width: 90vw;
  }
  .image {
    img {
      width: 108px;
      height: 108px;
      border-radius: 50%;
    }
  }
  .name {
    margin-left: 10px;
    .main {
      color: #fff;
      font-family: Lalezar;
      font-size: 28.016px;
      font-style: normal;
      font-weight: 400;
      line-height: 93.2%; /* 44.751px */
    }
    .userName {
      color: #fff;
      font-family: Inter;
      font-size: 14.373px;
      font-style: normal;
      font-weight: 500;
      line-height: 26.06px; /* 150% */
    }
  }
`;
