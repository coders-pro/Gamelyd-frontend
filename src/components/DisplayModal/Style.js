import styled from 'styled-components'

export const Div = styled.div`
  /* border: 3px solid red; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .sect {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      position: relative;
      min-width: 350px;
      min-height: 400px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      z-index: 10;
      padding: 20px;
      backdrop-filter: blur(25px);
      h3 {
        color: white;
        margin-bottom: 20px;
      }
      .list {
        position: relative;
        display: flex;
        padding: 10px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin: 10px 0;
        cursor: pointer;
        transition: 0.5s;
        overflow: hidden;
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
          h4 {
            line-height: 1.2rem;
            font-weight: 600;
            transition: 0.5s;
            padding: 0;
            margin: 0;
          }
          p {
            font-size: 0.75rem;
            transition: 0.5s;
            padding: 0;
            margin: 0;
          }
          .rank {
            position: absolute;
            right: -50px;
            color: #03a9f4;
            transition: 0.5s;
            font-size: 2rem;
            small {
              font-weight: 500;
              opacity: 0.25;
            }
          }
        }
        .imgbx {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 10px;
          overflow: hidden;
          margin-right: 10px;
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .list:hover {
        background: white;
        box-shadow: -15px 30px 50px rgba(0, 0, 0, 0.5);
        transform: scale(1.15) translateX(30px) translateY(-15px);
        z-index: 200;
        .content .rank {
          right: 20px;
        }
        .content p,
        .content h4 {
          color: black;
        }
      }
    }
  }
`
