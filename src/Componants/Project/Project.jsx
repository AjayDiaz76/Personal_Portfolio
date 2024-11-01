import React from 'react'
import './Project.css'
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { MdDiamond } from "react-icons/md";
import { Element } from 'react-scroll'
import { motion } from 'framer-motion';

const Project = () => {

  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 1 },
  };

  return (
    <Element name='project'>
    <div className='proj-container'>
    <h2 className='proj-head'><span className='proj-icon'><PiProjectorScreenChartFill /></span> Project</h2>
      <div className='proj-content'>
        <motion.div className='proj-one' 
        variants={variant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.8 }}>

        <motion.div className='proj-main' initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 4 }}
        viewport={{ once: true, amount: 0.8 }}> 
          <h3><a href="https://github.com/AjayDiaz76/E_Shop.git">E-Commerce Website</a></h3>
          <p className='pm-summery'>This project deals with developing a ‘E-Commerce Website’. It provides the user with a list of the various products 
            available for purchase in the store. For the convenience of online shopping, a shopping cart is provided to the user. 
            After the selection of the products, it is sent for the order confirmation process. The system is implemented using 
            Python's web framework Django.</p>
          <p className='proj-stack'><span className='proj-skill'><MdDiamond /></span> Python, Django, HTML, CSS, Bootstrap</p>
        </motion.div>

        </motion.div>  
      </div>  
    </div>
    </Element>
  )
}

export default Project