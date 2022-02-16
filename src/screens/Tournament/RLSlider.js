import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Carddiv } from './style'
import Card from '../../components/Card/Card'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

const RLSlider = (props) => {
  const [id] = useState(uuidv4())
  const rightSlide = () => {
    var slider = document.getElementById(id)
    slider.scrollLeft = slider.scrollLeft + 300
  }
  const leftSlide = () => {
    var slider = document.getElementById(id)
    slider.scrollLeft = slider.scrollLeft - 300
  }
  return (
    <div>
      <Carddiv>
        <MdChevronLeft
          size={40}
          className='MdChevronLeft'
          onClick={leftSlide}
        />
        <div className='title'>{props.header}</div>
        <div className='div1'>
          <div className='div2' id={id}>
            {props.data.map((car) => (
              <Card
                key={car.tournamentid}
                rank={car.tournamentmode === 'BATTLEROYALE' ? 'BR' : 'MP'}
                gameName={car.name}
                image1={car.image1}
                image2={car.image2}
                gamer1={car.gamer1}
                gamer2={car.gamer2}
                // mainImage={car.mainImage}
              />
            ))}
          </div>
        </div>
        {/* <div className='title'>{props.header}</div>
        <div className='div1'>
          <div className='div2' id={id}>
            {props.data.map((car) => (
              <Card
                key={car.index}
                rank={car.rank}
                gameName={car.gameName}
                image1={car.image1}
                image2={car.image2}
                gamer1={car.gamer1}
                gamer2={car.gamer2}
                mainImage={car.mainImage}
              />
            ))}
          </div>
        </div> */}
        <MdChevronRight
          size={40}
          className='MdChevronRight'
          onClick={rightSlide}
        />
        <div className='container'>
          <Link to='/showmore' className='a'>
            <span className='button'>See more</span>
          </Link>
        </div>
      </Carddiv>
    </div>
  )
}

export default RLSlider
