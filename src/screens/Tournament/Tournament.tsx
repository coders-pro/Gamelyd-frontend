import Card from '../../components/Card/Card'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Carddiv } from './style'
import Data from './Data'

const Tournament = () => {
  return <div className='games'>
  <Navbar message='jh' />
  <Hero pic1={'/images/soldier12.png'} pic2={'/images/soldier11.png'} background={'/images/soldier12.png'} message='WELCOME TO TOURNAMENT' time=' CREATE TOURNAMENT' />
  {Data.map((car) => (
  <Carddiv key={car.id}>
      <h4 className='card-h4'>{car.headText}</h4>
    <div className="div1">
      <div className='div2'>
        <Card 
          rank={car.rank} 
          gameName={car.gameName} 
          image1={car.image1} 
          image2={car.image2} 
          gamer1={car.gamer1} 
          gamer2={car.gamer2} 
        />
        <Card 
          rank={car.rank} 
          gameName={car.gameName} 
          image1={car.image1} 
          image2={car.image2} 
          gamer1={car.gamer1} 
          gamer2={car.gamer2} 
        />
        <Card 
          rank={car.rank} 
          gameName={car.gameName} 
          image1={car.image1} 
          image2={car.image2} 
          gamer1={car.gamer1} 
          gamer2={car.gamer2} 
        />
        <Card 
          rank={car.rank} 
          gameName={car.gameName} 
          image1={car.image1} 
          image2={car.image2} 
          gamer1={car.gamer1} 
          gamer2={car.gamer2} 
        />
        <Card 
          rank={car.rank} 
          gameName={car.gameName} 
          image1={car.image1} 
          image2={car.image2} 
          gamer1={car.gamer1} 
          gamer2={car.gamer2} 
        />
      </div>
    </div>
  </Carddiv>
  ))}
  <Footer />
  </div>
}

export default Tournament
