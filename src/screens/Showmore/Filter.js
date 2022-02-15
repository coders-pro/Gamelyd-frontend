import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Div } from './Style'
import Data from './Data'
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
          <motion.div layout className='popular'>
            <AnimatePresence>
              {Data.map((more) => (
                <More more={more} key={more.id} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
        {tab === 'action' && (
          <motion.div layout className='popular'>
            <AnimatePresence>
              {Data.filter((action) => action.genre === 'action').map((aa) => (
                <More more={aa} key={aa.id} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
        {tab === 'sports' && (
          <motion.div layout className='popular'>
            <AnimatePresence>
              {Data.filter((some) => some.genre === 'sports').map((aa) => (
                <More more={aa} key={aa.id} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </Div>
  )
}

export default Filter
