import { HomeStyle } from './style.js'
import ImageRotate from '../../components/ImageRotate/ImageRotate'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <HomeStyle>
      <Hero />

      <div className='text-left'>
        <div className='text'>
          <h2>Free</h2>
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

      <div className='text-right'>
        <div className='image'>
          <img src='/images/soldier1.jpg' alt='soldier1' />
        </div>
        <div className='text'>
          <h2>Sponsored</h2>
          <p>
            Multiplayer games that allows u to play with others and fly around
            like a baddie and then woo all the chicks in town and later
            terminate their ass with your weapon of mass destruction.
          </p>
        </div>
      </div>

      <div className='text-left'>
        <div className='text'>
          <h2>Paid</h2>
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

      <div className='text-right'>
        <div className='image'>
          <img src='/images/soldier2.jpg' alt='soldier2' />
        </div>
        <div className='text'>
          <h2>Multiplayer</h2>
          <p>COMING SOON</p>
        </div>
      </div>

      <div className='text-left'>
        <div className='text'>
          <h2>Battle Royale</h2>
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
