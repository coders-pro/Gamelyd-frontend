import styled from "styled-components";

export const Singlediv = styled.div`
  /* border: 3px solid red; */
  width: 95%;
  margin: auto;

  .info-div {
    /* border: 3px solid gold; */
    .sub-info-div {
      /* border: 1px solid blue; */
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: auto;
      .bio {
        border: 1px solid #b8bcbf83;
        width: 600px;
        height: 100%;
        .head {
          border: 1px solid #b8bcbf83;
          padding: 10px 10px;
          font-size: 20px;
          color: #b8bcbf83;
        }
        .bod {
          padding: 10px 10px;
          color: #b8bcbf83;
        }
      }
    }
  }
  .but {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    width: 180px;
    left: 0;
    right: 0;
    cursor: pointer;
  }
`;
