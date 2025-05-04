import React from 'react'
import './Home.css'
import { FaLinkedin} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Typing from './Typing';
import { Element } from 'react-scroll'



const Home = () => {
  return (
    <Element name='home'>
    <section className='container-home'>
    <div className='home-container'>  
      <div className='home-content'>
      <div className="icon-box">
                <a href="https://www.linkedin.com/in/ajays76" target="_blank" rel="noopener noreferrer"><FaLinkedin className='icon-ob'/></a>
                <a href="https://github.com/AjayDiaz76" target="_blank" rel="noopener noreferrer"><FaSquareGithub className='icon-ob'/></a>
                {/* <!-- refered from Boxicons --> */}
      </div>
      <div className='home-head'>
      <h3><Typing /></h3>
      <h1>I'm <span className='m-n'>Ajay Sivakumar</span></h1>
        <h2>Building Digital Expeiences That Inspire</h2>
        <p>
          Passinate Software Developer | Transforming Ideas into  Seamless and
          Visually Stunning Web Solutions
        </p>
        <div className='icon-container'>
        <div className='tech-icon'>
            <img src="./assets/images/react.png" alt="React" />
        </div>
        <div className='tech-icon-one'>
            <img src="./assets/images/tryicon.png" alt="HTML,CSS,Javascript" />
        </div>
        </div>
        </div>
      </div>

      <div className='home-img'>
        <div>
          <img src="./assets/images/main_img.png" alt="ProfileImage" />
        </div>
      </div>
    </div>
    </section>
    </Element>
  )
}

export default Home