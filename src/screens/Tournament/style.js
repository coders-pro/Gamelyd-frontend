import styled from 'styled-components'

export const Carddiv = styled.div`
  border: 3px solid green;
  margin: 40px auto;
  position: relative;

  .title {
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 50px;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-style: italic;
    color: #b8bcbf;
  }
  .MdChevronLeft {
    background: white;
    border-radius: 100%;
    position: absolute;
    left: 0;
    bottom: 42%;
    opacity: 0.5;
    box-shadow: 2px 2px 2px 2px rgba(0 0 0 / 12%);
    z-index: 1;
    color: black;
  }
  .MdChevronLeft:hover {
    opacity: 1;
    cursor: pointer;
  }
  .MdChevronRight {
    background: white;
    border-radius: 100%;
    position: absolute;
    right: 0;
    top: 50%;
    opacity: 0.5;
    box-shadow: 2px 2px 2px 2px rgba(0 0 0 / 12%);
    color: black;
  }
  .MdChevronRight:hover {
    opacity: 1;
    cursor: pointer;
  }
  .div1 {
    /* border: 3px solid blue; */
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;

    .div2 {
      /* border: 3px solid red; */
      display: flex;
      justify-content: flex-start;
      padding: 70px 20px;
      overflow-y: hidden;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      scroll-behavior: smooth;
    }
    .div2::-webkit-scrollbar {
      display: none;
    }
  }

  .container {
    /* border: 3px solid orange; */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;

    a {
      position: relative;
      width: 160px;
      height: 60px;
      display: inline-block;
      background: white;
      margin: 20px;
    }
    a::before,
    a::after {
      content: '';
      position: absolute;
      inset: 0;
      background: red;
      transition: 0.5s;
    }
    a:nth-child(1):before,
    a:nth-child(1):after {
      background: linear-gradient(45deg, #00ccff, #0e1538, #d400d4);
    }
    a:hover::before {
      inset: -3px;
    }
    a:hover::after {
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
