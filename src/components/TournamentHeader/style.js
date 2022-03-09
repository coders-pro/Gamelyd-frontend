import styled from "styled-components";

export const Style = styled.div`
  .all {
    height: 250px;
    width: 100vw;
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
  }
  .imgs {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: auto;
    margin-top: -100px;
    background-color: #15202b;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
