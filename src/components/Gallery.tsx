import React, { useState } from 'react';
import './Gallery.css'; // Import the new CSS file

const accordionData = [
  {
    title: 'Swiss Alps Adventure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', // Placeholder, ensure image exists
  },
  {
    title: 'Maldives Paradise',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1520483601560-389dff434fdf?w=800',
  },
  {
    title: 'Kyoto Temples',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
  },
  {
    title: 'Italian Coastline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800',
  },
  {
    title: 'New Zealand Landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
  },
  {
    title: 'Rome Colosseum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    if (window.innerWidth <= 600) { // Apply only on mobile (adjust breakpoint if needed)
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Travel Memories
          </span>
          <h2 className="section-title mb-6">
            Our Photo <span className="text-secondary">Gallery</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore unforgettable moments from our curated travel experiences.
          </p>
        </div>
        <div className="gallery-accordion">
          
          <ul className="gallery-ul">
            {accordionData.map((item, index) => (
              <li 
                key={index} 
                tabIndex={0} 
                className={`gallery-li ${activeIndex === index ? 'active' : ''}`}
                style={{ backgroundImage: `url(${item.backgroundImageUrl})` }}
                onClick={(event) => {
                  event.preventDefault();
                  handleItemClick(index);
                }}
              >
                <div className="gallery-div">
                  <a className="gallery-a">
                    <h2 className="gallery-h2" >{item.title}</h2>
                    <p className="gallery-p">{item.description}</p>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;
