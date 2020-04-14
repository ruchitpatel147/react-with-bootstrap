import React from 'react'
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Slider from './Slider';

function Home () {
  return (
    <div>
      <Slider/>
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default Home