import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import RLSlider from './RLSlider'
import Data from './Data'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Tournament = () => {
  const [allTournament, setAllTournament] = useState([])

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    }
    axios
      .get('https://gamelyd.herokuapp.com/tournaments', { headers: headers })
      .then((res) => {
        console.log(res.data.tournaments)
        setAllTournament(res.data.tournaments)
      })
  }, [])

  return (
    <div className='games'>
      <Navbar message='jh' />
      <Hero
        pic1={'/images/soldier12.png'}
        pic2={'/images/soldier11.png'}
        background={'/images/soldier12.png'}
        message='WELCOME TO TOURNAMENT'
        time=' CREATE TOURNAMENT'
      />

      <RLSlider data={allTournament} header='Paid Tournament' />
      {/* <RLSlider data={Data} header='Sponsored Tournament' />
      <RLSlider data={Data} header='Free Tournament' /> */}

      <Footer />
    </div>
  )
}

export default Tournament
