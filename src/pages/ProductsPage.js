import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './ProductsPage.css';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('flooring');
  const [selectedImage, setSelectedImage] = useState(null);

  const productCategories = {
    flooring: {
      name: 'Flooring',
      description: 'Premium reclaimed teakwood flooring that adds warmth and character to any space. Each plank tells a story of its previous life with unique grain patterns and natural aging.',
      features: [
        'Aged to perfection with natural patina',
        'Unique grain patterns and character marks',
        'Environmentally sustainable',
        'Extremely durable and long-lasting',
        'Easy maintenance and care'
      ],
      images: [
        '/images/flooring/flooring-1.jpg',
        '/images/flooring/flooring-2.jpg',
        '/images/flooring/flooring-3.jpg',
        '/images/flooring/flooring-4.jpg',
        '/images/flooring/flooring-5.jpg',
        '/images/flooring/flooring-6.jpg',
        '/images/flooring/flooring-7.jpg',
        '/images/flooring/flooring-8.jpg'
      ]
    },
    staircase: {
      name: 'Staircase',
      description: 'Custom-crafted staircase solutions using reclaimed teakwood. Transform your stairways into stunning architectural features that make a statement.',
      features: [
        'Custom designs tailored to your space',
        'Structural integrity and safety',
        'Handcrafted details and finishes',
        'Slip-resistant surfaces',
        'Professional installation'
      ],
      images: [
        '/images/staircase/staircase-1.jpg',
        '/images/staircase/staircase-2.jpg',
        '/images/staircase/staircase-3.jpg',
        '/images/staircase/staircase-4.jpg',
        '/images/staircase/staircase-5.jpg',
        '/images/staircase/staircase-6.jpg',
        '/images/staircase/staircase-7.jpg'
      ]
    },
    cladding: {
      name: 'Cladding',
      description: 'Beautiful wall cladding that brings the rustic charm of reclaimed teakwood to your interior and exterior spaces. Create feature walls that tell a story.',
      features: [
        'Weather resistant and durable',
        'Natural thermal insulation',
        'Easy maintenance and cleaning',
        'Timeless aesthetic appeal',
        'Suitable for indoor and outdoor use'
      ],
      images: [
        '/images/cladding/cladding-1.jpg',
        '/images/cladding/cladding-2.jpg',
        '/images/cladding/cladding-3.jpg'
      ]
    }
  };

  const currentCategory = productCategories[selectedCategory];

  return (
    <div className="products-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Premium Products</h1>
            <p>Discover the beauty and sustainability of reclaimed teakwood in every piece</p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="category-nav">
        <div className="container">
          <div className="category-buttons">
            {Object.keys(productCategories).map((categoryKey) => (
              <button
                key={categoryKey}
                className={`category-btn ${selectedCategory === categoryKey ? 'active' : ''}`}
                onClick={() => setSelectedCategory(categoryKey)}
              >
                {productCategories[categoryKey].name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="product-gallery-section">
        <div className="container">
          <div className="gallery-content">
            {/* Product Info */}
            <div className="product-info">
              <h2>{currentCategory.name}</h2>
              <p className="product-description">{currentCategory.description}</p>
              
              <div className="product-features">
                <h3>Key Features</h3>
                <ul>
                  {currentCategory.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions">
                <Link to="/contact" className="btn btn-primary">Get Free Consultation</Link>
              </div>
            </div>

            {/* Product Gallery */}
            <div className="product-gallery">
              <div className="main-gallery">
                <div className="main-image">
                  <img 
                    src={currentCategory.images[0]} 
                    alt={currentCategory.name}
                    onClick={() => setSelectedImage(currentCategory.images[0])}
                  />
                </div>
              </div>
              
              <div className="thumbnail-grid">
                {currentCategory.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="thumbnail"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image} alt={`${currentCategory.name} ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;