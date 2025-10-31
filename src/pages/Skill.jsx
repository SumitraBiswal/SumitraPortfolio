import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaTools,
  FaAngular,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import "../Style/skill.css";

const technicalSkills = [
  { name: "HTML", level: 95, icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", level: 85, icon: <FaJsSquare color="#F7DF1E" /> },
  { name: "React.js", level: 80, icon: <FaReact color="#61DAFB" /> },
  { name: "Node.js", level: 75, icon: <FaNodeJs color="#339933" /> },
  { name: "MySQL", level: 70, icon: <FaDatabase color="#00618A" /> },
  { name: "Git & GitHub", level: 85, icon: <FaGitAlt color="#F05032" /> },
  { name: "Postman", level: 75, icon: <FaTools color="#FF6C37" /> },
];

const learningNow = [
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Angular", icon: <FaAngular color="#DD0031" /> },
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Communication",
  "Adaptability",
  "Leadership",
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h2 className="skills-heading">My Skills</h2>

      
      <div className="skills-section">
        <h3 className="section-title">💻 Technical Skills</h3>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-top">
                <span className="icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning */}
      <div className="skills-section learning-now">
        <h3 className="section-title">📘 Currently Learning</h3>
        <div className="learning-grid">
          {learningNow.map((skill, index) => (
            <div className="learning-card" key={index}>
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="skills-section soft-skill-section">
        <h3 className="section-title">💬 Soft Skills</h3>
        <ul className="soft-skill-list">
          {softSkills.map((skill, index) => (
            <li key={index} className="soft-skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;