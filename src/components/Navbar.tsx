import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/10 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      {/* Top Bar */}
      {/* <div className={`hidden md:block py-2 transition-colors duration-300 ${isScrolled ? 'bg-black/20 text-white' : 'bg-transparent text-white/90'}`}>
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} />
              +91 98765 43210
            </a>
            <a href="mailto:info@gosignature.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} />
              info@gosignature.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="badge-certification bg-white/10 text-white text-xs py-1 border border-white/20">
              IATA Certified
            </span>
            <span className="badge-certification bg-white/10 text-white text-xs py-1 border border-white/20">
              ISO Certified
            </span>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav className="py-4">
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="sm:block">
              <img src="./UTHRAM-YATRA1blue.png" alt="goSignature" width={'100px'}/>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium py-2 text-white/90 hover:text-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm py-3 px-6 text-sm rounded-full transition-all duration-300 hover:scale-105 font-medium"
            >
              Plan Your Trip
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[100%] left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10 lg:hidden overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-3 px-4 rounded-lg text-white/90 hover:bg-white/10 hover:text-gold transition-colors font-medium"
                >
                  {link.name}
                </motion.button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-gold text-black font-semibold py-3 mt-4 rounded-full text-center hover:bg-gold-light transition-colors"
              >
                Plan Your Trip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
