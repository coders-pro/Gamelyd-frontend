import styled from 'styled-components'

export const Style = styled.div`
  margin: auto;
  margin-top: 6em;
  margin-bottom: 6em;
  position: relative;
  width: 100%;
  height: 400px;
  background: #ffffff08;
  h1 {
    position: absolute;
    margin-left: 1em;
    top: -65px;
    margin-bottom: 1em;
    margin-top: 0;
    color: rgba(255, 0, 0, 0.25);
    letter-spacing: 3px;
  }
  .prev_button {
    position: absolute;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    left: 15px;
    top: 50%;
    outline: none;
    cursor: pointer;
    z-index: 90;
  }
  .next_button {
    position: absolute;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    right: 15px;
    top: 50%;
    outline: none;
    cursor: pointer;
    z-index: 90;
  }
  .cards-slider {
    position: relative;
    max-width: 350px;
    margin: 0 auto;

    ::after {
      content: '';
      display: block;
      width: 100%;
      height: 400px;
      outline: 5px solid #ffffff50;
      position: absolute;
      top: 0;
      left: 0;
    }
    .cards-slider-wrapper {
      position: absolute;
      width: 100%;
      display: flex;
      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
  }
  .cards-slider.active-slide-${(props) => props.num}
    #card-${(props) => props.num} {
    transform: scale(1);
    opacity: 1;
  }
`

export const StyleCard = styled.div`
  .card {
    color: red;
    margin: auto;
    width: 350px;
    height: 400px;
    flex: 1;
    opacity: 0.5;
    transform: scale(0.7);
    transition: opacity 0.3s linear,
      transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);

    img {
      width: 350px;
      height: 400px;
      margin: auto;
      object-position: 50% 15%;
      object-fit: cover;
      margin: auto;
    }
  }
`
