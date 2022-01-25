import styled from 'styled-components'

export const ModalStyle = styled.div`
  overflow: hidden;
  .modal-backdrop {
    position: fixed;
    height: 100vh;
    width: 1000vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
  }

  .modal-content-wrapper {
    position: fixed;
    width: 65vw;
    height: 400px;
    background: white;
    margin: auto;
    colour: black;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 50px;
    overflow: hidden;
    z-index: 1000;
    background-color: #15202b;

    @media (max-with: 700px) {
      width: 100vw;
    }
  }

  .modal-content {
    color: black;
    overflow: hidden;
  }
`
