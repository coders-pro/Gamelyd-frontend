import styled from "styled-components";

export const ImageRotateStyle = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

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
`;
