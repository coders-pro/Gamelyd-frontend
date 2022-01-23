import React from 'react'
import { StyleCard } from './style'

type IProp = {
  picture: string
  index: number
}

function Card(props: IProp) {
  const picture = props.picture
  const index = props.index
  return (
    <StyleCard>
      <div id={`card-${index}`} className='card'>
        <img src={picture} alt='' />
      </div>
    </StyleCard>
  )
}

export default Card
