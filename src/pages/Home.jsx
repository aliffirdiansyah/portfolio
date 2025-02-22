import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { skillsList } from '../data/skillsSection'

function Home() {
  return (
    <div>
      <>
      <About/>
      <Skills skillsList={skillsList}/>
      <Projects/>
      <Contact/>
      
      </>
    </div>
  )
}

export default Home
