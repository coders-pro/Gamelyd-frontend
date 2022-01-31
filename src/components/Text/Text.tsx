import React from 'react'
import { TextStyle } from './style'

type IProp = {
  message: string
  time : string
}

const Text = (props : IProp): any => {
  return (
    <TextStyle>
      <div>{props.message}</div>
      <div>
        <span>{props.time}</span>
      </div>
    </TextStyle>
  )
}

export default Text
