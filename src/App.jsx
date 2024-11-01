import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Componants/Navbar/Navbar'
import Home from './Componants/Home/Home'
import About from './Componants/About/About';
import Project from './Componants/Project/Project';
import Contact from './Componants/Contact/Contact';
import Footer from './Componants/Footer/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
