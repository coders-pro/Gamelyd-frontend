import { Div } from './Style'
import Filter from './Filter'
import { motion, AnimatePresence } from 'framer-motion'
import Data from './Data'
import More from './More'
import { useEffect, useState } from 'react'

const Showmore = () => {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState('all')

  useEffect(() => {
    fetchPopular()
  }, [])
  const fetchPopular = async () => {
    setPopular(Data)
    setFiltered(Data)
  }

  return (
    <Div>
      <motion.div layout>
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <motion.div layout className='popular'>
          <AnimatePresence>
            {filtered.map((more) => (
              <More more={more} key={more.id} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Div>
  )
}

export default Showmore
