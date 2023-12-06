import styled from "styled-components";

export const HomeStyle = styled.div`
  .striped-background {
    margin-top: 20px;
    position: relative;
    width: 100%;
    height: 300px;
    background: repeating-linear-gradient(
      to bottom,
      #177373 0px,
      #177373 30px,
      transparent 30px,
      transparent 45px
    );
    @media (max-width: 700px) {
      height: 200px;
      background: repeating-linear-gradient(
        to bottom,
        #177373 0px,
        #177373 20px,
        transparent 20px,
        transparent 35px
      );
    }
  }

  .fade {
    width: 100%;
    height: 300px; /* Adjust the height as needed */
    position: relative;
    background: linear-gradient(
      to right,
      rgba(31, 39, 49, 0),
      #1f2731,
      rgba(31, 39, 49, 0)
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
      height: 200px;
    }

    .gTitle {
      color: #fff;
      text-align: center;
      font-family: Lalezar;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 93.2%; /* 65.24px */
      @media (max-width: 700px) {
        font-size: 30px;
      }
    }
    .gSub {
      color: #fff;
      text-align: center;
      font-family: Lato;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media (max-width: 700px) {
        font-size: 13px;
      }
    }
  }
  .slider {
    width: 100vw;
    height: 309.048px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-top: 100px;
    .sliderContainer {
      width: 93%;
      height: 100%;
      margin: auto;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        width: 0.2rem;
      }
      &::-webkit-scrollbar-thumb {
        background-color: transparent;
      }
    }
    .icon {
      cursor: pointer;
    }
  }
`;
