import Card from '../../components/Card/Card'
import './Games.css'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'

const Tournament = () => {
  return <div className='games'>
  <Navbar message='jh' />
  <Hero />
  <Card />
  <Footer />
  </div>
}

export default Tournament
