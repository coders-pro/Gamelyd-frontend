import styled from "styled-components";

export const Style = styled.div`
  .free {
    width: 90%;
    display: flex;
    margin: 70px auto;

    @media (max-width: 1300px) {
      flex-direction: column;
    }

    .text {
      width: 50%;
      @media (max-width: 1300px) {
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
      @media (max-width: 850px) {
        width: 100%;
      }
    }
    .top {
        display: flex;
        flex-direction: row
        background-color: red;
        width: 100%;
        padding: 20px;
        margin: auto;
        @media (max-width: 850px) {
          margin-left: -20px;
      }
      @media (max-width: 550px) {
          margin-left: -40px;
      }
      @media (max-width: 450px) {
          margin-left: -80px;
      }
      @media (max-width: 370px) {
          margin-left: -110px;
      }
        
    }
  }
  
  .box{
    
    width: 200px;
    /* height: 100%; */
    background-color:  rgba(31,40,51,1);
    text-align: left;
    border-radius: 3%; 
    padding-top: 15px;
    padding-bottom: 25px;
    padding-left: 10px;
    box-shadow: rgba(255, 255, 255, 0.652); 1.95px 1.95px 2.6px;
    margin: 0 10px;
    @media (max-width: 850px) {
          width: 120px;
          height: 35px;
      }
  }
 .p1{
     font-size: 22px;
     @media (max-width: 850px) {
          font-size: 16px;
      }
  }
 .p2{
     font-size: 16px;
     @media (max-width: 850px) {
          font-size: 13px;
      }
  }
    

  
  .both {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column
  }
  }
  .about {
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #B8BCBF;
      .title {
          font-size: 50px;
          color: #0DA099;
          font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-style: italic;
      }
      .sub {
          font-size: 22px;
          padding: 20px 0
      }
      .message {
          line-height: 30px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
        align-items: flex-start;
      }
`;
