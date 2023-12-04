import styled from "styled-components";

export const InputStyle = styled.div`
  font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  .wrapper .input-data {
    height: 40px;
    width: 100%;
    position: relative;
    margin: 20px 0;
  }
  .wrapper .input-data select {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 17px;
    background: transparent;
    color: white;
    cursor: pointer;
  }
  .input-data select:valid ~ label {
    transform: translateY(-24px);
    font-size: 16px;
    font-weight: 500;
    color: #0bc0b4;
  }
  .wrapper .input-data label {
    position: absolute;
    bottom: 10px;
    left: 0;
    color: rgba(197, 198, 199, 1);
    pointer-events: none;
  }
  .underline {
    margin: -4px;
  }
  .wrapper .input-data .underline {
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    background: linear-gradient(
      273deg,
      rgba(197, 198, 199, 1) 0%,
      rgba(102, 252, 241, 1) 25%,
      rgba(31, 40, 51, 1) 100%
    );
  }

  .input-data .underline:before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: linear-gradient(
      273deg,
      rgba(197, 198, 199, 1) 0%,
      rgba(102, 252, 241, 1) 25%,
      rgba(31, 40, 51, 1) 100%
    );
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .input-data select:focus ~ .underline:before,
  .input-data select:valid ~ .underline:before {
    transform: scaleX(1);
  }
  select[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }
`;
