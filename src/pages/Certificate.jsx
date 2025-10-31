import React, { useState } from "react";
import "../Style/certificate.css";
import Footer from "../Components/Footer";

const certificates = [
  {
    id: 1,
    title: "java Developer Certificate",
    platform: "udemy",
    image: "/portfollio/javacertificate.jpeg",
 
  },
  {
    id: 2,
    title: "React.js",
    platform: "Udemy",
    image: "/portfollio/reactcertificate.jpeg",
  
  },
  {
    id: 3,
    title: "Engineering Geology",
    platform: "swayam",
    image: "/portfollio/Swayam2.jpeg"

  },
];

function Certificate() {
  const [selectedImage , setSelectedImage]=useState(false);
  return (
    <section className="certificate-section" id="certificates">
      <h2 className="certificate-heading">Certificates</h2>

      <div className="certificate-grid">
        {certificates.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.platform}</p>
          
              <button className="view-btn" onClick={()=>setSelectedImage(cert.image)}>View Certificate</button>
            
         
          </div>
        ))}
       
      </div>
      {selectedImage && (
          <div 
          className="image-model" onClick={()=>setSelectedImage(null)}>
            <img src={selectedImage} alt="certificate" className="certificate-full"/>
            </div>
         )}
         
      
    </section>

   
  );
}

export default Certificate;
