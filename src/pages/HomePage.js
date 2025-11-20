import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './HomePage.css';

const HomePage = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);

  // Background images - Updated with your 5 background images
  const backgroundImages = [
    '/images/background/background1.jpg', // Teakwood image 1
    '/images/background/background2.jpg', // Teakwood image 2
    '/images/background/background3.jpg', // Teakwood image 3
    '/images/background/background4.jpg', // Teakwood image 4
    '/images/background/background5.jpg'  // Teakwood image 5
  ];

  // Auto-slide background images - Fixed useEffect dependency
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]); // Added dependency

  // FAQ data with rephrased content
  const faqData = [
    {
      question: "What Makes Reclaimed Teakwood Special?",
      answer: "Reclaimed teakwood represents wood that has been revitalized for contemporary use. Originating from historic establishments including government buildings, educational institutions, railway infrastructure, and traditional residences, this superior timber comes from naturally matured trees rather than cultivated plantations found in modern options."
    },
    {
      question: "Who is Greenwoods?",
      answer: "Greenwoods stands as one of Bengaluru's leading specialists in repurposed timber. With a longstanding reputation built over decades, we provide exceptionally processed reclaimed wood suitable for diverse residential applications including doors and frames, flooring solutions, wall cladding, decorative paneling, and interior design elements."
    },
    {
      question: "Benefits of Choosing Reclaimed Timber",
      answer: "Repurposed teakwood maintains all the valued attributes including elevated oil concentration, exceptional density, deep coloration, and attractive natural patterns. Through revitalizing this material, we gain access to premium quality timber while simultaneously protecting our forest resources and minimizing ecological footprint, creating an environmentally conscious and socially aware substitute for newly harvested wood."
    },
    {
      question: "Our Environmental Mission",
      answer: "At Greenwoods, we maintain an authentic and passionate commitment to fostering sustainable ecological practices. When you select reclaimed timber, you're actively conserving an estimated 50-100 years of tree development with every piece, playing a vital role in creating a more environmentally healthy world for upcoming generations."
    },
    {
      question: "Our Artisan Approach",
      answer: "We meticulously select our timber and undertake careful restoration processes by repairing imperfections, filling fastener indentations and surface irregularities with appropriate wood-compatible epoxy compounds, and performing multiple sanding stages to achieve flawless consistency. Our dedication to superior craftsmanship guarantees outstanding quality in every finished product."
    }
  ];

  return (
    <div className="home-page">
      <Navigation />
      
      {/* Background Image Slider */}
      <div className="background-slider">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`background-slide ${index === currentBg ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${img})` // Use your actual image paths
            }}
          />
        ))}
        <div className="background-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="company-name">Greenwoods</h1>
          <p className="tagline">Premium Reclaimed Teakwood Specialists</p>
          <p className="subtagline">Transforming Historic Timber into Timeless Beauty</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">View Our Products</Link>
            <Link to="/contact" className="btn btn-secondary">Get Consultation</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Discover Reclaimed Teakwood</h2>
          
          <div className="faq-content">
            {/* Question Navigation */}
            <div className="question-nav">
              {faqData.map((item, index) => (
                <button
                  key={index}
                  className={`nav-item ${activeQuestion === index ? 'active' : ''}`}
                  onClick={() => setActiveQuestion(index)}
                >
                  {item.question}
                </button>
              ))}
            </div>

            {/* Answer Display */}
            <div className="answer-display">
              <div className="answer-content">
                <h3>{faqData[activeQuestion].question}</h3>
                <p>{faqData[activeQuestion].answer}</p>
              </div>
              
              {/* Progress Dots */}
              <div className="progress-dots">
                {faqData.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${activeQuestion === index ? 'active' : ''}`}
                    onClick={() => setActiveQuestion(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Space?</h2>
            <p>Experience the beauty and sustainability of reclaimed teakwood</p>
            <Link to="/contact" className="btn btn-primary">Get Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;