// import react from 'react'
import { Div } from './Style'

const More = ({ more }) => {
  return (
    <Div>
      <h2>{more.title}</h2>
      <img src={more.Image} alt='' />
    </Div>
  )
}

export default More
