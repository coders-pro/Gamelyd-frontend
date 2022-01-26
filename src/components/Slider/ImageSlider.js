import React from 'react'
import { Style, StyleCard } from './style'
import data from './data'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'

import next from '../../assets/audios/Next.mp3'
import prev from '../../assets/audios/Prev.mp3'
import Open from '../../assets/audios/Open.mp3'

class ImageSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      properties: data.properties,
      position: 0,
      next: next,
      prev: prev,
      active: 0,
      name: 'Game',
      switch: true,
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

  select = (next) => {
    let audio = new Audio(Open)
    audio.play()

    if (this.state.properties[next].id === 5) {
      this.setState({
        switch: false,
      })
    }
    if (this.state.properties[next].id !== 5) {
      this.setState({
        active: next,
        position: 0,
        name: this.state.properties[next].name,
      })
    }
  }

  render() {
    const { properties } = this.state
    return (
      <Style num={this.state.position}>
        <h1>
          {this.state.switch === false ? (
            'Input Details'
          ) : (
            <span>Select {this.state.name}</span>
          )}
        </h1>

        {this.state.switch === false ? (
          <form>jhkjkjk</form>
        ) : (
          <>
            <button
              onClick={() => this.prevProperty()}
              disabled={this.state.position === 0}
              className='prev_button'
            >
              <SkipPreviousIcon />
            </button>

            <button
              onClick={() => this.nextProperty()}
              disabled={
                this.state.position ===
                properties[this.state.active].data.length - 1
              }
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
                {properties[this.state.active].data.map((propertyItem) => (
                  <StyleCard
                    onClick={() => this.select(propertyItem.next)}
                    key={propertyItem.index}
                  >
                    <div id={`card-${propertyItem.index}`} className='card'>
                      <img src={propertyItem.picture} alt='' />
                    </div>
                    <h2>{propertyItem.name}</h2>
                  </StyleCard>
                ))}
              </div>
            </div>
          </>
        )}
      </Style>
    )
  }
}

export default ImageSlider
