import React from 'react'
import Text from '../Text/Text'
import { HeroStyle } from './style'

const Hero = () => {
  return (
    <HeroStyle>
      <div className='images'>
        <div className='first'>
          <img src={`images/soldier1.jpg`} alt='soldier2' />
        </div>
        <div className='rotate'>
          <div className='slider'>
            <span>
              <img src={`images/soldier1.jpg`} alt='muna' />
            </span>
          </div>
        </div>
        <div className='last'>
          <img src={`images/soldier2.jpg`} alt='soldier2' />
        </div>
      </div>
      <div className='text'>
        <Text />
      </div>
    </HeroStyle>
  )
}

export default Hero
