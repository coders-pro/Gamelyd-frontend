import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import RLSlider from './RLSlider'
import { Carddiv } from './style'
import axios from 'axios'
import { useEffect, useState } from 'react'
import InnerButton from '../../components/Button/InnerButton'
import ImageRotate from '../../components/ImageRotate/ImageRotate'

const Tournament = () => {
  const [paid, setPaid] = useState([])
  const [sponsored, setSponsored] = useState([])
  const [free, setFree] = useState([])
  // const [payment, setPayment] = useState('')

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    }
    axios
      .get('https://gamelyd.herokuapp.com/tournament/mode/PAID', {
        headers: headers,
      })
      .then((res) => {
        // console.log(res.data.tournaments)
        setPaid(res.data.tournaments)
      })
    axios
      .get('https://gamelyd.herokuapp.com/tournament/mode/SPONSORED', {
        headers: headers,
      })
      .then((res) => {
        // console.log(res.data.tournaments)
        setSponsored(res.data.tournaments)
      })
    axios
      .get('https://gamelyd.herokuapp.com/tournament/mode/FREE', {
        headers: headers,
      })
      .then((res) => {
        // console.log(res.data.tournaments)
        setFree(res.data.tournaments)
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

      <RLSlider data={paid} header='Paid Tournament' />
      <InnerButton link={'tournament/PAID'} />

      <RLSlider data={sponsored} header='Sponsored Tournament' />
      <InnerButton link={'tournament/SPONSORED'} />

      <RLSlider data={free} header='Free Tournament' />
      <InnerButton link={'tournament/FREE'} />

      <Carddiv>
        <div className='imagerotate'>
          <div className='title'>Sponsors</div>
          <ImageRotate />
        </div>
      </Carddiv>
      <Footer />
    </div>
  )
}

export default Tournament
