import styled from "styled-components";

export const Div = styled.div`
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
`;
