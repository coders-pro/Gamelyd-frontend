import { motion } from 'framer-motion'
import { Div } from './Style'

const More = ({ more }) => {
  return (
    <Div>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        // transition={{ duration: 1 }}
      >
        <h2>{more.title}</h2>
        <img src={more.Image} alt='' />
      </motion.div>
    </Div>
  )
}

export default More
