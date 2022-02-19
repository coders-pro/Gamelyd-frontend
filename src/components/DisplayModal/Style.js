import styled from "styled-components";

export const Div = styled.div`
  /* border: 3px solid red; */
  position: fixed;
  top: 100px;
  left: -35px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 470px;
  height: 640px;
  z-index: 100;
  .bx {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    border: 1px solid #0bc0b4;
    outline: none;
    /* height: 25px; */
    width: 150px;
    border-radius: 5px;
    padding: 5px 10px;
  }
  .join {
    background-color: #0bc0b4;
    padding: 5px 10px;
    margin-left: 10px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .sect {
    position: relative;
    overflow: hidden;
    width: 500px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    .box::-webkit-scrollbar {
      width: 11px;
    }
    .box {
      scrollbar-width: thin;
      scrollbar-color: #0bc0b4 #0bc0b4;
    }
    .box::-webkit-scrollbar-track {
      background: #0bc0b4;
    }
    .box::-webkit-scrollbar-thumb {
      background-color: #15202b;
      border-radius: 6px;
      border: 3px solid #0bc0b4;
    }
    .box {
      position: relative;
      min-width: 350px;
      min-height: 400px;
      height: 500px;
      background-color: #15202b;
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      z-index: 101;
      padding: 20px;
      overflow-x: hidden;
      overflow-y: auto;
      padding-right: 60px;
      .sele {
        border: 1px solid #0bc0b4;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 10px;
      }
      .it {
        margin: 5px;
      }
      .box::-webkit-scrollbar {
        width: 11px;
      }
      .box {
        scrollbar-width: thin;
        scrollbar-color: #0bc0b4 #0bc0b4;
      }
      .box::-webkit-scrollbar-track {
        background: #0bc0b4;
      }
      .box::-webkit-scrollbar-thumb {
        background-color: #15202b;
        border-radius: 6px;
        border: 3px solid #0bc0b4;
      }
      backdrop-filter: blur(100px);
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
        .imgbx {
          color: #15202b;
        }
        .content .rank {
          right: 20px;
        }
        .content p,
        .content h4 {
          color: #15202b;
        }
      }
    }
  }
  .imgbx {
    color: white;
  }
`;
