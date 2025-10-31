import React, { useState } from "react";
import "../Style/project.css";

const projects = [
  {
    id: 1,
    title: "Online Groceray app",
    description: "A full-stack app built with React.js, Node.js, and MySQL for managing books and students.",
    image: "/portfollio/Quick Shop.jpeg",
    link: "https://github.com/yourusername/library-management-system"
  },
  {
    id: 2,
    title: "Online Book Store",
    description: "A shopping app built with React.js and Express.js with cart and product management.",
    image: "/portfollio/Inkspire.jpeg",
    link: "https://your-live-demo-link.com"
  },
  {
    id: 3,
    title: "Tic Tac Toe game",
    description: "A personal portfolio showcasing skills and projects built with React and Tailwind CSS.",
    image: "/portfollio/Tic-Tac-Toe.jpeg",
    link:"https://tictactoe-indol-phi.vercel.app"
  },
    {
    id: 3,
    title: "ToDo App Website",
    description: "A personal portfolio showcasing skills and projects built with React and Tailwind CSS.",
    image: "/portfollio/TODO App.jpeg",
    link: "https://github.com/yourusername/portfolio"
  },
];

function Project() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="project-section" id="projects">
      <h2 className="project-heading">Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-btns">
              {/* ✅ This link opens in a new tab */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Project
              </a>

              {/* ✅ This button opens full image preview */}
              <button
                className="view-btn"
                onClick={() => setSelectedImage(project.image)}
              >
                View Image
              </button>
            </div>

            {selectedImage === project.image && (
              <div
                className="image-modal"
                onClick={() => setSelectedImage(null)}
              >
                <img src={selectedImage} alt="Project Preview" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;