import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Scroll({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          },
          hidden: { opacity: 0, scale: 1, y: 50 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Scroll
