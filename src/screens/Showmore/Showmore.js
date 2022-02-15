import { Div } from './Style'
import Filter from './Filter'
import { motion } from 'framer-motion'

const Showmore = () => {
  return (
    <Div>
      <motion.div layout>
        <Filter />
      </motion.div>
    </Div>
  )
}

export default Showmore
