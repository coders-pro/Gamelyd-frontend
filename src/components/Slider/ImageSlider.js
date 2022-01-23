import React from 'react'
import { Style } from './style'
import data from './data'
import Card from './Card'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'

import next from '../../assets/audios/Next.mp3'
import prev from '../../assets/audios/Prev.mp3'

class ImageSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      properties: data.properties,
      property: data.properties[0],
      position: 0,
      next: next,
      prev: prev,
    }
  }

  nextProperty = () => {
    let audio = new Audio(this.state.next)
    audio.play()

    if (this.state.position < data.properties.length + 1) {
      this.setState((prevState) => ({
        position: prevState.position + 1,
      }))
    }
  }

  prevProperty = () => {
    let audio = new Audio(this.state.prev)
    audio.play()
    if (this.state.position > 0) {
      this.setState((prevState) => ({
        position: prevState.position - 1,
      }))
    }
  }

  render() {
    const { properties, property } = this.state

    return (
      <Style num={this.state.position}>
        <h1>Top Apparels</h1>
        <button
          onClick={() => this.prevProperty()}
          disabled={this.state.position === 0}
          className='prev_button'
        >
          <SkipPreviousIcon />
        </button>

        <button
          onClick={() => this.nextProperty()}
          disabled={this.state.position === properties.length - 1}
          className='next_button'
        >
          <SkipNextIcon />
        </button>

        <div className={`cards-slider active-slide-${this.state.position}`}>
          <div
            className='cards-slider-wrapper'
            style={{
              transform: `translateX(-${this.state.position * 100}%)`,
            }}
          >
            {properties.map((propertyItem) => (
              <Card key={propertyItem.picture} propertyProp={propertyItem} />
            ))}
          </div>
        </div>
      </Style>
    )
  }
}

export default ImageSlider
