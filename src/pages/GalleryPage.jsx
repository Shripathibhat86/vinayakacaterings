import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import MarqueeBanner from '../components/MarqueeBanner';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-page">
      <Hero title="Gallery" subtitle="Our Event Photos" />
      <Gallery />
      <MarqueeBanner />
    </div>
  );
};

export default GalleryPage;
