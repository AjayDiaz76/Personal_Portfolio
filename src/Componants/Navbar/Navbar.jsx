import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import { Link } from 'react-scroll'


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>

      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <a className='logo' href="/"><h2>Portfolio</h2></a>

          <ul>
            <li>
              {/* <a className='menu-item' href="/">Home</a> */}
              <Link className='menu-item' to="home" smooth={true} duration={500}>Home</Link>

            </li>
            <li>
              {/* <a className='menu-item' href='#'>About</a> */}
              <Link className='menu-item' to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li>
              {/* <a className='menu-item' href="#">Project</a> */}
              <Link className='menu-item' to="project" smooth={true} duration={500}>Project</Link>
            </li>
            <li>
              {/* <a className='menu-item' href="#">Contact Me</a> */}
              <Link className='menu-item' to="contact" smooth={true} duration={500}>Contact Me</Link>
            </li>
            <a className='dwn_btn' href="./assets/Document/AJAY_SIVAKUMAR.pdf" download="Ajay_Sivakumar.pdf">
              <button className='contact-btn'>Download Resume</button>
            </a>
          </ul>
        
          <button className='menu-btn' onClick={toggleMenu}>
            <span className='md-menu' style={{fontSize: "1.8rem"}}>
              {openMenu ? <AiOutlineClose size={30} color="white" /> : <AiOutlineBars size={30} color="white" />}

            </span>
          </button>

        </div>
      </nav>

    </>

    
  )
}

export default Navbar