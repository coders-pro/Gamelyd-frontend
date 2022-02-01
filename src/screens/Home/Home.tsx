import { HomeStyle } from './style.js'
import ImageRotate from '../../components/ImageRotate/ImageRotate'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar message='jh' />
      <HomeStyle>
        <Hero pic1={'/images/soldier7.png'} pic2={'/images/soldier14.png'} background={'/images/soldier7.png'} message='WELCOME ABOARD SOLDIER' time='TIME TO CONNECT'/>

        <div className='free'>
          <div className='text'>
            <h2>Free</h2>
            <p>
              Multiplayer games that allows u to play with others and fly around
              like a baddie and then woo all the chicks in town and later
              terminate their ass with your weapon of mass destruction.
            </p>
          </div>
          <div className='image'></div>
        </div>

        <div className='sponsored'>
          <div className='image'></div>
          <div className='text'>
            <h2>Sponsored</h2>
            <p>
              Multiplayer games that allows u to play with others and fly around
              like a baddie and then woo all the chicks in town and later
              terminate their ass with your weapon of mass destruction.
            </p>
          </div>
        </div>

        <div className='paid'>
          <div className='text'>
            <h2>Paid</h2>
            <p>
              Multiplayer games that allows u to play with others and fly around
              like a baddie and then woo all the chicks in town and later
              terminate their ass with your weapon of mass destruction.
            </p>
          </div>
          <div className='image'></div>
        </div>

        <div className='multiplayer'>
          <div className='image'></div>
          <div className='text'>
            <h2>Multiplayer</h2>
            <p>COMING SOON</p>
          </div>
        </div>

        <div className='battle'>
          <div className='text'>
            <h2>Battle Royale</h2>
            <p>
              Multiplayer games that allows u to play with others and fly around
              like a baddie and then woo all the chicks in town and later
              terminate their ass with your weapon of mass destruction.
            </p>
          </div>
          <div className='image'></div>
        </div>

        <div className='imagerotate'>
          <ImageRotate />
        </div>
      </HomeStyle>
      <Footer />
    </>
  )
}

export default Home
