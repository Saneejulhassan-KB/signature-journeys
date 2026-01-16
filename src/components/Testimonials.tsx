import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    name: 'Arun Krishnan',
    location: 'Kottayam',
    rating: 5,
    text: 'Exceptional service! goSignature made our family trip to Europe absolutely flawless. From visa assistance to hotel bookings, everything was perfectly coordinated. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    name: 'Priya Thomas',
    location: 'Ernakulam',
    rating: 5,
    text: 'The team at goSignature went above and beyond for our honeymoon in Maldives. Every detail was taken care of. Truly a world-class travel agency!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    name: 'Mohammed Faisal',
    location: 'Dubai',
    rating: 5,
    text: 'Best travel agency I have ever worked with. Their visa processing is incredibly efficient and their prices are very competitive. 5 stars!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  },
  {
    name: 'Lakshmi Nair',
    location: 'Piravom',
    rating: 5,
    text: 'Professional, reliable, and always available. goSignature has been our family\'s go-to travel partner for 4 years now. Never disappointed!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
  {
    name: 'George Mathew',
    location: 'Monippally',
    rating: 5,
    text: 'Their attention to detail is remarkable. From airport pickup to hotel recommendations, everything was perfect. A truly premium travel experience!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="section-title mb-6">
            What Our <span className="text-secondary">Travelers Say</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Join over 5400+ happy travelers who have experienced the goSignature difference.
          </p>
        </motion.div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <a
            href="https://www.google.com/search?q=goSignature+Travel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-2xl font-display font-bold text-foreground">4.9</span>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <div className="font-semibold text-foreground">1000+ Reviews</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                View on Google <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50"
            >
              <Quote className="w-12 h-12 text-secondary/30 mb-6" />
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-secondary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[current].location}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-card shadow-soft hover:shadow-medium flex items-center justify-center transition-all duration-300 border border-border/50"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setAutoPlay(false); setCurrent(index); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-secondary w-8' : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-card shadow-soft hover:shadow-medium flex items-center justify-center transition-all duration-300 border border-border/50"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
