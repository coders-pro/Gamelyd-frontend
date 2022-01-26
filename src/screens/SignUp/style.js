import style from 'styled-components'

export const SignUpStyle = style.div`
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
.body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh
    transition: 0.5s;
    margin: 200px;
    

}
.container{
    position: relative;
    width: 800px;
    height: 500px;
    
}
.firstbg{
    position: absolute;
    top: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 420px;
    background: #1F2833; 


}
.firstbg .box{
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column ;
}
.firstbg .box h2{
    color: #c5c6c7;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 10px;

}
.signupBtn{
cursor: pointer;
padding: 10px 20px;
background: #fff;
color: #333;
font-size:  16px;
font-weight:500;
border-width: 2px ;
border-color: red ;

}
.signinBtn{
cursor: pointer;
padding: 10px 20px;
background: #fff;
color: #333;
font-size:  16px;
font-weight:500;
border-width: 2px ;
border-color: red ;

}

.formBx{
    position: absolute;
    border-radius: 2%;
    top: 0;
    left:  0;
    width: 50%;
    height: 100%;
    background: linear-gradient(273deg, rgba(197,198,199,1) 0%, rgba(102,252,241,1) 25%, rgba(31,40,51,1) 100%);;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
     transition: 0.5s ease-in-out;
} 

.formBx.active{
    width: 50%;
}
.formBx .form{
    position: absolute;
    left: 0;
    weidth: 100%;
    padding: 50px;
    transition: 0.5s;

}
.formBx  .active .signinForm{
left: -100%
}

.formBx .form  { 
   
    display: flex;
    flex-direction: column;

  }
  .formBx .form form  h3{ 
   font-size: 1.5em;
   color: #333;
   margin-bottom: 20px;
   fomt-weight: 500;
  }
  .formBx .form form input{
      width: 100%;
      margin-bottom: 20px;
      padding: 10px;
      outline: none;
      font-size: 16px;
      border: 1px solid #C5C6C7;
}
.formBx .form form input[type='submit'] {
    background: #C5C6C7;
    padding: 13px;
    border-radius: 10%;
    color: #45a29e;
    max-width: 100px;
    cursor: pointer;

}

`
