import { Div } from './Style'
import Data from './Data'
import { useState } from 'react'
import More from './More'

const Filter = () => {
  const [tab, setTab] = useState('all')

  return (
    <Div>
      <div className='filter'>
        <button
          onClick={() => setTab('all')}
          className={tab === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => setTab('action')}
          className={tab === 'action' ? 'active' : ''}
        >
          Action
        </button>
        <button
          onClick={() => setTab('sports')}
          className={tab === 'sports' ? 'active' : ''}
        >
          Sports
        </button>

        {tab === 'all' && (
          <div className='popular'>
            {Data.map((more) => (
              <More more={more} key={more.id} />
            ))}
          </div>
        )}
        {tab === 'action' && (
          <div className='popular'>
            {Data.filter((action) => action.genre === 'action').map((aa) => (
              <More more={aa} key={aa.id} />
            ))}
          </div>
        )}
        {tab === 'sports' && (
          <div className='popular'>
            {Data.filter((some) => some.genre === 'sports').map((aa) => (
              <More more={aa} key={aa.id} />
            ))}
          </div>
        )}
      </div>
    </Div>
  )
}

export default Filter
