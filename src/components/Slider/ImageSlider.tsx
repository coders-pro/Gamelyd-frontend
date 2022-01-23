import React from 'react'
import { Style } from './style'
import data from './data'
import Card from './Card'

type IState = {
  properties: [
    {
      id: string
      index: number
      picture: string
      city: string
      address: string
      bedrooms: number
      bathrooms: number
      carSpaces: number
    }
  ]

  property: {
    id: string
    index: number
    picture: string
    city: string
    address: string
    bedrooms: number
    bathrooms: number
    carSpaces: number
  }

  position: number
}

class ImageSlider extends React.Component<IState> {
  state = {
    properties: data,
    property: data[0],
    position: 0,
  }

  nextProperty = () => {
    if (this.state.position < data.length + 1) {
      this.setState((prevState) => ({
        // position: prevState.position + 1,
      }))
    }
  }

  prevProperty = () => {
    if (this.state.position > 0) {
      this.setState((prevState) => ({
        // position: prevState.position - 1,
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
          <i className='fa fa-arrow-left'></i>
        </button>

        <button
          onClick={() => this.nextProperty()}
          disabled={this.state.position === properties.length - 1}
          className='next_button'
        >
          <i className='fa fa-arrow-right'></i>
        </button>

        <div className={`cards-slider active-slide-${this.state.position}`}>
          <div
            className='cards-slider-wrapper'
            style={{
              transform: `translateX(-${this.state.position * 100}%)`,
            }}
          >
            {properties.map((propertyItem) => (
              <Card
                key={property._id}
                index={propertyItem.index}
                picture={propertyItem.picture}
              />
            ))}
          </div>
        </div>
      </Style>
    )
  }
}

export default ImageSlider
