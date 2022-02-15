import styled from 'styled-components'

export const Div = styled.div`
  margin: 5%;
  .filter {
    button {
      margin-left: 0.9rem;
      min-width: 5rem;
      padding: 0.5rem 1rem;
      border: none;
      background: white;
      color: rgba(65, 98, 168);
      border-radius: 1rem;
      border: 2px solid rgb(28, 36, 53);
      font-weight: bold;
      cursor: pointer;
    }
    button.active {
      background: rgba(65, 98, 168);
      color: white;
    }
  }
  .popular {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  }
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1rem;
  }
`
