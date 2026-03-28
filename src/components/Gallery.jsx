import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: '/thali.png', alt: 'Delicious South Indian Thali', title: 'Traditional Thali' },
    { src: '/hero.png', alt: 'Elaborate Vegetarian Buffet', title: 'Buffet Spread' },
    // Reusing the generated images for now to create the gallery grid
    { src: '/Breakfast.png', alt: 'Catering Setup', title: 'Breakfast Thali' }
  ];

  return (
    <section className="gallery section-padding" id="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img.src} alt={img.alt} />
              <div className="item-overlay">
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
