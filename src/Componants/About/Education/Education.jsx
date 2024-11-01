import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import './Education.css'

const Education = () => {
  return (
    <div className='edu-container'>
      <div className='edu-content'>
        <h2 className='edu-head'><span className='edu-icon'><RiGraduationCapFill /></span> My Education</h2>
        <div className='my-edu'>
        <div className='edu-pg'>
          <h2>Master of Computer Application</h2>
          <p>CMS College of Science and Commerce<br />
              Coimbatore, Tamil Nadu, India.<br />
              2022 - 2024<br />
              CGPA - 83.6<br />
          </p>
          
        </div>
        <div className='edu-ug'>
          <h2>Bachelor of Computer Application</h2>
          <p>KG College of Arts and Science<br />
              Coimbatore, Tamil Nadu, India.<br />
              2019 - 2022<br />
              CGPA - 73.8<br />
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Education