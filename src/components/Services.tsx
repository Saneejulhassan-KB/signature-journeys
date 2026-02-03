import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  ChevronDown,
  MousePointer2,
} from "lucide-react";
import EnquiryModal from "./EnquiryModal";
import "./ServicesGallery.css";

const services = [
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
    icon: Bus,
    title: "Bus Ticketing",
    description:
      "Comfortable bus travel bookings for short and long-distance journeys.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
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

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const totalServices = services.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalServices);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalServices - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (openModal) return; // pause when modal is open
  
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalServices);
    }, 1500); // 3 seconds (adjust if needed)
  
    return () => clearInterval(interval);
  }, [totalServices, openModal]);
  

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
            From flight bookings to luxury cruises, we offer end-to-end travel
            services designed to make your journey seamless and memorable.
          </p>
        </motion.div>

        {/* Services gallery-style UI (unique to this section) */}
        <div className="sj-services-gallery">
          <ul className="sj-services-cards">
            {services.map((service, index) => {
              const offset =
                (index - currentIndex + totalServices) % totalServices;

              const isActive = offset === 0;
              const distanceFromCenter =
                offset === 0
                  ? 0
                  : offset <= totalServices / 2
                  ? offset
                  : offset - totalServices;

              return (
                <motion.li
                  key={service.title}
                  className="sj-services-card"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{
                    x: distanceFromCenter * 140,
                    scale: isActive ? 1 : 0.8,
                    opacity: Math.max(
                      0.1,
                      1 - Math.abs(distanceFromCenter) * 0.4
                    ),
                    zIndex: totalServices - Math.abs(distanceFromCenter),
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  onClick={() => {
                    setSelectedService(service.title);
                    setOpenModal(true);
                  }}
                >
                  <img src={service.image} alt={service.title} />
                  <div
  className={`sj-services-card-label ${
    isActive ? "active" : ""
  }`}
>
  <service.icon className="sj-services-card-icon" />
  <span>{service.title}</span>
</div>

                </motion.li>
              );
            })}
          </ul>

          <div className="sj-services-actions">
            <button
              type="button"
              className="sj-services-button"
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              type="button"
              className="sj-services-button"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <EnquiryModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectedService={selectedService}
      />
    </section>
  );
};

export default Services;
