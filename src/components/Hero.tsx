import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
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
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const services = [
  {
    icon: Bus,
    title: "Bus Ticketing",
    description:
      "Comfortable bus travel bookings for short and long-distance journeys.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Users,
    title: "Pro Driver Services",
    description:
      "Experienced and reliable drivers available for outstation trips, tours, and private travel ensuring safe and comfortable journeys.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Bus,
    title: "Tourist Bus Services",
    description:
      "Own fleet of well-maintained tourist buses for group tours, school trips, pilgrimages, and corporate travel across India.",
    image:
      "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Plane,
    title: "Air Ticketing",
    description:
      "Domestic & international flight bookings at competitive prices with 24/7 support.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Train,
    title: "Railway Ticketing",
    description:
      "Hassle-free train reservations across India with confirmed tickets.",
    image:
      "https://images.unsplash.com/photo-1474487056289-622ad5096174?auto=format&fit=crop&q=80&w=800",
  },

  {
    icon: FileText,
    title: "Passport & Visa",
    description:
      "Complete passport and visa assistance for all countries with expert guidance.",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Map,
    title: "Tour Packages",
    description:
      "Curated domestic and international tour packages tailored to your preferences.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Car,
    title: "Car Rental",
    description:
      "Reliable car rental services with professional drivers for all occasions.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Building2,
    title: "Hotel Reservation",
    description:
      "Best hotel deals worldwide from budget stays to luxury resorts.",
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Stamp,
    title: "Embassy Attestation",
    description:
      "Document attestation services for all embassies and government offices.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description:
      "Comprehensive international travel insurance for peace of mind.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: FileCheck,
    title: "Police Clearance",
    description:
      "PCC assistance and documentation support for immigration purposes.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Banknote,
    title: "Forex Services",
    description:
      "Foreign exchange and international fund transfer at best rates.",
    image:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Ship,
    title: "Luxury Cruises",
    description: "Premium cruise liner bookings for unforgettable sea voyages.",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800",
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I would like to enquire about your travel services."
    );
    window.open(`https://wa.me/7510676799?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={"./paradisiacal-landscape-with-ocean.jpg"}
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
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              <span className="text-sm font-medium">
                Trusted by 1000+ Travelers
              </span>
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
              We provide reliable and personalized travel solutions designed to
              make your journeys smooth and memorable. From ticket bookings to
              complete travel assistance, our team is committed to delivering
              excellent service at every step.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection("#contact")}
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
                    transition: { duration: 0.5, delay: index * 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    rotateY: -90,
                    transition: { duration: 0.3 },
                  }}
                  whileHover={{
                    scale: 1.15,
                    zIndex: 20,
                    transition: { duration: 0.3 },
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
                    <div
                      className={`
                      w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} 
                      flex items-center justify-center text-white shadow-lg mb-4 
                      group-hover:scale-110 transition-transform duration-300
                    `}
                    >
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
