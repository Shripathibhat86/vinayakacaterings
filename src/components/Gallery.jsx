import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: '/Cutlet.png', alt: '', title: 'Cutlet' },
    { src: '/Gari Ladu.png', alt: '', title: 'Gari Ladu' },
    // Reusing the generated images for now to create the gallery grid
    { src: '/Gauva Sweet.png', alt: '', title: 'Gauva Sweet' },
    { src: '/Apple Sweet.png', alt: '', title: 'Apple Sweet' },
    { src: '/Chakkuli.png', alt: '', title: 'Chakkuli' },
    { src: '/Dahi Vada.png', alt: '', title: 'Dahi Vada' }
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
