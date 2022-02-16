import { useEffect } from 'react'
import { Button } from './Style'

const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 'all') {
      setFiltered(popular)
    } else {
      const filtered = popular.filter(
        (movie) => movie.tournamentmode === activeGenre
      )
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
          onClick={() => setActiveGenre('BATTLEROYALE')}
          className={activeGenre === 'BATTLEROYALE' ? 'active' : ''}
        >
          BR
        </button>
        <button
          onClick={() => setActiveGenre('MULTIPLAYER')}
          className={activeGenre === 'MULTIPLAYER' ? 'active' : ''}
        >
          MP
        </button>
      </div>
    </Button>
  )
}

export default Filter
