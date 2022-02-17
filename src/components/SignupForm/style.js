import styled from 'styled-components'

export const SignupFormStyle = styled.div`
  margin: 0;
  padding: 0;

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
`
