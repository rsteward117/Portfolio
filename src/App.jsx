import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import Skills from './components/skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
    </>
  )
}

export default App
