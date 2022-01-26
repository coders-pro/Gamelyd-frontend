
import { SignUpStyle } from './style.js'
import { Link } from 'react-router-dom'

const Signup = () => {


         return (
            <SignUpStyle>
                <div className='body'>
                <div className='container'>
                <div className='firstbg'>
                    
                <div className='box signin'>
                    
                    <h2> Already have account ??</h2>
                    <button className='signinBtn'>Sign in</button>
                </div>

                <div className='box signup'>
                    
                    <h2> Don't have account ??</h2>
                    <button className='signupBtn' type="button">Sign up</button>
                </div> 
                 
                </div>
                <div className='formBx'>
                    <div className= 'form signinForm'>
                        <form>
                            <h3>Signin </h3>
                        <input type= 'text'  placeholder='Username'></input>
                        <input type= 'password'  placeholder='Password'></input>
                        <input className='submit' type= 'submit'  placeholder='Login'></input><br></br>
                        <Link to = '/fogot:id' className='forgotten'> forgotten password</Link>

                        </form>
                        
                    </div>
                    
                    </div>
        
                    
                </div>
 
                </div>
              
              
            </SignUpStyle>
          );
    }
  


export default Signup
