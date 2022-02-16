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
          <img src={`/images/logos/epic.png`} alt='muna' />
        </span>
        <span style={style2}>
          <img src={`/images/logos/gameloft.png`} alt='muna' />
        </span>
        <span style={style3}>
          <img src={`/images/logos/nba.png`} alt='muna' />
        </span>
        <span style={style4}>
          <img src={`/images/logos/sports.png`} alt='muna' />
        </span>
        <span style={style5}>
          <img src={`/images/logos/pes.png`} alt='muna' />
        </span>
        <span style={style6}>
          <img src={`/images/logos/tencent.png`} alt='muna' />
        </span>
        <span style={style7}>
          <img src={`/images/logos/activition.png`} alt='muna' />
        </span>
        <span style={style8}>
          <img src={`/images/logos/ubisoft.png`} alt='muna' />
        </span>
        <span>
          <img src={`/images/logos/epic.png`} alt='muna' />
        </span>
      </div>
    </ImageRotateStyle>
  )
}

export default ImageRotate
