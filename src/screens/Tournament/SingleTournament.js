import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Singlediv, Carddiv } from './style'
import Navbar from '../../components/NavBar/Navbar'
import Hero from '../../components/Hero/Hero'
import ImageRotate from '../../components/ImageRotate/ImageRotate'
import Footer from '../../components/Footer/Footer'
import InnerButton from '../../components/Button/InnerButton'

const SingleTournament = () => {
  const [single, setSingle] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    }
    axios
      .get(`https://gamelyd.herokuapp.com/tournament/${id}`, {
        headers: headers,
      })
      .then((res) => {
        // console.log(res.data.tournament)
        setSingle(res.data.tournament)
      })
  }, [id])

  return (
    <div>
      <Navbar message='jh' />
      <Hero
        pic1={'/images/soldier12.png'}
        pic2={'/images/soldier11.png'}
        background={'/images/soldier12.png'}
        message='SINGLE TOURNAMENT'
        time='TOURNAMENT INFO'
      />
      <Singlediv>
        <div className='info-div'>
          <div className='sub-info-div'>
            <div className='bio'>
              <div className='head'>Details</div>
              <div className='bod'>
                <table>
                  <tbody>
                    <tr>
                      <th style={{ padding: '10px', textAlign: 'left' }}>
                        Tournament :
                      </th>
                      <td style={{ padding: '10px', textAlign: 'left' }}>
                        {single.Name}
                      </td>
                    </tr>
                    <tr>
                      <th style={{ padding: '10px', textAlign: 'left' }}>
                        Game Name :
                      </th>
                      <td style={{ padding: '10px', textAlign: 'left' }}>
                        {' '}
                        {single.GameName}
                      </td>
                    </tr>
                    <tr>
                      <th style={{ padding: '10px', textAlign: 'left' }}>
                        Payment Type :
                      </th>
                      <td style={{ padding: '10px', textAlign: 'left' }}>
                        {' '}
                        {single.Payment}
                      </td>
                    </tr>
                    <tr>
                      <th style={{ padding: '10px', textAlign: 'left' }}>
                        Shuffle :
                      </th>
                      <td style={{ padding: '10px', textAlign: 'left' }}>
                        {' '}
                        {single.Shuffle}
                      </td>
                    </tr>
                    <tr>
                      <th style={{ padding: '10px', textAlign: 'left' }}>
                        Team :
                      </th>
                      <td style={{ padding: '10px', textAlign: 'left' }}>
                        {' '}
                        {single.Team}
                      </td>
                    </tr>
                    <tr>
                      <th style={{ padding: '10px', textAlign: 'left' }}>
                        Tournament Mode :
                      </th>
                      <td style={{ padding: '10px', textAlign: 'left' }}>
                        {' '}
                        {single.TournamentMode}
                      </td>
                    </tr>
                    <tr>
                      <th style={{ padding: '10px', textAlign: 'left' }}>
                        Tournament Size :
                      </th>
                      <td style={{ padding: '10px', textAlign: 'left' }}>
                        {' '}
                        {single.TournamentSize}
                      </td>
                    </tr>
                    <tr>
                      <th style={{ padding: '10px', textAlign: 'left' }}>
                        Tournament Type :
                      </th>
                      <td style={{ padding: '10px', textAlign: 'left' }}>
                        {' '}
                        {single.TournamentType}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <InnerButton>Modal</InnerButton>
      </Singlediv>

      <Carddiv>
        <div className='imagerotate'>
          <div className='title2'>Sponsors</div>
          <ImageRotate />
        </div>
      </Carddiv>
      <Footer />
    </div>
  )
}

export default SingleTournament
