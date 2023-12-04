import styled from "styled-components";

export const Style = styled.div`
  background-color: #252f39;

  .top {
    width: 100%;
    height: 100%;
    margin-top: 150px;
    padding: 0 40px;
    background-color: #252f39;
    .info {
      background: #212733;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 20px;
      .im {
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 139.908px;
          height: 139.908px;
        }
        .tx {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 20px;
          .name {
            color: #fff;
            font-family: Lato;
            font-size: 30.539px;
            font-style: normal;
            font-weight: 700;
            @media (max-width: 670px) {
              font-size: 20.539px;
            }
          }
          .userName {
            color: #fff;
            font-family: Lato;
            font-size: 19.727px;
            font-style: normal;
            font-weight: 400;
            @media (max-width: 670px) {
              font-size: 14.539px;
            }
          }
        }
      }
      .det {
        display: flex;
        flex-direction: row;
        align-items: center;
        @media (max-width: 570px) {
          display: none;
        }
        .rnk,
        .plays {
          text-align: center;
        }
        .plays {
          margin-left: 40px;
        }
        .tit {
          color: #fff;
          font-family: Lato;
          font-size: 20.399px;
          font-style: normal;
          font-weight: 700;
          opacity: 0.2;
          @media (max-width: 670px) {
            font-size: 14.539px;
          }
        }
        .num {
          color: #fff;
          font-family: Lato;
          font-size: 20.399px;
          font-style: normal;
          font-weight: 700;
          line-height: 59.099px; /* 150% */
          @media (max-width: 670px) {
            font-size: 14.539px;
          }
        }
      }
    }
    .pic {
      /* border: 3px solid blue; */
      width: 500px;
      display: flex;
      justify-content: center;
    }
    .text {
      /* border: 3px solid purple; */
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 800px;
      padding: 0 20px;
      padding-top: 50px;
      color: white;
      .buttons {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        margin-top: 30px;
      }
    }
    .edit {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 50px 30px;
      background: #252f39;
      box-shadow: 0px 6px 16px 0px #212631;
      margin-bottom: 20px;
      .add,
      .phone,
      .email,
      .but {
        display: flex;
        flex-direction: row;
        /* justify-content: center; */
        align-items: center;
        margin: 10px;
      }
      .buts {
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
      }
      .dets {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
      }
      .txt {
        color: #fff;
        font-family: Lato;
        font-size: 14.413px;
        font-style: normal;
        font-weight: 400;
        line-height: 18.826px; /* 200% */
        margin-left: 10px;
      }
      .icn {
        img {
          width: 28.435px;
          height: 28.435px;
        }
      }
    }
  }
  .bot {
    display: flex;
    flex-direction: column;
    padding: 40px;
    @media (max-width: 470px) {
      padding: 0px;
    }
    .head {
      color: #fff;
      font-family: Lalezar;
      font-size: 35.727px;
      font-style: normal;
      font-weight: 400;
      line-height: 71.455px;
      margin-bottom: 40px;
      @media (max-width: 670px) {
        font-size: 25.727px;
        padding-left: 25px;
        margin-bottom: 10px;
      }
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .card {
        margin: 10px;
        @media (max-width: 470px) {
          margin: 0px;
        }
      }
    }
  }
`;
