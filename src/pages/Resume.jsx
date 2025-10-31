import React from "react";
import "../Style/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>

      {/* About Section */}
      <section className="resume-section">
        <h2>About Me</h2>
        <p>
          I’m <strong>Sumitra Biswal</strong>, an enthusiastic and detail-oriented 
          <strong> Full Stack Developer</strong> with a background in 
          <strong> Geology (M.Sc.)</strong>. I’m passionate about creating dynamic, 
          user-friendly, and responsive web applications using modern technologies 
          like React.js and Node.js. I’m a quick learner, adaptable, and enjoy 
          collaborating in innovative environments.
        </p>
      </section>

      {/* Objective Section */}
      <section className="resume-section">
        <h2>Career Objective</h2>
        <p>
          To secure a challenging position as a <strong>Full Stack Developer</strong> 
          where I can apply my technical expertise in React.js, Node.js, and database 
          management to build impactful, scalable, and efficient web solutions while 
          continuously learning and growing professionally.
        </p>
      </section>

      {/* Education Section */}
      <section className="resume-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>M.Sc. in Geology</strong> — Govt. College Sundargarh (Sambalpur University), 2024<br />
            <span className="small-text">CGPA: 8.31</span>
          </li>
          <li>
            <strong>B.Sc. in Geology</strong> — Govt. Women’s College Sundargarh, 2022<br />
            <span className="small-text">CGPA: 8.72</span>
          </li>
          <li>
            <strong>PGDCA</strong> — Infoage Sundargarh, 2022<br />
            <span className="small-text">Percentage: 68%</span>
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <ul>
            <li><strong>Languages:</strong> Java, JavaScript, C, C++, SQL</li>
            <li><strong>Frontend:</strong> HTML, CSS, React.js, Next.js</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
          </ul>
          <ul>
            <li><strong>Database:</strong> MySQL, MongoDB</li>
            <li><strong>Tools:</strong> VS Code, GitHub, Excel , Postmen</li>
            <li><strong>Soft Skills:</strong> Communication, Teamwork, Problem Solving</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="resume-section">
        <h2>Projects</h2>
        <div className="project">
          <h3>🛒 QuickShop – Grocery Web App</h3>
          <p>
            A responsive grocery shopping web app built with React.js and JavaScript. 
            Includes product listing, category filtering, and cart management features. 
            Integrated Google Forms API for feedback.
          </p>
        </div>

        <div className="project">
          <h3>📚 Inkspire – Online Book Shopping App</h3>
          <p>
            A full-stack MERN book store app with user login, book catalog, and order 
            processing functionality. Designed with responsive layout and seamless 
            frontend-backend integration.
          </p>
        </div>

        <div className="project">
          <h3>🏫 Library Management System</h3>
          <p>
            A Java + MySQL desktop system to manage books, members, and transactions. 
            Features user authentication, issue/return, and fine calculation.
          </p>
        </div>

        <div className="project">
          <h3>✅ To-Do List App</h3>
          <p>
            A MERN stack app with authentication, CRUD operations, and task tracking 
            for daily productivity.
          </p>
        </div>
      </section>

      {/* Download Button */}
      <div className="resume-button">
     <a href="/portfollio/Sumitra Biswal cv.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
          View Resume (Pdf)
        </a>
        <a href="/portfollio/Sumitra Biswal cv.pdf" download className="download-btn">
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
};

export default Resume;