import { SignUpStyle } from './style.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../actions/userActions'
import { RootState } from '../../store.js'
import { Userstate } from '../../reducers/userReducer.js'

const Signup = () => {
  const [flip, setFlip] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const flipMode = () => {
    setFlip(!flip)
  }

  const dispatch = useDispatch()

  const userLogin = useSelector<RootState, Userstate>(
    (state) => state.userLogin
  )

  const { loading, error } = userLogin

  const loginHandler = (e: any) => {
    e.preventDefault()

    dispatch(login(email, password))

    console.log(loading, error)
  }

  const signupHandler = (e: any) => {
    e.preventDefault()
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
                          <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          ></input>

                          <label>Userame</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          ></input>

                          <label>First Name</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          ></input>

                          <label>Last Name</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          ></input>

                          <label>Email</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          ></input>

                          <label>Phone Number</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='text'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>

                          <label>Password</label>
                          <div className='underline'></div>
                        </div>

                        <button
                          className='submit'
                          type='submit'
                          onClick={(e) => loginHandler(e)}
                        >
                          Sign up
                        </button>
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
                          <input
                            type='text'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>

                          <label>Email</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          ></input>

                          <label>Password</label>
                          <div className='underline'></div>
                        </div>

                        <button
                          className='submit'
                          type='submit'
                          onClick={(e) => loginHandler(e)}
                        >
                          Sign up
                        </button>
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
                  <h3>Signup </h3>
                  <div className='inpu'>
                    <div className='wrapper'>
                      <div className='input-data'>
                        <input
                          type='text'
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>

                        <label>Userame</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input
                          type='text'
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>

                        <label>First Name</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input
                          type='text'
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>

                        <label>Last Name</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input
                          type='text'
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>

                        <label>Email</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input
                          type='text'
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>

                        <label>Phone Number</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input
                          type='text'
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>

                        <label>Password</label>
                        <div className='underline'></div>
                      </div>
                    </div>
                  </div>
                  <button
                    className='submit'
                    type='submit'
                    onClick={(e) => signupHandler(e)}
                  >
                    Sign up
                  </button>
                </form>
              </div>
            ) : (
              <div className='form signinForm'>
                <form>
                  <h3>Login </h3>
                  <div className='inpu'>
                    <div className='wrapper'>
                      <div className='input-data'>
                        <input
                          type='text'
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>

                        <label>Email</label>
                        <div className='underline'></div>
                      </div>
                      <div className='input-data'>
                        <input
                          type='text'
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        ></input>

                        <label>Password</label>
                        <div className='underline'></div>
                      </div>
                    </div>
                  </div>
                  <button
                    className='submit'
                    type='submit'
                    onClick={(e) => loginHandler(e)}
                  >
                    {loading ? 'Loading' : 'Login'}
                  </button>
                  <Link to='/' className='forgotten'>
                    forgotten password
                  </Link>
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

