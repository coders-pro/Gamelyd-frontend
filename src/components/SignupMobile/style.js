import styled from 'styled-components'

export const SignUpStyle = styled.div`
  .mobile-body {
    display: none;
    @media (max-width: 990px) {
      overflow: hidden;
      display: block;
      height: 550px;
      max-width: 400px;
      margin: auto;

      @media (max-width: 500px) {
        max-width: 350px;
      }

      .blue {
        background: rgb(11, 192, 180);
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;

        .signup {
          margin: 20px 0;
          h2 {
            color: aliceblue;
            font-size: 1.2em;
            font-weight: 500;
            margin-bottom: 10px;
            text-align: center;
          }

          button {
            color: white;
            cursor: pointer;
            padding: 10px 0;
            background: rgb(11, 192, 180);
            font-size: 15px;
            font-weight: 500;
            border: none;
            display: flex;
            justify-content: center;
            width: 140px;
            margin: auto;
          }
        }
      }

      .white {
        position: absolute;
        top: 50px;
        background: #1f2833;
        height: 400px;
        max-width: 400px;
        transition: 0.9s ease-in-out;
        padding-top: 10px;
        //   overflow: hidden;

        @media (max-width: 500px) {
          max-width: 350px;
        }

        form {
          display: flex;
          flex-direction: column;
          max-height: 350px;
          overflow-y: scroll;

          ::-webkit-scrollbar {
            width: 2px;
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

          h2 {
            margin: 3px 0;
            text-align: center;
            font-weight: 500;
          }

          button {
            padding: 8px 30px;
            margin: auto;
            display: flex;
            justify-content: center;
            background: rgb(11, 192, 180);
            color: white;
            border: none;
            cursor: pointer;
          }

          .inpu {
            width: 100%;
            padding: 0;
            margin: 0;

            .wrapper {
              width: 80%;
              margin: auto;
            }

            .wrapper .input-data {
              height: 30px;
              width: 100%;
              position: relative;
              margin: 20px 0;
            }
            .wrapper .input-data input {
              height: 100%;
              width: 100%;
              border: none;
              outline: none;
              font-size: 17px;
              background: transparent;
              color: rgb(11, 192, 180);
            }
            .input-data input:valid ~ label {
              transform: translateY(-18px);
              font-size: 16px;
              font-weight: 500;
              color: rgb(11, 192, 180);
            }
            .wrapper .input-data label {
              position: absolute;
              bottom: 2px;
              left: 0;
              color: rgba(197, 198, 199, 1);
              pointer-events: none;
            }
            .underline {
              margin: -4px;
            }
            .wrapper .input-data .underline {
              position: absolute;
              height: 2px;
              width: 100%;
              bottom: 0;
              background: linear-gradient(
                273deg,
                rgba(197, 198, 199, 1) 0%,
                rgba(102, 252, 241, 1) 25%,
                rgba(31, 40, 51, 1) 100%
              );
            }

            .input-data .underline:before {
              position: absolute;
              content: '';
              height: 100%;
              width: 100%;
              background: rgb(11, 192, 180);
              transform: scaleX(0);
              transform-origin: center;
              transition: transform 0.3s ease;
            }

            .input-data input:focus ~ .underline:before,
            .input-data input:valid ~ .underline:before {
              transform: scaleX(1);
            }
          }
          @media (max-width: 500px) {
            max-width: 350px;
          }
        }

        .mobactive {
          top: 200px;
        }
        .bx {
          width: 400px;
        }
      }
    }
  }
`
