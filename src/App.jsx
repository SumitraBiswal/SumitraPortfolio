
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Skill from './pages/Skill'
import Certificate from './pages/Certificate'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
   const location =useLocation();

  return (
    <>
    <video
      className='background-vedio'
      src='/portfollio/portfollio vedio.mp4'
      autoPlay
      loop
      muted
      playsInline

       />
       <source src='/portfollio/portfollio vedio.mp4' type='video/mp4'/>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/about" element = {<About/>} />
      <Route path = "/resume" element = {<Resume/>} />
      <Route path = "/skill" element = {<Skill/>} />
      <Route path = "/certificate" element = {<Certificate/>} />
      <Route path = "/project" element = {<Project/>} />
      <Route path = "/contact" element = {<Contact/>} />
    </Routes>
    {location.pathname !== "/" && <Footer/>}
   
    </>
  )
}

export default App
