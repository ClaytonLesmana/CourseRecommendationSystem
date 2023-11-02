import React, { useState, useEffect } from 'react';
import '../styles/Contact.css'; // Adjust the import path

function Contact() {
  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact" className="active">
            Contact
          </a>
        </nav>
      </header>

      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any questions or inquiries.</p>

        {/* Add your contact form here */}
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>

        <div className="contact-info-header">
          <h2>Course Matcher</h2>
        </div>

        <div className="contact-info">
          <ul>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@coursematcher.com</li>
          </ul>
        </div>

        <h3>UTS Student Help Services</h3>
        <ul>
          <li>Phone: 1300 275 887</li>
          <li>Email: support@open.uts.edu.au</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
