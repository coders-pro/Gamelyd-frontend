import { InputStyle } from './style';


const InputBox = () => {
    return (

        <InputStyle>
  <div className="wrapper">
         <div className="input-data">
            <input type="text" required ></input>
           
            <label>Name</label> 
            <div className="underline"></div>
         </div>
      </div>
        </InputStyle>
      


        )
    }
    
    export default InputBox