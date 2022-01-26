import { ImageRotateStyle } from './style'
import React from 'react'

let style1 = { '--i': 1 } as React.CSSProperties
let style2 = { '--i': 2 } as React.CSSProperties
let style3 = { '--i': 3 } as React.CSSProperties
let style4 = { '--i': 4 } as React.CSSProperties
let style5 = { '--i': 5 } as React.CSSProperties
let style6 = { '--i': 6 } as React.CSSProperties
let style7 = { '--i': 7 } as React.CSSProperties
let style8 = { '--i': 8 } as React.CSSProperties

const ImageRotate = () => {
  return (
    <ImageRotateStyle>
      <div className='slider'>
        <span style={style1}>
          <img src={`images/soldier1.jpg`} alt='muna' />
        </span>
        <span style={style2}>
          <img src={`images/soldier2.jpg`} alt='muna' />
        </span>
        <span style={style3}>
          <img src={`images/fortnite.jpg`} alt='muna' />
        </span>
        <span style={style4}>
          <img src={`images/nba.jpg`} alt='muna' />
        </span>
        <span style={style5}>
          <img src={`images/fifa.jpg`} alt='muna' />
        </span>
        <span style={style6}>
          <img src={`images/warzone.jpg`} alt='muna' />
        </span>
        <span style={style7}>
          <img src={`images/gta.jpg`} alt='muna' />
        </span>
        <span style={style8}>
          <img src={`images/codm.jpg`} alt='muna' />
        </span>
        <span>
          <img src={`images/soldier1.jpg`} alt='muna' />
        </span>
      </div>
    </ImageRotateStyle>
  )
}

export default ImageRotate