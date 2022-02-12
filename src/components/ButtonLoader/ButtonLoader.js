import './style.css'

const ButtonLoader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1000',
        width: '100wh',
      }}
    >
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          margin: 0,
          padding: 0,
          top: 0,
          left: 0,
        }}
      />
      <div className='bodyses'>
        <div className='ringses'>
          Loading
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default ButtonLoader
