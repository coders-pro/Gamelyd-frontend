import { Div } from './Style'
import Filter from './Filter'
import { motion, AnimatePresence } from 'framer-motion'
import More from './More'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ButtonLoader from '../../components/ButtonLoader/ButtonLoader'
import ImageRotate from '../../components/ImageRotate/ImageRotate'
import Footer from '../../components/Footer/Footer'
import { Carddiv } from '../Tournament/style'

const Showmore = () => {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState('all')
  const [loader, setLoader] = useState(false)

  const { payment } = useParams()

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    }
    setLoader(true)
    axios
      .get(`https://gamelyd.herokuapp.com/tournament/mode/${payment}`, {
        headers: headers,
      })
      .then((res) => {
        // console.log(res.data.tournaments)
        setPopular(res.data.tournaments)
        setFiltered(res.data.tournaments)
        setLoader(false)
      })
  }, [payment])

  return (
    <div>
      <Div>
        {loader && <ButtonLoader />}
        <div className='head'>{payment} Tournament</div>
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
      <Carddiv>
        <div className='imagerotate'>
          <div className='title2'>Sponsors</div>
          <ImageRotate />
        </div>
      </Carddiv>
      <Footer />
    </div>
  )
}

export default Showmore
