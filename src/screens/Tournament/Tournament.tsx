import Card from '../../components/Card/Card'
import './Games.css'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'

const Tournament = () => {
  return <div className='games'>
  <Navbar message='jh' />
  <Hero pic1={'/images/soldier12.png'} pic2={'/images/soldier11.png'} background={'/images/soldier12.png'} message='WELCOME TO TOURNAMENT' time=' CREATE TOURNAMENT' />
  <Card />
  <Footer />
  </div>
}

export default Tournament
