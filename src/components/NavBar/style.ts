import styled from 'styled-components'

type Nav = {
  transform: string
}

export const NavStyle = styled.div<Nav>`
  scroll-behavior: smooth;
  transition: all ease-in-out;
  .backdrop {
    position: fixed;
    top: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    filter: blur(80px);
    -webkit-filter: (40px);
    z-index: 2;
  }
  .container {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 12vh;
    transition: 1s;
    z-index: 99;
    .logo {
      position: relative;
      display: flex;
      align-items: center;
      left: 1em;
      img {
        left: 2em;
        width: 50px;
      }
    }
    .nav_items {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 2em;
      .discord {
        button {
          height: 50px;
          width: 200px;
          background: #232323;
          border: 1px solid #fff;
          color: white;
          cursor: pointer;
        }
      }
      .single_item {
        padding-bottom: 6px;
        margin-left: 1em;
        margin-right: 1em;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        :hover {
          span {
            position: absolute;
            width: 30px;
            border-bottom: 1.5px solid #c0262d;
            padding-bottom: 1.5rem;
            z-index: 0;
            margin: auto;
          }
        }
      }
      .when_active {
        padding-bottom: 6px;
        padding-bottom: 6px;
        margin-left: 1em;
        margin-right: 1em;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        span {
          position: absolute;
          width: 30px;
          padding-bottom: 1.5rem;
          z-index: 0;
          margin: auto;
        }
      }
      a {
        color: white;
        text-decoration: none;
      }
      @media (max-width: 999px) {
        display: none;
      }
    }
    .nav_items_mobile {
      display: none;
      @media (max-width: 999px) {
        .discord {
          display: flex;
          justify-content: center;
          width: 100%;
          button {
            height: 50px;
            width: 200px;
            background: #15202b;
            border: 1px solid #fff;
            color: white;
            cursor: pointer;
            margin: 15px 0;
          }
        }
        body {
          overflow-x: hidden;
        }
        position: absolute;
        right: 0px;
        top: 0;
        height: 100vh;
        margin-right: 0em;
        background: #15202b;
        // background: #0d0d0d;
        display: flex;
        flex-direction: column;
        width: 65%;
        justify-content: center;
        opacity: 1;
        transform: ${(props) => props.transform};
        transition: 0.3s;
        .single_item {
          opacity: 1;
          margin: 1.5em 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .when_active_mobile {
          span {
            position: absolute;
            width: 60px;
            border-bottom: 1.5px solid #ff0099;
            padding-bottom: 1.5rem;
            z-index: 100;
            margin: auto;
          }
        }
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
    @media (max-width: 999px) {
      height: 8vh;
    }
  }
`

type Button = {
  line1: string
  line2: string
  line3: string
}

export const ButtonStyle = styled.div<Button>`
  position: fixed;
  top: 11px;
  right: 30px;
  width: 35px;
  display: none;
  cursor: pointer;
  z-index: 99;
  .line1 {
    background: #fff;
    width: 35px;
    height: 2px;
    margin: 5px;
    border-radius: 2px;
    transform: ${(props) => props.line1};
    transition: 0.5s;
  }
  .line2 {
    background: #fff;
    width: 25px;
    height: 2px;
    margin: 5px;
    border-radius: 2px;
    opacity: ${(props) => props.line2};
  }
  .line3 {
    background: #fff;
    width: 35px;
    height: 2px;
    margin: 5px;
    border-radius: 2px;
    transform: ${(props) => props.line3};
    transition: 0.5s;
  }
  @media (max-width: 999px) {
    display: block;
  }
`
