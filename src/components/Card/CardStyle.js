import styled from 'styled-components'

export const CardStyle = styled.div`
  font-family: sans-serif;
  color: white;
  /* overflow: hidden; */
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
  img {
    max-width: 100%;
  }

  .btn {
    cursor: pointer;
    border: 0;
    background: rgb(11, 192, 180);
    border-radius: 100vw;
    color: white;
    font-weight: bold;
    padding: 0.5em 1.5em;
  }

  .rank {
    position: absolute;
    top: 0;
    right: 1em;
    z-index: 98;
    font-weight: bold;
    font-size: 1.125rem;
    background: rgba(0, 0, 0, 0.65);
    padding: 0.5em 0.5em 0.5em;
    clip-path: polygon(100% 0, 100% 100%, 50% 85%, 0 100%, 0 0);
    transition: transform 250ms ease-in-out;
  }

  .game {
    position: relative;
    width: 12.5rem;
    cursor: pointer;
    z-index: 0;
    margin: 0 40px;
    /* border: 1px solid blue; */

    .front {
      transition: 250ms;
      .thumbnail {
        /* z-index: -1; */
        width: 200px;
        height: 200px;
        border-radius: 0.5rem;
        object-fit: cover;
      }
      .streamers img {
        border: 2px solid #15202b;

        &:nth-of-type(1) {
          transform: translateX(50%);
          z-index: 1;
        }
        &:nth-of-type(2) {
          transform: translateX(25%);
        }
      }
      .name {
        margin: 0.75em 0;
      }
      .stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  .streamers {
    display: flex;
    text-align: center;
    img {
      width: 2em;
      height: 2em;
      border-radius: 50%;
    }
  }

  .back {
    opacity: 0;
    position: absolute;
    top: 55%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    transform: translateY(35%);

    .streaming-info {
      columns: 2;
      column-rule: 1px solid rgba(255, 255, 255, 0.25);
    }
    .game-stat {
      font-size: 1.125rem;
      text-align: center;

      .span {
        font-size: 0.85rem;
        display: block;
      }
    }
  }

  .background {
    background: #232323;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transform: scale(0.5);
    border-radius: 0.5rem;
    opacity: 0;
  }

  .game:hover {
    .rank {
      transform: translate(150%, -61%);
    }
    .front {
      transform: translateY(-30%) scale(0.8);
      .name {
        animation: gameName 250ms forwards;
      }

      .stats {
        opacity: 0;
      }
    }

    .back {
      opacity: 1;
      transform: translateY(0);
      transition: transform 250ms, opacity 150ms linear;

      .streamers {
        width: 100%;
        justify-content: space-between;
      }

      .streamer {
        font-size: 0.9rem;
      }

      .name {
        font-weight: bold;
      }
    }

    .background {
      cursor: pointer;
      transition: transform 200ms ease-in-out, opacity 100ms linear;
      opacity: 1;
      transform: scale(1.35, 1.3) translateY(5%);
    }
  }

  @keyframes gameName {
    0% {
      text-align: left;
      opacity: 1;
    }
    20% {
      text-align: left;
      opacity: 0;
    }
    50% {
      text-align: center;
      opacity: 0;
      transform: scale(1.2);
    }
    100% {
      text-align: center;
      opacity: 1;
      transform: scale(1.2);
    }
  }
`
