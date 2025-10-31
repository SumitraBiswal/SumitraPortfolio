import React from 'react'
import "../Style/Home.css"
import { useNavigate } from 'react-router-dom'


function Home() {

const navigate=useNavigate();


  return (
    <div className='home-page'>
      <video
      className='background-vedio'
      src='/portfollio/portfollio vedio.mp4'
      autoPlay
      loop
      muted
      playsInline

       />
       <source src='/portfollio/portfollio vedio.mp4' type='video/mp4'/>
       <div className='overlay-content'>
       <div className='left-side'>
         <img src="/portfollio/chiky.jpeg" alt='profile' className='profile-img'/>
       </div>
        <div className='right-side'>
            <h1>
        Hi! there 👋 <span className='highlight-name'>I'am Sumitra</span>
        </h1>
        <h2>Full stack Developer || Degin, Develop, Deliver</h2>
        <hr className='blue-line '/>
        <p>From pixel to performance - I care about every step of development 💻✨ </p>
        <button onClick={()=>navigate('/resume')} className='resume-btn'>view resume</button>
        </div>
      
       </div>
        
    </div>
  

  )
}

export default Home
