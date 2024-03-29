import React, { forwardRef, useImperativeHandle, useState } from "react";
import { ModalStyle } from "./style";
import { motion, AnimatePresence } from "framer-motion";

const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <ModalStyle>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3,
              },
            }}
            onClick={() => setOpen(false)}
            className="modal-backdrop"
          />
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                duration: 0.3,
              },
            }}
            className="modal-content-wrapper"
          >
              <div className="header">{props.title}</div>
              <div style={{ padding: "50px" }}>{props.children}</div>
          </motion.div>
        </ModalStyle>
      )}
    </AnimatePresence>
  );
});

export default Modal;
