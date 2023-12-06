import styled from "styled-components";

type DivType = {
  //   background?: string;
};

export const Div = styled.div<DivType>`
  width: 320.491px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 220.491px;
  }
  @media (max-width: 500px) {
    width: 180.491px;
  }
  img {
    margin: 10px 0;
    cursor: pointer;
    @media (max-width: 1000px) {
      width: 30px;
    }
    @media (max-width: 500px) {
        width: 23px;
    }
  }
`;
