import styled from "styled-components";

export const SignupFormStyle = styled.div`
  .character {
    text-align: right;
  }
  margin: 0;
  padding: 10px 20px;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.8);*/
    -webkit-border-radius: 10px;
    background-color: #fff;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgb(11, 192, 180);
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background-color: linear-gradient(
      273deg,
      rgba(197, 198, 199, 1) 0%,
      rgba(102, 252, 241, 1) 25%,
      rgba(31, 40, 51, 1) 100%
    );
  }

  @media (max-width: 990px) {
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .desktop {
    margin: 0;
    padding: 0;
    @media (max-width: 990px) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media (max-width: 990px) {
      display: block;
    }
  }
`;
