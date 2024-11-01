import React from 'react'
import './Myskills.css'
import { SiHyperskill } from "react-icons/si";
import { motion } from 'framer-motion';

const Myskills = () => {
  return (
    <div className='skill-container'>
      <h2 className='skill-head'><span className='main-skill'><SiHyperskill /></span> My Skills</h2>
      <div className='skill-body'>
        <div className='skill-content'>
          <div>
            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              
              <img src="./assets/images/python.png" width='115px' height='115px' alt="python" />
              <h3>Python</h3>
            </motion.div>

            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              <img src="./assets/images/web_django.png" width='115px' height='115px' alt="django" />
              <h3>Django</h3>
            </motion.div>

            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              <img src="./assets/images/web_bootstrap.png" width='115px' height='115px' alt="bootstrap" />
              <h3>Bootstrap</h3>
            </motion.div>

          </div>

          <div>
            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              <img src="./assets/images/web_react.png" width='115px' height='115px' alt="react" />
              <h3>React</h3>
            </motion.div>

            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              <img src="./assets/images/web_html.png" width='115px' height='115px' alt="html" />
              <h3>HTML</h3>
            </motion.div>

            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              <img src="./assets/images/web_docker.png" width='115px' height='115px' alt="docker" />
              <h3>Docker</h3>
            </motion.div>

          </div>

          <div>
            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              <img src="./assets/images/web_sql.png" width='115px' height='115px' alt="sql" />
              <h3>SQL</h3>
            </motion.div>

            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              <img src="./assets/images/web_css.png" width='115px' height='115px' alt="css" />
              <h3>CSS</h3>
            </motion.div>

            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              <img src="./assets/images/web.javaScript.png" width='115px' height='115px' alt="javascript" />
              <h3>JavaScript</h3>
            </motion.div>

          </div>    

          </div>
          <div className='last-row'>
            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              <img src="./assets/images/web_git.png" width='115px' height='115px' alt="git" />
              <h3>Git & Github</h3>
            </motion.div>

            <motion.div className='skill-icon'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.8 }}>
              <img src="./assets/images/web_ubuntu.png" width='115px' height='115px' alt="ubuntu" />
              <h3>Ubuntu</h3>
            </motion.div>

          </div>
        </div>
      </div>
  )
}


export default Myskills