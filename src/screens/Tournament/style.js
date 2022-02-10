import styled from 'styled-components'

export const Carddiv = styled.div`
/* border: 3px solid green; */
margin: 40px auto;

.card-h4{
    text-align: center;
    color: white;
    font-size: 35px;
    margin: 0;
    padding: 0;
}
.div1{
    /* border: 3px solid blue; */
    display: flex;
    justify-content: center; 
}

.div2{
    /* border: 3px solid red; */
    display: flex;
    justify-content: flex-start;
    padding: 70px 20px;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.div2::-webkit-scrollbar {
  display: none;
}
`