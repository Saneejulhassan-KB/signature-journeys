import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    title: 'Swiss Alps Adventure',
    category: 'Mountains',
  },
  {
    url: 'https://images.unsplash.com/photo-1520483601560-389dff434fdf?w=800',
    title: 'Maldives Paradise',
    category: 'Beach',
  },
  {
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
    title: 'Kyoto Temples',
    category: 'Culture',
  },
  {
    url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800',
    title: 'Italian Coastline',
    category: 'Europe',
  },
  {
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    title: 'New Zealand Landscape',
    category: 'Nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
    title: 'Rome Colosseum',
    category: 'Culture',
  },
  {
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    title: 'Dubai Skyline',
    category: 'City',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    title: 'Tropical Beach',
    category: 'Beach',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Gallery
          </span>
          <h2 className="section-title mb-6">
            Travel <span className="text-secondary">Memories</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore stunning destinations and moments from our travelers' unforgettable journeys.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-gold text-xs font-medium uppercase tracking-wide">
                  {image.category}
                </span>
                <h3 className="text-primary-foreground font-semibold text-lg">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary-foreground" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-primary-foreground" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto rounded-2xl shadow-dramatic"
              />
              <div className="text-center mt-6">
                <span className="text-gold text-sm font-medium uppercase tracking-wide">
                  {galleryImages[selectedImage].category}
                </span>
                <h3 className="text-primary-foreground font-display font-bold text-2xl mt-2">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
