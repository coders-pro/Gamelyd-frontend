import { ButtonStyle } from './style'

type IProps = {
  onClick: any
  line1: string
  line2: string
  line3: string
}

function Button(props: IProps) {
  const clickButton = (value: string): any => {
    props.onClick()
  }

  return (
    <ButtonStyle
    //   onClick={clickButton}
    //   line1={props.line1}
    //   line2={props.line2}
    //   line3={props.line3}
    >
      <div className='line1' id='lin'></div>
      <div className='line2'></div>
      <div className='line3' id='linee'></div>
    </ButtonStyle>
  )
}

export default Button
