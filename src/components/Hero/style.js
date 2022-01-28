import styled from 'styled-components'

export const HeroStyle = styled.div`
  position: relative;
  overflow: hidden;

  .images {
    display: flex;
    margin: 0 0;
    justify-content: space-between;
    width: 100%;
    height: 95vh;
    padding-top: 50px;

    @media (max-width: 999px) {
      background: url('images/soldier7.png');
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
    }

    .first {
      width: 40%;
      // border: 2px solid white;
      @media (max-width: 999px) {
        display: none;
      }

      img {
        height: 100%;
        width: 100%;
      }
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

    .last {
      width: 40%;
      // border: 2px solid white;
      @media (max-width: 999px) {
        display: none;
      }

      img {
        height: 100%;
        width: 100%;
        margin-bottom: -20px;
      }
    }
  }

  .text {
    position: absolute;
    width: auto;
    top: 60vh;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  .create-button {
    position: absolute;
    width: auto;
    top: 40vh;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    @media (max-width: 1000px) {
      top: 50vh;
    }

    .button {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      width: 250px;
      height: 50px;
      font-size: 17px;
      cursor: pointer;
    }
  }
`
