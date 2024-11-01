import React from 'react'
import './Certification.css'
import { motion } from 'framer-motion';
// import { div } from 'framer-motion/client';
import { PiCertificateBold } from "react-icons/pi";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Certification = () => {

    return (
        <>
        <div className='cerf-head'><h2><span className='cerf-icon'><PiCertificateBold /></span> Certification</h2></div>
        <div className='main-roo'>

        <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        >
        <div className="splash spl-1" />
        <motion.div className="card card-1" variants={cardVariants}>
        <div className='cerf-fe'><a href="https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01280635098454425643_shared/1-13a3a612-3fad-4d46-84c9-b004590c3a00.pdf" target="_blank" rel="noopener noreferrer">
          <img src="./assets/images/JavaScript.jpg" width="250px" height='250px' alt="" /></a></div>
        </motion.div>
        </motion.div>

        <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        >
        <div className="splash spl-2" />
        <motion.div className="card card-2" variants={cardVariants}>
        <div className='cerf-fe'><a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-45c472c6-b85d-4163-836a-2904a64faa84.pdf" target="_blank" rel="noopener noreferrer">
          <img src="./assets/images/Frontend.jpg" width="250px" height='250px' alt="" /></a></div>
        </motion.div>
        </motion.div>

        <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        >
        <div className="splash spl-3" />
        <motion.div className="card card-3" variants={cardVariants}>
        <div className='cerf-fe'><a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-a0bb9890-3582-4194-a8cd-da9f1674e2b6.pdf" target="_blank" rel="noopener noreferrer">
          <img src="./assets/images/Python.jpg" width="250px" height='250px' alt="" /></a></div>
        </motion.div>
        </motion.div>

        <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        >
        <div className="splash spl-4" />
        <motion.div className="card card-4" variants={cardVariants}>
        <div className='cerf-fe'><a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-159da16b-af58-4217-a107-7ade55b69385.pdf" target="_blank" rel="noopener noreferrer">
          <img src="./assets/images/Docker.jpg" width="250px" height='250px' alt="" /></a></div>
        </motion.div>
        </motion.div>
        </div>
        </>
      );
}

export default Certification