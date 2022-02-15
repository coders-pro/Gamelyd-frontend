import { useEffect } from 'react'
import { Button } from './Style'

const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 'all') {
      setFiltered(popular)
    } else {
      const filtered = popular.filter((movie) => movie.genre === activeGenre)
      setFiltered(filtered)
    }
  }, [activeGenre, popular, setFiltered])

  return (
    <Button>
      <div className='filter'>
        <button
          onClick={() => setActiveGenre('all')}
          className={activeGenre === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => setActiveGenre('action')}
          className={activeGenre === 'action' ? 'active' : ''}
        >
          Action
        </button>
        <button
          onClick={() => setActiveGenre('sports')}
          className={activeGenre === 'sports' ? 'active' : ''}
        >
          Sports
        </button>
      </div>
    </Button>
  )
}

export default Filter
