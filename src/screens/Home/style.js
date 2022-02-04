import styled from 'styled-components'

export const HomeStyle = styled.div`
  color: white;
  margin: 0px auto 0 auto;

  .imagerotate {
    width: 100%;
    margin: 80px 0;
    @media (max-width: 850px) {
      width: 90%;
    }
  }

  .battle {
    width: 90%;
    display: flex;
    margin: 70px auto;

    @media (max-width: 850px) {
      flex-direction: column;
    }

    .image {
      width: 50%;
      background: url('images/battleRolyal.jpg');
      background-position: top; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
      height: 400px;
      @media (max-width: 850px) {
        margin: 20px 0;
      }
      @media (max-width: 850px) {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }

    .text {
      width: 50%;

      h2 {
        text-align: center;
      }

      p {
        width: 90%;
        margin: auto;

        @media (max-width: 850px) {
          width: 100%;
        }
      }
      @media (max-width: 850px) {
        width: 100%;
      }
    }
  }

  .paid {
    width: 90%;
    display: flex;
    margin: 70px auto;

    @media (max-width: 850px) {
      flex-direction: column;
    }

    .image {
      width: 50%;
      background: url('images/fortnight2.png');
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
      height: 400px;
      @media (max-width: 850px) {
        margin: 20px 0;
      }
      @media (max-width: 850px) {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }

    .text {
      width: 50%;

      h2 {
        text-align: center;
      }

      p {
        width: 90%;
        margin: auto;

        @media (max-width: 850px) {
          width: 100%;
        }
      }
      @media (max-width: 850px) {
        width: 100%;
      }
    }
  }

  .free {
    width: 90%;
    display: flex;
    margin: 70px auto;

    @media (max-width: 850px) {
      flex-direction: column;
    }

    .image {
      width: 50%;
      background: url('images/free.jpg');
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
      height: 400px;
      @media (max-width: 850px) {
        margin: 20px 0;
      }
      @media (max-width: 850px) {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }

    .text {
      width: 50%;

      h2 {
        text-align: center;
      }

      p {
        width: 90%;
        margin: auto;

        @media (max-width: 850px) {
          width: 100%;
        }
      }
      @media (max-width: 850px) {
        width: 100%;
      }
    }
  }

  .multiplayer {
    width: 90%;
    display: flex;
    margin: 70px auto;

    @media (max-width: 850px) {
      flex-direction: column-reverse;
    }

    .text {
      width: 50%;
      @media (max-width: 850px) {
        width: 100%;
      }
      h2 {
        text-align: center;
      }

      p {
        width: 90%;
        margin: auto;
        @media (max-width: 850px) {
          width: 100%;
        }
      }
    }

    .image {
      width: 50%;
      background: url('images/multiplayer.jpg');
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
      height: 400px;
      @media (max-width: 850px) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px 0;
      }
    }
  }

  .sponsored {
    width: 90%;
    display: flex;
    margin: 70px auto;

    @media (max-width: 850px) {
      flex-direction: column-reverse;
    }

    .text {
      width: 50%;
      @media (max-width: 850px) {
        width: 100%;
      }
      h2 {
        text-align: center;
      }

      p {
        width: 90%;
        margin: auto;
        @media (max-width: 850px) {
          width: 100%;
        }
      }
    }

    .image {
      width: 50%;
      background: url('images/fifa2.jpg');
      background-position: top; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
      height: 400px;
      @media (max-width: 850px) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px 0;
      }
    }
  }
  margin: 0;
  padding: 40px 0;
  color: white;

  .flex-container {
    display: none;
    justify-content: space-between;
    @media (min-width: 999px) {
      display: flex; 
     
  
    }
    padding: 0px;
    margin-left: -10px;
    text-align: left;

   
  }
  .box{
    
    width: 18rem;
    height: 6rem;
    background-color:  rgba(31,40,51,1);
    text-align: left;
    border-radius: 3%; 
    padding-top: 15px;
    padding-left: 10px;
    box-shadow: rgba(255, 255, 255, 0.652); 1.95px 1.95px 2.6px;

  }
 .p1{
     font-size: 22px;
  }
 .p2{
     font-size: 16px;
  }
    

  .flex-containerphone {
    
    @media (min-width: 999px) {
     
      display: none;
      justify-content: space-between;
  
    }
    padding: 0px;
    margin-top: -130px;
    margin-bottom: 90px;
    text-align: left;

   
  }

`
