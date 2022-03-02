import style from "styled-components";

export const SignUpStyle = style.div`
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 background: url('/images/soldier7.png');
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
    margin: 20px 200px;
    position: relative;


    .containers {
        position: relative;
        width: 1300px;
        height: 500px;
        margin: 20px;
        background-color: rgb(11, 192, 180);
        top: -100px;
        border-radius: 2%;

      }
      
      .blueBg {
        position: absolute;
        top: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 420px;
        background: rgb(11, 192, 180);
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
        background-color: #1f2833;
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
        background-color: #1f2833;
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
        text-align: center;
      }


      .submit {
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
          width: 100%; 
        }
      
        .wrapper .input-data {
          height: 40px;
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
          margin-top: 7px;
        }
        .input-data input:valid ~ label {
          transform: translateY(-24px);
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
    @media(max-width: 990px) {
        display: none;
    }
  }


// Mobile style
  
  .flex {
    height: 100px;
}

.character {
  margin: 4px 0;
  color: green;
}
`;
