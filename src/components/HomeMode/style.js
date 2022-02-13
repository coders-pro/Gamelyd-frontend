import styled from "styled-components";

export const Style = styled.div`

  .free {
    width: 90%;
    display: flex;
    margin: 30px auto;
    position: relative;
    justify-content: space-around;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    .homecard {
      width: 300px;
      background: rgba(0,0,0,0.3);
      padding: 20px 30px;
      border: 2px solid rgba(31,40,51,1);
;
      margin: 20px 0;

      @media (max-width: 1000px) {
      margin: 40px auto 70px auto;
    }

      @media (max-width: 600px) {
      width: 250px;
    }
       
      .homecard-top {
        width: 100%;  
        border-bottom: 1px solid #0DA099;
        display: flex;
        justify-content: center;
        img {
          width: 200px;
          /* height: 200px; */
          margin: auto;
          display: flex;
          justify-content: center;
        }
      }
      .vs {
        font-size: 20px;
        padding-top: 100px;
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-style: italic;
        color: #B8BCBF;
      }

      .homecard-bottom {
        width: 100%;
        .bottom-first {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;

          h3 {
              font-size: 15px;
              margin: 6px 0;
              color: #B8BCBF;
            }

          div {
            display: block;
            h3 {
              margin: 0;
              font-size: 15px;
              color: #B8BCBF;
            }

            p {
              margin: 0;
              font-size: 13px;
              color: #B8BCBF;
            }
          }
        }

        .bottom-second {
          margin: 10px 0;

          p {
              margin: 0;
              font-size: 13px;
              color: #B8BCBF;
            }
        }
      }
    }

    .right {
      width: 60%;
      @media (max-width: 1000px) {
width: 100%;    }
    }

    .text {
      border: 2px solid white;
      width: 20%;
      right: 500px;
      top: -160px;
      @media(max-width: 1000px) {
      width: 20%;
      position: absolute;
      right: 0%;
      left: 0%;
      bottom: 0%;
      margin-right: 0px;
      margin-left: 0px;
      }


      h2 {
        text-align: center;
      }

      p {
        width: 90%;
        margin: auto;

        @media (max-width: 850px) {
          width: 100%;
        }
      }
      @media (max-width: 850px) {
        width: 100%;
      }
    }
    .top {
        display: flex;
        flex-direction: row
        width: 100%;
        padding: 20px;
        margin-right: -70px;
    }
  }
  
  .box{
    
    width: 200px;
    /* height: 100%; */
    background-color:  rgba(31,40,51,1);
    text-align: left;
    border-radius: 3%; 
    padding-top: 15px;
    padding-bottom: 25px;
    padding-left: 10px;
    box-shadow: rgba(255, 255, 255, 0.652); 1.95px 1.95px 2.6px;
    margin: 0 10px;
  }
 .p1{
     font-size: 22px;
  }
 .p2{
     font-size: 16px;
  }
    

  
  .both {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100px;
      width: 30%;
      margin: auto;
   
  }
  }
  .about {
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #B8BCBF;
      .title {
          font-size: 50px;
          font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-style: italic;
        color: #B8BCBF;
        padding: 20px 0

      }
      .sub {
          font-size: 22px;
          padding: 20px 0
      }
      .message {
          line-height: 30px;
          color: #B8BCBF;
      }
      .head {
        font-size: 20px;
        color: #0DA099;
        font-weight: 600;
      }
      .rotate {
      width: 20%;
      margin-top: -100px;
      padding: 0;
      box-sizing: border-box;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      @media (max-width: 999px) {
        width: 100%;
        margin-top: 0px;
      }

      .slider {
        position: relative;
        width: 200px;
        height: 200px;
        transform-style: preserve-3d;
        animation: rotate 30s linear infinite;
        @media (max-width: 870px) {
          width: 200px;
          height: 200px;
        }

        @keyframes rotate {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }

          100% {
            transform: perspective(1000px) rotateY(360deg);
          }
        }

        span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform-origin: center;
          transform-style: preserve-3d;

          :hover {
            transform: translateY(-50px) scale(1);
            transition: 1s;
          }

          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 100px;
            object-fit: cover;
            transition: 2s;
            transform: rotateY(calc(var(--i) * 45deg)) translateZ(350px);
          }
        }
      }
    }
`;

export const ImageRotateStyle = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 5;

  .slider {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: rotate 30s linear infinite;
    @media (max-width: 870px) {
      width: 200px;
      height: 200px;
    }

    @keyframes rotate {
      0% {
        transform: perspective(1000px) rotateY(0deg);
      }

      100% {
        transform: perspective(1000px) rotateY(360deg);
      }
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-origin: center;
      transform-style: preserve-3d;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        object-fit: cover;
        transition: 2s;
        transform: rotateY(calc(var(--i) * 45deg)) translateZ(350px);
      }
    }
  }
  .both {
    .ims {
      background-color: red;
      height: 200px;
      width: 200px;
      position: absolute;
      border: 2px solid white;
    }
  }
`;
