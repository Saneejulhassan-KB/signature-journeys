import React, { useState } from 'react';
import './Gallery.css'; // Import the new CSS file
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const accordionData = [
  {
    title: 'Mysore',
    description: 'Explore the majestic Mysore Palace and the rich heritage of the royal city.',
    backgroundImageUrl: 'https://media.istockphoto.com/id/172124032/photo/mysore-palace-at-dusk.jpg?s=612x612&w=0&k=20&c=paO74C_dVsY14IbK0RNqs0TD-lSteQy-AW5CnQFEb_4=', // Placeholder, ensure image exists
  },
  {
    title: 'Banglore',
    description: 'Visit the Garden City of India, known for its vibrant culture and beautiful parks.',
    backgroundImageUrl: 'https://t3.ftcdn.net/jpg/02/68/05/88/360_F_268058852_WfyJ6ZywzBVTLoejioBqjUcbtyqm8KkV.jpg',
  },
  {
    title: 'Chennai',
    description: 'Experience the serenity of ancient temples and beautiful zen gardens in Kyoto.',
    backgroundImageUrl: 'https://live.staticflickr.com/7220/7319824942_b984306ab9_b.jpg',
  },
  {
    title: 'Ooty',
    description: 'Breathtaking views of the Amalfi Coast with its colorful villages and azure waters.',
    backgroundImageUrl: 'https://i.pinimg.com/736x/01/de/59/01de59bf3335fc312cdd74375b75c9a3.jpg',
  },
  {
    title: 'Kodaikanal',
    description: 'Discover the stunning natural beauty and dramatic landscapes of New Zealand.',
    backgroundImageUrl: 'https://i.pinimg.com/736x/4c/89/05/4c890587c7971a9fe5169184221272ad.jpg',
  },
  {
    title: 'Hyderabad',
    description: 'Step back in time at the iconic Colosseum, a testament to Roman engineering and history.',
    backgroundImageUrl: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/1721737562364_Charminar%202.jpg',
  },
  {
    title: 'Coorg',
    description: 'Step back in time at the iconic Colosseum, a testament to Roman engineering and history.',
    backgroundImageUrl: 'https://i.pinimg.com/736x/d3/f5/14/d3f514475ab559ba8b74ca89ba55ffdb.jpg',
  },
  {
    title: 'Kashmir',
    description: 'Step back in time at the iconic Colosseum, a testament to Roman engineering and history.',
    backgroundImageUrl: 'https://i.pinimg.com/736x/97/36/b6/9736b63fdfd6e297d767dd1cc53f8201.jpg',
  },
  {
    title: 'Agra',
    description: 'Step back in time at the iconic Colosseum, a testament to Roman engineering and history.',
    backgroundImageUrl: 'https://i.pinimg.com/736x/6f/a5/0e/6fa50e9f1fd1c9c2a2e61786ada1a0d7.jpg',
  },
  {
    title: 'Goa',
    description: 'Step back in time at the iconic Colosseum, a testament to Roman engineering and history.',
    backgroundImageUrl: 'https://i.pinimg.com/736x/82/05/3b/82053b8ad9805677bb4f659205e9a99a.jpg',
  },
  {
    title: 'Varanasi',
    description: 'Step back in time at the iconic Colosseum, a testament to Roman engineering and history.',
    backgroundImageUrl: 'https://i.pinimg.com/736x/38/92/47/389247bcf0086a3080808f565de43614.jpg',
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<typeof accordionData[0] | null>(null);

  const handleItemClick = (index: number) => {
    if (window.innerWidth <= 600) { // Mobile behavior
      if (activeIndex === index) {
        // Second tap on the active item opens the modal
        setSelectedItem(accordionData[index]);
      } else {
        // First tap on a collapsed item expands it
        setActiveIndex(index);
      }
    } else {
      // Desktop behavior: directly open the modal
      setSelectedItem(accordionData[index]);
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
                    
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="w-[92vw] sm:max-w-4xl p-0 overflow-hidden bg-background border-none shadow-2xl rounded-2xl sm:rounded-lg">
            {selectedItem && (
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 bg-black flex items-center justify-center">
                  <img 
                    src={selectedItem.backgroundImageUrl} 
                    alt={selectedItem.title} 
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                </div>
                <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
                  <DialogHeader className="p-0 text-left">
                    <DialogTitle className="text-3xl font-bold mb-4">{selectedItem.title}</DialogTitle>
                    <DialogDescription className="text-lg leading-relaxed text-muted-foreground">
                      {selectedItem.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-8">
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-secondary/90 hover:scale-105 active:scale-95"
                    >
                      Close Gallery
                    </button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
