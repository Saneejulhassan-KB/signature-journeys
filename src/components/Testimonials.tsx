import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    name: 'Arun Krishnan',
    location: 'Kottayam',
    rating: 5,
    text: 'Exceptional service! Uthram Yathra Holidays made our family trip to Europe absolutely flawless. From visa assistance to hotel bookings, everything was perfectly coordinated. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    name: 'Priya Thomas',
    location: 'Ernakulam',
    rating: 5,
    text: 'The team at Uthram Yathra Holidays went above and beyond for our honeymoon in Maldives. Every detail was taken care of. Truly a world-class travel agency!',
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
    text: "Professional, reliable, and always available. Uthram Yathra Holidays has been our family's go-to travel partner for 4 years now. Never disappointed!",
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
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

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
    <section 
      id="testimonials" 
      ref={containerRef}
      className="section-padding relative overflow-hidden min-h-[600px] flex items-center"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          alt="Travel Background"
          className="w-full h-[150%] object-cover"
        />
      </motion.div>

      <div className="container-custom relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold mb-4 backdrop-blur-md border border-white/10">
            Testimonials
          </span>
          <h2 className="section-title mb-6 text-white text-shadow-lg">
            What Our <span className="text-secondary-foreground font-extrabold">Travelers Say</span>
          </h2>
          <p className="section-subtitle mx-auto text-white/80">
            Join over 1000+ happy travelers who have experienced the Uthram Yathra Holidays difference.
          </p>
        </motion.div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/20 transition-all duration-500 border border-white/20 group"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-2xl font-display font-bold text-white">4.9</span>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-left">
              <div className="font-semibold text-white">1000+ Reviews</div>
              <div className="text-sm text-white/60 flex items-center gap-1 group-hover:text-white transition-colors">
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
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote className="w-32 h-32 text-white" />
              </div>
              
              <Quote className="w-12 h-12 text-secondary/60 mb-6" />
              
              <p className="text-lg md:text-2xl text-white font-medium leading-relaxed mb-8 relative z-10 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white/20 shadow-xl"
                />
                <div>
                  <h4 className="font-bold text-white text-xl">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-white/60 text-sm font-medium">
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
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={goToPrevious}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md shadow-lg hover:bg-white/20 flex items-center justify-center transition-all duration-300 border border-white/20 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setAutoPlay(false); setCurrent(index); }}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === current 
                      ? 'bg-secondary w-10 shadow-[0_0_15px_rgba(229,29,57,0.5)]' 
                      : 'bg-white/20 w-2.5 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md shadow-lg hover:bg-white/20 flex items-center justify-center transition-all duration-300 border border-white/20 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
