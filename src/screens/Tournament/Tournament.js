// import { useRef } from 'react'
import Card from '../../components/Card/Card'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Carddiv } from './style'
import Data from './Data'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Tournament = () => {
  const rightSlide = () => {
    var slider = document.getElementById('div2')
    slider.scrollLeft = slider.scrollLeft + 300
  }
  const leftSlide = () => {
    var slider = document.getElementById('div2')
    slider.scrollLeft = slider.scrollLeft - 300
  }

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
      {Data.map((car) => (
        <Carddiv key={car.id}>
          <h4 className='card-h4'>{car.headText}</h4>
          <div className='div1'>
            <MdChevronLeft
              size={40}
              className='MdChevronLeft'
              onClick={leftSlide}
            />

            <div id='div2'>
              {car.cards &&
                car.cards?.map((sin) => (
                  <Card
                    key={sin.index}
                    rank={sin.rank}
                    gameName={sin.gameName}
                    image1={sin.image1}
                    image2={sin.image2}
                    gamer1={sin.gamer1}
                    gamer2={sin.gamer2}
                    mainImage={sin.mainImage}
                  />
                ))}
            </div>

            <MdChevronRight
              size={40}
              className='MdChevronRight'
              onClick={rightSlide}
            />
          </div>
        </Carddiv>
      ))}
      <Footer />
    </div>
  )
}

export default Tournament
