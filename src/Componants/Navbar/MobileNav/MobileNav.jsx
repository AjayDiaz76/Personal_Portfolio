import React from 'react'
import './MobileNav.css'
import { Link } from 'react-scroll'

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}>
            <div className='mobile-menu-container'>

            <ul>
              <li>
                <Link className='menu-item' to="home" smooth={true} duration={500}>Home</Link>
              </li>
              <li>
                <Link className='menu-item' to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li>
                <Link className='menu-item' to="project" smooth={true} duration={500}>Project</Link>
              </li>
              <li>
                <Link className='menu-item' to="contact" smooth={true} duration={500}>Contact Me</Link>
              </li>
                <a className='dwn_btn' href="./assets/Document/AJAY_SIVAKUMAR.pdf" download="Ajay_Sivakumar.pdf">
              <button className='contact-btn'>Download Resume</button>
              </a>
            </ul>

            </div>
        </div>
    </>
)
}

export default MobileNav