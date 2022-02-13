// import { useRef } from 'react'

import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import RLSlider from './RLSlider'
import Data from './Data'

const Tournament = () => {
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

      <RLSlider data={Data} header='Paid Tournament' />
      <RLSlider data={Data} header='Sponsored Tournament' />
      <RLSlider data={Data} header='Free Tournament' />

      <Footer />
    </div>
  )
}

export default Tournament
