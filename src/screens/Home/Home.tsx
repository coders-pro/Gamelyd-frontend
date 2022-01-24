import { HomeStyle } from './style.js'
import ImageSlider from '../../components/Slider/ImageSlider.js'
import ImageRotate from '../../components/ImageRotate/ImageRotate'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <HomeStyle>
      <Hero />
      <ImageSlider />

      <div className='multiplayer'>
        <div className='text'>
          <h2>Multiplayer</h2>
          <p>
            Multiplayer games that allows u to play with others and fly around
            like a baddie and then woo all the chicks in town and later
            terminate their ass with your weapon of mass destruction.
          </p>
        </div>
        <div className='imagerotate'>
          <ImageRotate />
        </div>
      </div>
    </HomeStyle>
  )
}

export default Home
