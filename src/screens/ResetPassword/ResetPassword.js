import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { ForgotStyle } from './style'

const ResetPassword = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    let body = {
      Email: email,
    }

    axios
      .get(`https://gamelyd.herokuapp.com/users/forgot`, body)
      .then((res) => {
        if (!res.data.hasError) {
          toast.success(res.data.message)
        } else {
          toast.error(res.data.message)
        }
      })
  }

  return (
    <ForgotStyle>
      <div className='left' />

      <div className='right'>
        <div>
          <form className='game-form' onSubmit={handleSubmit}>
            <div className='emp' />
            <div className='wrapper'>
              <h2 style={{ textAlign: 'center' }}>Forgot Password</h2>

              <div className='input-data'>
                <input
                  type='text'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></input>
                <label>Email</label>
                <div className='underline'></div>
              </div>

              <button type='button'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </ForgotStyle>
  )
}

export default ResetPassword
