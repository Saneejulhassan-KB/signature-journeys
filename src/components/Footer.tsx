import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowUp
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Air Ticketing',
  'Tour Packages',
  'Visa Assistance',
  'Hotel Booking',
  'Car Rental',
  'Travel Insurance',
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/gosignaturetravel', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/gosignaturetravel', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/gosignaturetravel', label: 'Youtube' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">gS</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">goSignature</h3>
                <p className="text-xs text-primary-foreground/70">Travel Pvt Ltd</p>
              </div> */}
              <img src="./UTHRAM-YATRA1blue.png" alt="" width={'100px'}/>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Crafting unforgettable journeys since 2017. IATA & ISO certified travel agency 
              providing world-class travel services.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-gold" />
                <span className="text-primary-foreground/80">
                  Piravom, Ernakulam<br />
                  Monippally, Kottayam<br />
                  Kerala, India
                </span>
              </li>
              <li>
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@gosignature.com" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold" />
                  info@gosignature.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} goSignature Travel Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-primary shadow-lg hover:bg-navy-light flex items-center justify-center transition-colors z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </motion.button>
    </footer>
  );
};

export default Footer;
