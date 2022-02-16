import styled from 'styled-components'

export const Style = styled.div`
  button {
    background: #0da099;
    padding: 10px 20px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 20px;
  }

  .container {
    // border: 3px solid orange;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;

    .a {
      position: relative;
      width: 160px;
      height: 60px;
      display: inline-block;
      background: white;
      margin-right: 15px;
    }
    .a::before,
    .a::after {
      content: '';
      position: absolute;
      inset: 0;
      background: red;
      transition: 0.5s;
    }
    .a:nth-child(1):before,
    .a:nth-child(1):after {
      background: linear-gradient(45deg, #00ccff, #0e1538, #d400d4);
    }
    .a:hover::before {
      inset: -3px;
    }
    .a:hover::after {
      inset: -3px;
      filter: blur(10px);
    }
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: #0e1538;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9em;
      text-transform: uppercase;
      align-items: center;
      letter-spacing: 2px;
      color: white;
      border: 1px solid #040a29;
      overflow: hidden;
    }
    span::before {
      content: '';
      position: absolute;
      top: 0;
      left: -50%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.075);
      transform: skew(25deg);
    }
  }
`
