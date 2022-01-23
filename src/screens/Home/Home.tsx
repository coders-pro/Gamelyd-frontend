import { HomeStyle } from './style.js'
import ImageSlider from '../../components/Slider/ImageSlider.js'
import ImageRotate from '../../components/ImageRotate/ImageRotate'

const Home = () => {
  return (
    <HomeStyle>
      Home
      <ImageSlider />
      <ImageRotate />
    </HomeStyle>
  )
}

export default Home
