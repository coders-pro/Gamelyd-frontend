import { SignUpStyle } from './style.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './style.css'

const Signup = () => {
  const [flip, setFlip] = useState(false)
  const flipMode = () => {
    setFlip(!flip)
  }
  return (
    <SignUpStyle>
      <div className='flex'></div>
      <div className='mobile-body'>
        <div className='blue'>
          <div className='signup'>
            <h2>Already have an account?</h2>
            <button onClick={flipMode} className='signinbtn'>
              Sign In
            </button>
          </div>

          <div className='signup'>
            <h2>Dont have an account?</h2>
            <button onClick={flipMode} className='signinbtn'>
              Sign Up
            </button>
          </div>
        </div>

        <div className='white'>
          <div className={`white ${flip ? 'mobactive' : ''}`}>
            {flip ? (
              <div className='signinForm'>
                <div className='bx'>
                  <form>
                    <h2>Signup</h2>
                    <div className='inpu'>
                      <div className='wrapper'>
                        <div className='input-data'>
                          <input type='text' required></input>

                          <label>Userame</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input type='text' required></input>

                          <label>First Name</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input type='text' required></input>

                          <label>Last Name</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input type='text' required></input>

                          <label>Email</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input type='text' required></input>

                          <label>Phone Number</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input type='text' required></input>

                          <label>Password</label>
                          <div className='underline'></div>
                        </div>

                        <button className='submit'>Sign up</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className='signinForm'>
                <div className='bx'>
                  <form>
                    <h2>Login</h2>
                    <div className='inpu'>
                      <div className='wrapper'>
                        <div className='input-data'>
                          <input type='text' required></input>

                          <label>Email</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input type='text' required></input>

                          <label>Password</label>
                          <div className='underline'></div>
                        </div>

                        <button className='submit'>Sign up</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='body'>
        <div className='containers'>
          <div className='blueBg'>
            <div className='box signin'>
              <h2>Already have an account</h2>
              <button onClick={flipMode} className='signinbtn'>
                Sign In
              </button>
            </div>

            <div className='box signup'>
              <h2>Dont have an account</h2>
              <button onClick={flipMode} className='signinbtn'>
                Sign Up
              </button>
            </div>
          </div>

          <div className={`formBx ${flip ? 'active' : ''}`}>
            {flip ? (
              <div className='form signinForm'>
                <form>
                  <h3>Login </h3>
                  <div className='inpu'>
                    <div className='wrapper'>
                      <div className='input-data'>
                        <input type='text' required></input>

                        <label>Email</label>
                        <div className='underline'></div>
                      </div>
                      <div className='input-data'>
                        <input type='text' required></input>

                        <label>Password</label>
                        <div className='underline'></div>
                      </div>
                    </div>
                  </div>
                  <button className='submit'>Login</button>
                  <Link to='/' className='forgotten'>
                    forgotten password
                  </Link>
                </form>
              </div>
            ) : (
              <div className='form signinForm'>
                <form>
                  <h3>Signup </h3>
                  <div className='inpu'>
                    <div className='wrapper'>
                      <div className='input-data'>
                        <input type='text' required></input>

                        <label>Userame</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input type='text' required></input>

                        <label>First Name</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input type='text' required></input>

                        <label>Last Name</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input type='text' required></input>

                        <label>Email</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input type='text' required></input>

                        <label>Phone Number</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input type='text' required></input>

                        <label>Password</label>
                        <div className='underline'></div>
                      </div>
                    </div>
                  </div>
                  <button className='submit'>Sign up</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </SignUpStyle>
  )
}

export default Signup
