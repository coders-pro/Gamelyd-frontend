import styled from "styled-components";
type Display = {
  background: string;
  color: string;
  rgb: string;
  size: string;
};
export const Div = styled.div<Display>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 20px;
  @media (max-width: 800px) {
    margin: 0 10px;
  }
  .proBox {
    border-radius: 414.173px;
    border: ${(props) => (props.size === "big" ? "9.204px" : "5px")} solid
      ${(props) => props.color};
    background: url("${(props) => props.background}"),
      lightgray 50% / cover no-repeat;
    box-shadow: 0px 5.15714px 77.35708px 1.28928px rgba(${(props) => props.rgb});
    width: ${(props) => (props.size === "big" ? "314.173px" : "200px")};
    height: ${(props) => (props.size === "big" ? "314.173px" : "200px")};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    @media (max-width: 800px) {
      width: ${(props) => (props.size === "big" ? "214.173px" : "100px")};
      height: ${(props) => (props.size === "big" ? "214.173px" : "100px")};
    }
  }
  .proNum {
    background-color: ${(props) => props.color};
    width: ${(props) => (props.size === "big" ? "60.72px" : "40px")};
    height: ${(props) => (props.size === "big" ? "60.72px" : "40px")};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    font-family: Lalezar;
    font-size: ${(props) => (props.size === "big" ? "40.72px" : "20px")};
    font-style: normal;
    font-weight: 400;
    line-height: 93.2%;
    position: absolute;
    bottom: ${(props) => (props.size === "big" ? "-60px" : "-40px")};
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 800px) {
      width: ${(props) => (props.size === "big" ? "40.72px" : "20px")};
      height: ${(props) => (props.size === "big" ? "40.72px" : "20px")};
      font-size: ${(props) => (props.size === "big" ? "25.72px" : "14px")};
      bottom: ${(props) => (props.size === "big" ? "-43px" : "-23px")};
    }
  }
  .proName {
    color: #fff;
    text-align: center;
    font-family: Lalezar;
    font-size: ${(props) => (props.size === "big" ? "40px" : "25px")};
    font-style: normal;
    font-weight: 400;
    line-height: 93.2%;
    margin-top: ${(props) => (props.size === "big" ? "30px" : "24px")};
  }
`;
