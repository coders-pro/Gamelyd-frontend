import { SignUpStyle } from './style.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
  const [flip, setFlip] = useState(false)

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
              <button
                className='signupBtn'
                type='button'
                onClick={() => setFlip(!flip)}
              >
                Sign up
              </button>
            </div>
          </div>

          {flip === false ? (
            <div className='formBx'>
              <div className='form signinForm'>
                <form>
                  <h3>Signin </h3>
                  <input type='text' placeholder='Username'></input>
                  <input type='password' placeholder='Password'></input>
                  <input
                    className='submit'
                    type='submit'
                    placeholder='Login'
                  ></input>
                  <br></br>
                  <Link to='/' className='forgotten'>
                    forgotten password
                  </Link>
                </form>
              </div>
            </div>
          ) : (
            <div className='formBx'>
              <div className='form signinForm'>
                <form>
                  <h3>Signup </h3>
                  <input type='text' placeholder='Username'></input>
                  <input type='password' placeholder='Password'></input>
                  <input
                    className='submit'
                    type='submit'
                    placeholder='Login'
                  ></input>
                  <br></br>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </SignUpStyle>
  )
}

export default Signup
