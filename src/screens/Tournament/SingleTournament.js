import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Singlediv, Carddiv } from './style'
import Navbar from '../../components/NavBar/Navbar'
import Hero from '../../components/Hero/Hero'
import ImageRotate from '../../components/ImageRotate/ImageRotate'
import Footer from '../../components/Footer/Footer'

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
        console.log(res.data.tournament)
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
          <p>{single.Name}</p>
          <p>{single.GameName}</p>
          <p>{single.Link}</p>
          <p>{single.Payment}</p>
          <p>{single.Shuffle}</p>
          <p>{single.Team}</p>
          <p>{single.TournamentMode}</p>
          <p>{single.TournamentSize}</p>
          <p>{single.TournamentType}</p>
          <p>{single.icon}</p>
        </div>
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
