import { motion } from "framer-motion";
import React from "react";

const Backdrop = ({childern, onClick}) => (
 <motion.div
  className="backdrop"
  onClick={onClick}
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}
 >
   {childern}
 </motion.div>
)

export default Backdrop;