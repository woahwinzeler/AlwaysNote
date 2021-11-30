import { motion } from "framer-motion";
import React from "react";
import Backdrop from "../backdrop/backdrop";
import { NotebookForm } from "../notebooks/notebook_form";


const dropIn = {
  hidden:{
    y: "-100vh",
    opacity: 0
  },
  visible:{
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 2.5,
      stiffness: 500,
    }
  },
  exit:{
    y: "100vh",
    opacity: 0
  }
}

const Modal = ({handleClose, modalOpen}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div

        drag 
        
        onClick={(e) => e.stopPropagation()}
        className="Modal"
        variants={dropIn}
        animate="visible"
        exit="exit"

      >
        <NotebookForm /> 
      </motion.div>
    </Backdrop>
  )
}

export default Modal; 