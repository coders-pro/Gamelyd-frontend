import styled from 'styled-components'

export const Carddiv = styled.div`
  /* border: 3px solid green; */
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
`
