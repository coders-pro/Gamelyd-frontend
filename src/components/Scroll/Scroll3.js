import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Scroll2({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false }}
        transition={{ duration: 0.2 }}
        variants={{
          visible: {
            opacity: 0.7,
            scale: 1,
            x: "-100px",
            transition: {
              type: 'spring',
              stiffness: 20,
              damping:  5,
            
            },
          },
          hidden: { opacity: 0, scale: 1, x: 0 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Scroll2
