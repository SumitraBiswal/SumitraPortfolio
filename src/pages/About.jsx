import React from "react";
import "../Style/about.css";


function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      {/* Section 1 - Image Left */}
      <section className="about-section">
        <div className="about-image">
          <img
            src="/portfollio/image2.jpeg"
            alt="Sumitra"
            className="profile-img"
          />
        </div>
        <div className="about-content">
          <p>
            I am <span className="highlight">Sumitra</span>, a passionate
            <span className="highlight"> Full Stack Developer</span> driven by
            curiosity and the desire to turn ideas into real-world digital
            experiences. My journey began with fascination for how code shapes
            the world, inspiring me to continuously learn and evolve.

          </p>

        </div>
      </section>
       <hr className="divider" />
      <section className="about-section reverse">
        <div className="about-image">
          <img
            src="/portfollio/image1.jpeg"
            alt="Sumitra working"
            className="about-img"
          />
        </div>
        <div className="about-content">
          <p>
            Coming from an <span className="highlight">MSc academic background</span>,
            my transition into technology was both
            <span className="highlight"> challenging and inspiring</span>.
            Through constant learning and adaptability, I built a strong
            foundation in programming, problem-solving, and web development.
          </p>
           <p>
            Every project I take is a chance to
            <span className="highlight"> learn, innovate, and grow</span> —
            pushing boundaries while creating meaningful digital solutions.
          </p>
        </div>
      </section>
      <hr className="divider" />
      <section className="personal-info">
        <h2 className="section-title">Personal Information</h2>
        <ul>
          <li><strong>Date of Birth:</strong> 21/10/2001</li>
          <li><strong>Age:</strong> 24</li>
          <li><strong>Marital Status:</strong> Unmarried</li>
          <li><strong>Nationality:</strong> Indian</li>
          <li><strong>Profession:</strong> Student</li>
          <li><strong>Degree:</strong> MSc</li>
          <li><strong>Email:</strong> abc@gmail.com</li>
          <li><strong>City:</strong> Odisha</li>
          <li><strong>Pin Code:</strong> 77001</li>
          <li><strong>Ready to Work:</strong> Yes</li>
        </ul>
      </section>
     
    </div>
  );
}

export default About;