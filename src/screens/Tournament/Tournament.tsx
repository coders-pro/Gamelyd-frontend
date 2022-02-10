import Card from '../../components/Card/Card'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Carddiv } from './style'
import Data from './Data'

const Tournament = () => {
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
            <div className='div2'>
              {car.cards?.map((sin) => (
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
          </div>
        </Carddiv>
      ))}
      <Footer />
    </div>
  )
}

export default Tournament
