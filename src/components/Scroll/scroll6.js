import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Scroll({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.1 }}
        variants={{
          visible: {
            scale: 1,
            y: 0,
            transition: {
              delay: 0.2,
              duration: 0.6,
              ease: "easeInOut",
              //   delayChildren: 0.2,
              //   staggerChildren: 0.2,
            },
          },
          hidden: { scale: 1, y: 100 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Scroll;
