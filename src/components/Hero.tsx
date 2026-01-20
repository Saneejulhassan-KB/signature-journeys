import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, MessageCircle, Plane, Train, Bus, FileText, 
  Map, Car, Building2, Stamp, Shield, FileCheck, Banknote, Ship 
} from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';

const services = [
  { 
    icon: Plane, 
    title: 'Air Ticketing', 
    desc: 'Domestic & international flights',
    color: 'from-blue-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Train, 
    title: 'Railway Ticketing', 
    desc: 'Confirmed train reservations',
    color: 'from-red-400 to-red-600',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb714c223?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Bus, 
    title: 'Bus Ticketing', 
    desc: 'Comfortable bus journeys',
    color: 'from-yellow-400 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: FileText, 
    title: 'Passport & Visa', 
    desc: 'Expert visa assistance',
    color: 'from-green-400 to-green-600',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Map, 
    title: 'Tour Packages', 
    desc: 'Customized holiday packages',
    color: 'from-orange-400 to-orange-600',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Car, 
    title: 'Car Rental', 
    desc: 'Reliable car rentals',
    color: 'from-indigo-400 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Building2, 
    title: 'Hotel Reservation', 
    desc: 'Luxury & budget stays',
    color: 'from-emerald-400 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Stamp, 
    title: 'Attestation', 
    desc: 'Embassy & document services',
    color: 'from-pink-400 to-pink-600',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Shield, 
    title: 'Travel Insurance', 
    desc: 'Comprehensive coverage',
    color: 'from-cyan-400 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: FileCheck, 
    title: 'Police Clearance', 
    desc: 'PCC documentation support',
    color: 'from-teal-400 to-teal-600',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Banknote, 
    title: 'Forex Services', 
    desc: 'Currency exchange',
    color: 'from-lime-400 to-lime-600',
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Ship, 
    title: 'Luxury Cruises', 
    desc: 'Premium sea voyages',
    color: 'from-sky-400 to-sky-600',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80'
  },
];

const Hero = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 4) % services.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleServices = services.slice(startIndex, startIndex + 4);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello! I would like to enquire about your travel services.'
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={'./paradisiacal-landscape-with-ocean.jpg'}
          alt="Beautiful tropical destination"
          className="w-full h-full object-cover"
        />
        {/* Top gradient for navbar visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent opacity-100" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-primary-foreground"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-medium">Trusted by 5400+ Travelers</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              Crafting Journeys.
              <br />
              <span className="text-gold">Creating Memories.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed"
            >
              Experience world-class travel services with IATA & ISO certified excellence. 
              From dream destinations to seamless journeys—we make every trip unforgettable.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-hero-primary flex items-center gap-2 group"
              >
                Plan Your Trip
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={openWhatsApp}
                className="btn-hero-outline flex items-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Enquiry
              </button>
            </motion.div>
          </motion.div>

          {/* Services Grid - Desktop */}
          <div className="hidden lg:grid grid-cols-2 gap-6 relative min-h-[420px]">
           
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10" />
            
            <AnimatePresence mode="wait">
              {visibleServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotateY: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90, transition: { duration: 0.3 } }}
                  whileHover={{ 
                    scale: 1.15, 
                    zIndex: 20,
                    transition: { duration: 0.3 }
                  }}
                  className="relative p-6 rounded-2xl border border-white/10 backdrop-blur-md cursor-pointer flex flex-col items-start justify-between h-48 group overflow-hidden"
                >
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" /> 
                  </div>

                  
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div className={`
                      w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} 
                      flex items-center justify-center text-white shadow-lg mb-4 
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-display font-bold text-white mb-2 drop-shadow-md">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed font-medium drop-shadow-sm">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>


      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
