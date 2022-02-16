import { Div } from './Style'
import Filter from './Filter'
import { motion, AnimatePresence } from 'framer-motion'
import More from './More'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Showmore = () => {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState('all')

  const { payment } = useParams()

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    }
    axios
      .get(`https://gamelyd.herokuapp.com/tournament/mode/${payment}`, {
        headers: headers,
      })
      .then((res) => {
        // console.log(res.data.tournaments)
        setPopular(res.data.tournaments)
        setFiltered(res.data.tournaments)
      })
  }, [payment])

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
              <More more={more} key={more.tournamentid} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Div>
  )
}

export default Showmore
