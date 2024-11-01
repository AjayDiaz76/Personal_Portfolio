import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import './Internship.css'

const Internship = () => {
  return (
    <div className='intern-container'>
      <h2 className='intern-head'><span className='intern-icon'><FaChalkboardTeacher /></span> Internship</h2>
        <div className='intern-content'>
            
            
            <div className='my-intern'>
            
                <h2>Haidata | Python, OpenCV, Docker <span><a href="https://haidata.ai/" target="_blank" rel="noopener noreferrer"><FiLink2 />
                </a></span></h2>
                <p>Python Developer Intern | JAN 2024 - MAR 2024</p>
                <p>The Nilgiris, Tamil Nadu, India</p>
                <ul>
                    <li>Implemented Python code with OpenCV to visualize image annotations, enhancing process efficiency by 40%</li>
                    <li>Developed Python code to convert COCO JSON to segmentation masks, improving the process by 20%</li>
                    <li>Engaged in data annotation tasks, ensuring accuracy and consistency in labeled datasets.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Internship