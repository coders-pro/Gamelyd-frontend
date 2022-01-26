import style from 'styled-components'

export const SignUpStyle = style.div`
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 background: url('/images/soldier1.jpg');
 height: 100vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; 


.body {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    transition: 0.5s;
    margin: 0 100px;


    .containers {
        position: relative;
        width: 1300px;
        height: 500px;
        margin: 20px;
        background-color: #1f2833;
        top: -100px;
      }
      
      .blueBg {
        position: absolute;
        top: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 420px;
        background: #1f2833;
      }
      
      .blueBg .box {
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      
      .blueBg .box h2 {
        color: aliceblue;
        font-size: 1.2em;
        font-weight: 500;
        margin-bottom: 10px;
      }
      
      .blueBg .box button {
        color: blacl;
        cursor: pointer;
        padding: 10px 20px;
        background-color: white;
        font-size: 16px;
        font-weight: 500;
        border: none;
      }
      
      .formBx {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: white;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.9s ease-in-out;
        border-radius: 2%;
      }
      
      .active {
        left: 50%;
      }
      
      .formBx .form {
        position: absolute;
        left: 0;
        width: 76%;
        padding: 50px;
        transition: 0.5s;
      }
      .formBx .active .signinForm {
        left: -100%;
      }
      .formBx .form {
        display: flex;
        flex-direction: column;
      }
      .formBx .form form h3 {
        font-size: 1.5em;
        color: #333;
        margin-bottom: 20px;
        font-weight: 500;
      }
      .formBx .form form input {
        width: 80%;
        margin-bottom: 20px;
        padding: 10px;
        outline: none;
        font-size: 16px;
        border: 1px solid #c5c6c7;
      }
      .formBx .form form input[type='submit'] {
        background: #c5c6c7;
        padding: 13px;
        border-radius: 10%;
        color: #45a29e;
        max-width: 100px;
        cursor: pointer;
      }
    @media(max-width: 990px) {
        display: none;
    }
  }
  .flex {
    height: 100px;
}

  .mobile-body {
      display: none;
      @media(max-width: 990px) {
        overflow: hidden;
          display: block;
          height: 550px;
          max-width: 400px;
          margin: auto;

          @media(max-width: 500px) {
            max-width: 350px;
          }

          .blue {
            background: #1f2833;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;

          }

          .white {
              position: absolute;
              top: 50px;
              background: white;
              height: 400px;
              max-width: 400px;
              transition: 0.9s ease-in-out;
            //   overflow: hidden;

            @media(max-width: 500px) {
                max-width: 350px;
              }
              form {
                  display: flex;
                  flex-direction: column;

                  input {
                      width: 100%;
                      @media(max-width: 500px) {
                        max-width: 200px;
                      }
                  }
              }
              @media(max-width: 500px) {
                max-width: 350px;  
              }
            }

            .mobactive {
                top: 200px;

            }
            .bx {
                width: 400px
            }
      }
  }
`
