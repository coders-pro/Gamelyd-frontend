import styled from 'styled-components'

export const Aboutted = styled.div`
  /* border: 3px solid red; */
  .head {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 150px 0;
    height: 100%;
    /* border-bottom: 1px solid #0bc0b4; */
    background-color: #000;
    background-image: repeating-linear-gradient(
        transparent,
        transparent 50px,
        rgba(0, 255, 255, 0.25) 50px,
        rgba(0, 255, 255, 0.25) 100px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(0, 255, 255, 0.25),
        rgba(0, 255, 255, 0.25) 50px,
        transparent 50px,
        transparent 100px
      ),
      repeating-linear-gradient(
        135deg,
        transparent,
        transparent 4px,
        rgba(255, 255, 255, 0.1) 4px,
        rgba(255, 255, 255, 0.1) 8px
      ),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 4px,
        rgba(255, 255, 255, 0.1) 4px,
        rgba(255, 255, 255, 0.1) 8px
      ),
      repeating-linear-gradient(
        transparent,
        transparent 20px,
        rgba(100, 250, 250, 0.2) 20px,
        rgba(100, 250, 250, 0.2) 21px,
        transparent 21px,
        transparent 29px,
        rgba(100, 250, 250, 0.2) 29px,
        rgba(100, 250, 250, 0.2) 30px,
        transparent 30px,
        transparent 50px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 20px,
        rgba(100, 250, 250, 0.2) 20px,
        rgba(100, 250, 250, 0.2) 21px,
        transparent 21px,
        transparent 29px,
        rgba(100, 250, 250, 0.2) 29px,
        rgba(100, 250, 250, 0.2) 30px,
        transparent 30px,
        transparent 50px
      );
    .sub-head {
      span {
        font-size: 60px;
        color: white;
        @media (max-width: 500px) {
          font-size: 50px;
        }
      }
      p {
        font-size: 25px;
        color: grey;
      }
    }
  }

  .body {
    border: 3px solid green;
    padding: 100px 50px;
    position: relative;
    @media (max-width: 700px) {
      padding: 50px 20px;
    }
    .sub-body {
      /* border: 3px solid red; */
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 80%;
      margin: auto;
      @media (max-width: 1000px) {
        width: 100%;
      }
      .text-div {
        width: 45%;
        height: 600px;
        /* border: 3px solid blue; */
        @media (max-width: 800px) {
          width: 100%;
          height: auto;
        }
        div {
          border-top: 3px solid #b8bcbf83;
          width: 70px;
          padding: 0;
          margin: 0;
        }
        h3 {
          font-size: 45px;
          @media (max-width: 800px) {
            font-size: 35px;
          }
        }
        p {
          font-size: large;
        }
      }
      .img-div {
        width: 45%;
        height: 600px;
        /* border: 3px solid blue; */
        @media (max-width: 800px) {
          width: 100%;
          height: auto;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .lower {
      /* border: 3px solid red; */
      width: 65%;
      height: 70px;
      position: absolute;
      top: 80%;
      background-color: #15202b;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }
  }
`
