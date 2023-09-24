import styled from "styled-components";
type Display = {
  //   background: string;
};
export const Div = styled.div<Display>`
  overflow-x: auto;
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    text-align: left;
    padding: 10px;
    min-width: 120px;
  }
  th {
    background: #000;
    padding: 15px 10px;
    @media (max-width: 700px) {
      font-size: 11px;
    }
  }
  td {
    background: #1f2731;
    color: #fff;
    text-align: left;
    font-family: Lato;
    font-size: 14.74px;
    font-style: normal;
    line-height: 93.2%; /* 20.262px */
    border-bottom: 3px solid black;
    @media (max-width: 700px) {
      font-size: 11px;
    }
  }
  .but {
    width: 70px;
  }

  th:first-child,
  td:first-child,
  th:last-child,
  td:last-child {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    right: 0;
    z-index: 1000;
  }
`;
