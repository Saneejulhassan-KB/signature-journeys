import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Award, Shield, Users, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';

const stats = [
  { icon: Award, value: 'IATA', label: 'Certified' },
  { icon: Shield, value: 'ISO', label: 'Certified' },
  { icon: Users, value: '5400+', label: 'Happy Travelers' },
  { icon: Globe, value: '12', label: 'Overseas Partners' },
];

const Hero = () => {
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
          src={heroImage}
          alt="Beautiful tropical destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
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

          {/* Stats Cards - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <stat.icon className="w-10 h-10 text-gold mb-4" />
                <div className="text-3xl font-display font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-display font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 text-xs font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
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
