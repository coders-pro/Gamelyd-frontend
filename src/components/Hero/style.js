import styled from "styled-components";

export const HeroStyle = styled.div`
  padding-top: 150px;
  background: var(--gradient, linear-gradient(96deg, #0BC0B4 -29.36%, #242E39 102.77%));
  @media (max-width: 1000px) {
    padding-top: 120px;
  }
  .tons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .card {
      margin-bottom: 30px;
    }
  }
`;
