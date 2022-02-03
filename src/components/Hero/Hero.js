import { useRef } from 'react'
import Modal from '../Modal/Modal'
import ImageSlider from '../Slider/ImageSlider'
import Text from '../Text/Text'
import { HeroStyle } from './style'
import open from '../../assets/audios/Open.mp3'

const Hero = (props) => {
  const modalRef = useRef()

  const create = () => {
    modalRef.current.open()

    let audio = new Audio(open)
    audio.play()
  }

  const close = () => {
    modalRef.current.close()
  }
  return (
    <HeroStyle background={props.background}>
      <div className='images'>
        <div className='first'>
          <img src={props.pic1} alt='soldier2' />
        </div>
        <div className='rotate'>
          <div className='slider'>
            <span>
              <img src={`images/pad.png`} alt='muna' />
            </span>
          </div>
        </div>
        <div className='last'>
          <img src={props.pic2} alt='soldier2' />
        </div>
      </div>
      <div className='text'>
        <Text message={props.message} time={props.time} />
      </div>
      <div className='create-button'>
        <button className='button' onClick={create}>
          Create Tournament
        </button>
        <Modal ref={modalRef}>
          <button onClick={close} className='close'>
            X
          </button>
          <ImageSlider />
        </Modal>
      </div>
    </HeroStyle>
  )
}

export default Hero
