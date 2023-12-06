import styled from "styled-components";

type DivType = {
  background: string;
};

export const Div = styled.div<DivType>`
  border-radius: 57.714px;
  background: url("${(props) => props.background}");
  width: 400.491px;
  height: 304.15px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 220.491px;
    height: 184.15px;
    border-radius: 30.714px;
  }
  @media (max-width: 500px) {
    width: 180.491px;
    height: 154.15px;
    border-radius: 20.714px;
  }
  .name {
    border-radius: 0px 0px 23px 23px;
    opacity: 0.8;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 101px;
    color: #cbced1;
    text-align: center;
    font-family: Lalezar;
    font-size: 31.221px;
    font-style: normal;
    font-weight: 400;
    line-height: 93.2%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    @media (max-width: 1000px) {
      font-size: 23.221px;
      height: 71px;
    }
    @media (max-width: 500px) {
      font-size: 16.221px;
      height: 40px;
    }
  }
`;
