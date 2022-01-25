import React, { useRef } from 'react'
import Modal from '../Modal/Modal'
import ImageSlider from '../Slider/ImageSlider'
import Text from '../Text/Text'
import { HeroStyle } from './style'
import open from '../../assets/audios/Open.mp3'

const Hero = () => {
  const modalRef = useRef()

  const create = () => {
    modalRef.current.open()

    let audio = new Audio(open)
    audio.play()
  }

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
      <div className='create-button'>
        <button className='button' onClick={create}>
          Create Tournament
        </button>
        <Modal ref={modalRef}>
          <ImageSlider />
        </Modal>
      </div>
    </HeroStyle>
  )
}

export default Hero
