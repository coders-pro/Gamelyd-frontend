import styled from "styled-components";

type Display = {
  //   bg: string;
  //   player2: string;
};

export const Div = styled.div<Display>`
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 570px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px 5px;
    gap: 10px;

  }
`;
