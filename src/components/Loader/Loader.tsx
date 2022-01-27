import { LoaderStyle } from './style'

const Loader = () => {
  return (
    <LoaderStyle>
      <div className='body'>
        <div className='container'>
          <div className='ring'></div>
          <div className='ring'></div>
          <div className='ring'></div>
          <p>werey calm down...</p>
        </div>
      </div>
    </LoaderStyle>
  )
}

export default Loader
