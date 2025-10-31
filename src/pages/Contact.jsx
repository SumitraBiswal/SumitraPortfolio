import React from 'react';
import style from "../Style/contact.module.css";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "894f5d70-413c-4be9-98f6-ebd9cc5392a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <div className={style.contactWrapper} id="contact">
      <h2>Contact Us</h2>

      <div className={style.contactContainer}>
        {/* 🗺️ Map Section */}
        <div className={style.mapContainer}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.392640723037!2d86.97004867470553!3d21.93999956050066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1f0017cc1eb0e3%3A0x8da3b0f1b2c8d7a8!2sSundargarh%2C%20Odisha%2C%20India!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* 📩 Contact Form */}
        <form onSubmit={onSubmit} className={style.contactForm}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your mobile number" required />

          <label htmlFor="message">Write Your Message</label>
          <textarea id="message" name="message" rows={6} placeholder="Enter your message" required></textarea>

          <button type="submit" className={style.submitBtn}>
            Submit Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.arrowIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="20"
              height="20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>

      {result && <p className={style.resultMessage}>{result}</p>}
    </div>
  );
}