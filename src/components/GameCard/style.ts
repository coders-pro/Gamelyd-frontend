import styled from "styled-components";
type Card = {
  background: string;
};

export const Div = styled.div<Card>`
  background: url("${(props) => props.background}");
  width: 225.912px;
  height: 309.048px;
  border-radius: 22.591px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: inline-block;
  margin: 0 20px;
  @media (max-width: 700px) {
    font-size: 9px;
  }
  .name {
    border-radius: 0px 0px 23px 23px;
    opacity: 0.8;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 71px;
    color: #fff;
    font-family: Lalezar;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 93.2%; /* 14.198px */
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
`;
