import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiCopyright } from "react-icons/pi";
import { Link } from 'react-scroll'

const d = new Date();
let year = d.getFullYear();



const Footer = () => {
  return (
    <div className='foo-container'>
        <div className='foo-content'>
          <div className='foo-list'> 
            <ul>
              <li><Link className='menu-item-f' to="home" smooth={true} duration={500}>Home</Link></li>
              <li><Link className='menu-item-f' to="about" smooth={true} duration={500}>About</Link></li>
              <li><Link className='menu-item-f' to="project" smooth={true} duration={500}>Project</Link></li>
              <li><Link className='menu-item-f' to="contact" smooth={true} duration={500}>Contact Me</Link></li>
              
            </ul>
          </div>
          <div className='foo-icon'>
            <ul>
              <li><a href="https://www.linkedin.com/in/ajays76" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>  </li>
              <li><a href="https://github.com/AjayDiaz76" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            </ul>
          </div>
        </div>
        
        <div className='foo-end'>
          <hr />
          <p>Ajay <PiCopyright /> {year}. Happy Day : )</p></div>

    </div>
  )
}

export default Footer