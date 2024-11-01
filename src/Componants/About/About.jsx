import React from 'react'
import './About.css'
import Education from './Education/Education'
import Couts from './Couts/Couts'
import Prosum from './Prosum/Prosum'
import Internship from './Internship/Internship'
import Myskills from './Myskills/Myskills'
import { Element } from 'react-scroll'
import Certification from './Certification/Certification'


const About = () => {
  return (
    <Element name='about'>
    <div className='about-container'>
      <Couts />
      <Prosum />
    </div>
      <div className='e-i'>
      <Education />
      <Internship />
      <Myskills />
      <Certification />
      </div>
      
    
    </Element>
  )
}

export default About