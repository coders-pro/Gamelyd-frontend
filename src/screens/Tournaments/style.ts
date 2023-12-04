import styled from "styled-components";

export const Div = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    background: linear-gradient(95.81deg, #0bc0b4 -29.36%, #242e39 102.77%);
    padding-top: 150px;
    .head {
      display: flex;
      flex-direction: row;
      justify-content: right;
      align-items: center;
      padding: 0 50px;
      padding-bottom: 50px;
      .filter,
      .fil {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 10px;
        /* justify-content: center; */
        .filterBack {
          border-radius: 3px;
          background: #0bc0b4;
          width: 33px;
          height: 33px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
    }
    .pagination {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 40px;
      .page {
        font-size: 25px;
        margin: 0 10px;
        color: #101828;
      }
      img {
        cursor: pointer;
      }
    }
  }
`;
