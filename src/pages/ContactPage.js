import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p>Ready to bring the timeless beauty of reclaimed teakwood to your space? Contact us for consultations, quotes, and expert advice.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="flooring">Flooring Inquiry</option>
                      <option value="staircase">Staircase Inquiry</option>
                      <option value="cladding">Cladding Inquiry</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request Quote</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Address</h3>
                    <p>Sy NO 3/5, Venkateshapura village,<br />Yalahanka hobli, Jakkur Post,<br />Bangalore - 560064</p>
                    <a 
                      href="https://maps.google.com/?q=Sy+NO+3/5,+Venkateshapura+village,+Yalahanka+hoobli,+Jakkur+Post,+Bangalore-560064" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="map-link"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+919886656271">+91 9886656271</a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:msbros@hotmail.co.in">msbros@hotmail.co.in</a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-content">
                    <h3>Business Hours</h3>
                    <p>
                      <strong>Monday - Saturday:</strong><br />
                      9:00 AM - 6:00 PM<br />
                      <strong>Sunday:</strong> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;