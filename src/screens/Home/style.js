import styled from 'styled-components'

export const HomeStyle = styled.div`
  color: white;
  margin: 0px auto 0 auto;

  .text-left {
    width: 90%;
    display: flex;
    margin: 30px auto;

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

  .text-right {
    width: 90%;
    display: flex;
    margin: 30px auto;

    @media (max-width: 850px) {
      flex-direction: column-reverse;
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

    .image {
      width: 50%;
      @media (max-width: 850px) {
        margin: 50px 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
      @media (max-width: 850px) {
        width: 100%;
      }
    }
  }
`
