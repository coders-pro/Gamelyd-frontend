import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

import './style.css'
import { login, register } from '../../actions/userActions'
import { RootState } from '../../store.js'
import { Userstate } from '../../reducers/userReducer.js'
import { SignUpStyle } from './style.js'
import ButtonLoader from '../../components/ButtonLoader/ButtonLoader'
import SignupMobile from '../../components/SignupMobile/SignupMobile'

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

  const location = useLocation()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userLogin = useSelector<RootState, Userstate>(
    (state) => state.userLogin
  )

  const userRegister = useSelector<RootState, Userstate>(
    (state) => state.userRegister
  )

  const { loading, error, userInfo } = userLogin

  const registerLoading = userRegister.loading
  const registerError = userRegister.error
  const info = userRegister.userInfo

  useEffect(() => {
    if (userInfo || info) {
      navigate(redirect)
    }
  }, [userInfo, navigate, redirect, info])

  const loginHandler = (e: any) => {
    e.preventDefault()

    dispatch(login(emails, password))
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
  }

  return (
    <SignUpStyle>
      <div className='flex'></div>

      <SignupMobile />

      {loading && <ButtonLoader />}
      {registerLoading && <ButtonLoader />}
      {error && 'error'}
      {registerError && 'error'}
      <div className='body'>
        <div className='containers'>
          <div className='blueBg'>
            <div className='box signin'>
              <h2>Already have an account</h2>
              <button
                onClick={flipMode}
                className='signinbtn'
                style={{ background: 'rgb(11, 192, 180)', color: 'white' }}
              >
                Sign In
              </button>
            </div>

            <div className='box signup'>
              <h2>Dont have an account</h2>
              <button
                onClick={flipMode}
                className='signinbtn'
                style={{ background: 'rgb(11, 192, 180)', color: 'white' }}
              >
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
                    Signup
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
                    Login{' '}
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
