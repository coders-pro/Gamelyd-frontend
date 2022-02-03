import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './style.css'
import { login, register } from '../../actions/userActions'
import { RootState } from '../../store.js'
import { Userstate } from '../../reducers/userReducer.js'
import { SignUpStyle } from './style.js'

const Signup = () => {
  const [flip, setFlip] = useState(false)

  // login state
  const [emails, setEmails] = useState('')
  const [password, setPassword] = useState('')

  // signup state
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const flipMode = () => {
    setFlip(!flip)
  }

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector<RootState, Userstate>(
    (state) => state.userLogin
  )

  const userRegister = useSelector<RootState, Userstate>(
    (state) => state.userRegister
  )

  const { loading } = userLogin

  // const registerLoading = userRegister.loading
  const registerError = userRegister.error

  const loginHandler = (e: any) => {
    e.preventDefault()

    dispatch(login(emails, password))

    navigate('/')
  }

  const signupHandler = (e: any) => {
    e.preventDefault()

    dispatch(
      register(
        signupEmail,
        signupPassword,
        username,
        firstName,
        lastName,
        phone
      )
    )

    if (!registerError) {
      console.log(registerError)
    }
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          ></input>

                          <label>Username</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='text'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          ></input>

                          <label>First Name</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          ></input>

                          <label>Last Name</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='email'
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                            required
                          ></input>

                          <label>Email</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          ></input>

                          <label>Phone Number</label>
                          <div className='underline'></div>
                        </div>

                        <div className='input-data'>
                          <input
                            type='password'
                            required
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
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
                            value={emails}
                            onChange={(e) => setEmails(e.target.value)}
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
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        ></input>

                        <label>Username</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input
                          type='text'
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        ></input>

                        <label>First Name</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input
                          type='text'
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        ></input>

                        <label>Last Name</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input
                          type='text'
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          required
                        ></input>

                        <label>Email</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input
                          type='text'
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        ></input>

                        <label>Phone Number</label>
                        <div className='underline'></div>
                      </div>

                      <div className='input-data'>
                        <input
                          type='password'
                          required
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
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
                          value={emails}
                          onChange={(e) => setEmails(e.target.value)}
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
