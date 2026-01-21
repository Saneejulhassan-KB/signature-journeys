import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, 
  Train, 
  Bus, 
  FileText, 
  Map, 
  Car, 
  Building2, 
  Stamp,
  Shield,
  FileCheck,
  Banknote,
  Ship,
  ChevronDown
} from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Air Ticketing',
    description: 'Domestic & international flight bookings at competitive prices with 24/7 support.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Train,
    title: 'Railway Ticketing',
    description: 'Hassle-free train reservations across India with confirmed tickets.',
    image: 'https://images.unsplash.com/photo-1474487056289-622ad5096174?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Bus,
    title: 'Bus Ticketing',
    description: 'Comfortable bus travel bookings for short and long-distance journeys.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: FileText,
    title: 'Passport & Visa',
    description: 'Complete passport and visa assistance for all countries with expert guidance.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Map,
    title: 'Tour Packages',
    description: 'Curated domestic and international tour packages tailored to your preferences.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Car,
    title: 'Car Rental',
    description: 'Reliable car rental services with professional drivers for all occasions.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Building2,
    title: 'Hotel Reservation',
    description: 'Best hotel deals worldwide from budget stays to luxury resorts.',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Stamp,
    title: 'Embassy Attestation',
    description: 'Document attestation services for all embassies and government offices.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive international travel insurance for peace of mind.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: FileCheck,
    title: 'Police Clearance',
    description: 'PCC assistance and documentation support for immigration purposes.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Banknote,
    title: 'Forex Services',
    description: 'Foreign exchange and international fund transfer at best rates.',
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Ship,
    title: 'Luxury Cruises',
    description: 'Premium cruise liner bookings for unforgettable sea voyages.',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 8);

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="section-title mb-6">
            Complete Travel <span className="text-secondary">Solutions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From flight bookings to luxury cruises, we offer end-to-end travel services 
            designed to make your journey seamless and memorable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: showAll ? 0 : index * 0.05 }}
                className="card-service group cursor-pointer relative"
              >
                {/* Background Image and Overlay Container (Contained) */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {/* Background Image (Always Visible) */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-110 group-hover:scale-100 opacity-100"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  
                  {/* Dark Overlay (Always Visible, becomes lighter on hover to show image clearly) */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500" />
                </div>

                {/* Unique Design Shape at Bottom Left (Outwards) */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 -translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 z-20 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-secondary fill-current drop-shadow-xl">
                    <path d="M0 100 L0 20 Q0 0 20 0 L100 0 L100 100 Z" className="opacity-40" />
                    <path d="M15 85 L15 40 Q15 25 30 25 L75 25 L75 85 Z" className="opacity-60" />
                  </svg>
                </div>
                
                {/* Glow effect for the shape */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl opacity-100 group-hover:opacity-100 transition-all duration-700 z-0" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Professional View More/Less Design */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white border border-border rounded-full text-foreground font-semibold transition-all duration-500 hover:border-secondary hover:text-secondary hover:shadow-xl hover:shadow-secondary/10 overflow-hidden"
          >
            <span className="relative z-10">
              {showAll ? 'Show Less' : 'Discover All Services'}
            </span>
            <motion.div
              animate={showAll ? { y: [0, -4, 0] } : { y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className={`w-5 h-5 relative z-10 transition-transform duration-500 ${showAll ? 'rotate-180' : ''}`} />
            </motion.div>
            
            {/* Animated background on hover */}
            <div className="absolute inset-0 bg-secondary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          
          <div className="mt-6 flex items-center justify-center gap-4 text-muted-foreground/40">
            <div className="h-[1px] w-12 bg-current" />
            <span className="text-xs uppercase tracking-widest font-medium">
              {showAll ? 'Collapse services' : 'Explore more options'}
            </span>
            <div className="h-[1px] w-12 bg-current" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
