import { Style } from './style'
import { Link } from 'react-router-dom'

const InnerButton = (props) => {
  return (
    <Style>
      <div className='container'>
        <Link to={`/${props.link}`} className='a'>
          <span className='button'>See more</span>
        </Link>
      </div>
    </Style>
  )
}

export default InnerButton
