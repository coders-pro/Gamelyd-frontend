import styled from "styled-components";

export const Div = styled.div`
  table {
    width: 700px;
    margin: auto;
    margin-bottom: 30px;
    border-collapse: separate;
    border-spacing: 15px;
    @media (max-width: 700px) {
      width: 100%;
    }
    tr {
      /* padding: 10px; */
      td,
      th {
        text-align: left;
        padding: 13px 10px;
        font-size: 14px;
        font-weight: normal;
        @media (max-width: 500px) {
          font-size: 12px;
        }
      }
      td {
        width: 65%;
        background-color: #c2c0c0;
        color: #000;
        margin-left: 10px;
      }
      th {
        width: 35%;
        background-color: #062c2a;
        color: #c2c0c0;
      }
    }
  }
`;
