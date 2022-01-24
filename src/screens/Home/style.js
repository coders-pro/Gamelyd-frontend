import styled from 'styled-components'

export const HomeStyle = styled.div`
  color: white;
  margin: 0px auto 0 auto;

  .multiplayer {
    width: 90%;
    display: flex;
    margin: auto;

    @media (max-width: 850px) {
      flex-direction: column;
    }

    .text {
      width: 50%;

      h2 {
        text-align: center;
      }

      p {
        width: 90%;
        margin: auto;

        @media (max-width: 850px) {
          width: 100%;
        }
      }
      @media (max-width: 850px) {
        width: 100%;
      }
    }

    .imagerotate {
      width: 50%;
      @media (max-width: 850px) {
        width: 100%;
      }
    }
  }
`
