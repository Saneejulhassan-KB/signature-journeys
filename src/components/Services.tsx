import { motion } from 'framer-motion';
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
  Ship
} from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Air Ticketing',
    description: 'Domestic & international flight bookings at competitive prices with 24/7 support.',
  },
  {
    icon: Train,
    title: 'Railway Ticketing',
    description: 'Hassle-free train reservations across India with confirmed tickets.',
  },
  {
    icon: Bus,
    title: 'Bus Ticketing',
    description: 'Comfortable bus travel bookings for short and long-distance journeys.',
  },
  {
    icon: FileText,
    title: 'Passport & Visa',
    description: 'Complete passport and visa assistance for all countries with expert guidance.',
  },
  {
    icon: Map,
    title: 'Tour Packages',
    description: 'Curated domestic and international tour packages tailored to your preferences.',
  },
  {
    icon: Car,
    title: 'Car Rental',
    description: 'Reliable car rental services with professional drivers for all occasions.',
  },
  {
    icon: Building2,
    title: 'Hotel Reservation',
    description: 'Best hotel deals worldwide from budget stays to luxury resorts.',
  },
  {
    icon: Stamp,
    title: 'Embassy Attestation',
    description: 'Document attestation services for all embassies and government offices.',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive international travel insurance for peace of mind.',
  },
  {
    icon: FileCheck,
    title: 'Police Clearance',
    description: 'PCC assistance and documentation support for immigration purposes.',
  },
  {
    icon: Banknote,
    title: 'Forex Services',
    description: 'Foreign exchange and international fund transfer at best rates.',
  },
  {
    icon: Ship,
    title: 'Luxury Cruises',
    description: 'Premium cruise liner bookings for unforgettable sea voyages.',
  },
];

const Services = () => {
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
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-service group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
