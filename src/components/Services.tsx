import { useState, useEffect, useRef } from "react";
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
  Search,
  Users,
} from "lucide-react";
import EnquiryModal from "./EnquiryModal";
import "./ServicesGallery.css";
import ServicesBackground from "./ServicesBackground";

/* ================= SERVICES DATA (UNCHANGED) ================= */
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
      "https://content.jdmagicbox.com/v2/comp/mumbai/i7/022pxx22.xx22.211217192939.k8i7/catalogue/dreams-gateway-travels-kalamboli-navi-mumbai-domestic-air-ticketing-agents-c26u31ogr4.jpg",
  },
  {
    icon: Train,
    title: "Railway Ticketing",
    description:
      "Hassle-free train reservations across India with confirmed tickets.",
    image:
      "https://assets.upstox.com/content/assets/images/news/indianrailwaysticketrule.webp",
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
    description:
      "Premium cruise liner bookings for unforgettable sea voyages.",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  /* ===== SEARCH STATES (NEW, ONLY ADDITION) ===== */
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

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
    if (openModal || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalServices);
    }, 2500);

    return () => clearInterval(interval);
  }, [totalServices, openModal, isDragging]);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 80;

    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }

    setIsDragging(false);
  };

  /* ===== CLICK OUTSIDE TO CLOSE DROPDOWN ===== */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      id="services"
      className="section-padding bg-muted/50 services-bg-3d"
    >
      <ServicesBackground />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="section-title mb-4">
            Complete Travel <span className="text-secondary">Solutions</span>
          </h2>
          <p className="section-subtitle mx-auto mb-6">
            From flight bookings to luxury cruises, we offer end-to-end travel
            services designed to make your journey seamless and memorable.
          </p>

          {/* ===== SEARCH DROPDOWN (ONLY CHANGED PART) ===== */}
          <div className="flex justify-center" ref={searchRef}>
            <div className="relative w-64">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search or select service..."
                value={searchTerm}
                onFocus={() => setShowDropdown(true)}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowDropdown(true);
                }}
                className="px-4 py-2 pl-10 rounded-lg border w-full bg-background text-foreground border-border focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
              />

              {showDropdown && (
                <ul className="absolute z-50 mt-2 w-full bg-card text-card-foreground border border-border rounded-lg shadow-xl max-h-60 overflow-auto backdrop-blur-md">
                  {filteredServices.map((service, index) => (
                    <li
                      key={service.title}
                      className="px-4 py-2 cursor-pointer hover:bg-muted text-card-foreground flex items-center gap-2 transition-colors"
                      onClick={() => {
                        setCurrentIndex(index);
                        setHighlightIndex(index);
                        setSearchTerm(service.title);
                        setShowDropdown(false);

                        setTimeout(
                          () => setHighlightIndex(null),
                          2000
                        );
                      }}
                    >
                      <service.icon size={16} />
                      {service.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>

        {/* ===== SERVICES GALLERY (UNCHANGED) ===== */}
        <div className="sj-services-gallery">
          <motion.ul
            className="sj-services-cards"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
          >
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

              const isHighlighted = highlightIndex === index;

              return (
                <motion.li
                  key={service.title}
                  className="sj-services-card"
                  animate={{
                    x: distanceFromCenter * 140,
                    scale: isActive ? 1 : 0.8,
                    opacity: Math.max(
                      0.1,
                      1 - Math.abs(distanceFromCenter) * 0.4
                    ),
                    zIndex: totalServices - Math.abs(distanceFromCenter),
                    boxShadow: isHighlighted
                      ? "0 0 0 4px #22c55e"
                      : "none",
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
          </motion.ul>

          <div className="sj-services-actions">
            <button className="sj-services-button" onClick={handlePrev}>
              Prev
            </button>
            <button className="sj-services-button" onClick={handleNext}>
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
