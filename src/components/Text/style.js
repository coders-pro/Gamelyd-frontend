import styled from 'styled-components'

export const TextStyle = styled.div`
  background: rgba(17, 17, 17, 0.644);
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 32px;
  height: auto;
  padding: 20px 0;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);

  @media (max-width: 700px) {
    font-weight: 300;
    font-size: 26px;
    min-height: 85px;
  }

  div {
    display: inline-block;
    overflow: hidden;
    white-space: no-wrap;
  }

  div:first-of-type {
    animation: showup 7s infinite;
  }

  div:last-of-type {
    width: 0px;
    animation: reveal 7s infinite;
  }

  div:last-of-type span {
    margin-left: -355px;
    animation: slidein 7s infinite;
  }

  @keyframes showup {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes slidein {
    0% {
      margin-left: -800px;
    }
    20% {
      margin-left: -800px;
    }
    35% {
      margin-left: 0px;
    }
    100% {
      margin-left: 0px;
    }
  }

  @keyframes reveal {
    0% {
      opacity: 0;
      width: 0px;
    }
    20% {
      opacity: 1;
      width: 0px;
    }
    30% {
      width: 355px;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      width: 355px;
    }
  }
`
