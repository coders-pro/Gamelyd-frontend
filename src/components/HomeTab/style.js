import styled from 'styled-components'

export const Style = styled.div`
  .free {
    width: 90%;
    display: flex;
    margin: 70px auto;

    @media (max-width: 850px) {
      flex-direction: column;
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
    .top {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 20px;
        margin-right: -70px;
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
    box-shadow: rgba(255, 255, 255, 0.652) 1.95px 1.95px 2.6px;
    margin: 0 10px;
  }
 .p1{
     font-size: 22px;
  }
 .p2{
     font-size: 16px;
  }
    

  
  .both {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }
  }
  .about {
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #B8BCBF;
      .title {
          font-size: 50px;
          font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-style: italic;
        color: #B8BCBF;
      }
      .sub {
          font-size: 22px;
          padding: 20px 0
      }
      .message {
          line-height: 30px;
          color: #B8BCBF;
      }
      .head {
        font-size: 20px;
        color: #0DA099;
        font-weight: 600;
      }
`
