import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Style } from './style'
import Navbar from '../../components/NavBar/Navbar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import Button from '../../components/Button/InnerButton'

const Profile = () => {
  const [user, setUser] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    }

    axios
      .get(`https://gamelyd.herokuapp.com/users/${id}`, { headers: headers })
      .then((res) => {
        if (!res.data.hasError) {
          setUser(res.data.user)
          console.log(res.data.user)
        } else {
          // setUser([])
        }
      })
  }, [id])

  return (
    <>
      <Navbar message='jh' />
      <Style>
        <div className='top'>
          <div className='pic'>
            <AccountCircleIcon
              style={{ color: 'white' }}
              sx={{ fontSize: 300 }}
            />
          </div>
          <div className='text'>
            <div className='name'>
              <div className='main'>
                <div className='aha'>{user.first_name}</div>
                <div className='user'>@{user.user_name}</div>
                <div className='user'>
                  {' '}
                  <LocationOnIcon sx={{ fontSize: 15 }} /> Nigeria
                </div>
              </div>
              <div className='socials'>
                <TwitterIcon className='soc' />
                <FacebookIcon className='soc' />
                <LinkedInIcon className='soc' />
                <InstagramIcon className='soc' />
              </div>
            </div>
            <div className='buttons'>
              <Button>Deactivate</Button>
              <Button>Edit</Button>
              {/* <Button>Button 1</Button> */}
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='bio'>
            <div className='head'>Details</div>
            <div className='bod'>
              <table>
                <tbody>
                  <tr>
                    <th style={{ padding: '10px', textAlign: 'left' }}>
                      First Name:
                    </th>
                    <td style={{ padding: '10px', textAlign: 'left' }}>
                      {user.first_name}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '10px', textAlign: 'left' }}>
                      Last Name:
                    </th>
                    <td style={{ padding: '10px', textAlign: 'left' }}>
                      {user.last_name}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '10px', textAlign: 'left' }}>
                      Username:
                    </th>
                    <td style={{ padding: '10px', textAlign: 'left' }}>
                      {user.user_name}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '10px', textAlign: 'left' }}>
                      Email:
                    </th>
                    <td style={{ padding: '10px', textAlign: 'left' }}>
                      {user.email}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '10px', textAlign: 'left' }}>
                      Number:
                    </th>
                    <td style={{ padding: '10px', textAlign: 'left' }}>
                      {user.phone}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='det'>
            <div className='head'>Bio</div>
            <div className='bod'>
              <p>{user.token}</p>
            </div>
          </div>
        </div>
      </Style>
    </>
  )
}

export default Profile
