import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-provider';

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
  const { theme, setTheme } = useTheme();

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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (theme === 'dark' ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-black/10 backdrop-blur-md border-b border-white/10') : 'bg-transparent'}`}>
      {/* Main Navbar */}
      <nav className="py-4">
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="sm:block">
              <img src="./UTHRAM-YATRA1blue.png" alt="Uthram Yathra Holidays" className={`w-[100px] transition-all duration-300 ${theme === 'dark' ? 'brightness-110' : 'brightness-100'}`} />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium py-2 transition-colors relative group ${isScrolled ? (theme === 'dark' ? 'text-foreground/90' : 'text-white/90') : 'text-white/90'} hover:text-gold`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-300 border ${isScrolled ? (theme === 'dark' ? 'bg-card/50 border-border text-foreground' : 'bg-white/10 border-white/20 text-white') : 'bg-white/10 border-white/20 text-white'} hover:scale-110`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className={`py-3 px-6 text-sm rounded-full transition-all duration-300 hover:scale-105 font-medium border ${isScrolled ? (theme === 'dark' ? 'bg-primary text-primary-foreground border-transparent shadow-md' : 'bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm') : 'bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm'}`}
            >
              Plan Your Trip
            </button>
          </div>

          {/* Mobile Interactions */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 border ${isScrolled ? (theme === 'dark' ? 'bg-card/50 border-border text-foreground' : 'bg-white/10 border-white/20 text-white') : 'bg-white/10 border-white/20 text-white'}`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled ? (theme === 'dark' ? 'text-foreground' : 'text-white') : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`fixed top-[100%] left-0 right-0 backdrop-blur-xl border-t lg:hidden overflow-hidden ${theme === 'dark' ? 'bg-background/95 border-border' : 'bg-black/90 border-white/10'}`}
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left py-3 px-4 rounded-lg transition-colors font-medium ${theme === 'dark' ? 'text-foreground hover:bg-card hover:text-secondary' : 'text-white/90 hover:bg-white/10 hover:text-gold'}`}
                >
                  {link.name}
                </motion.button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className={`font-semibold py-3 mt-4 rounded-full text-center transition-colors ${theme === 'dark' ? 'bg-secondary text-white hover:bg-secondary/90' : 'bg-gold text-black hover:bg-gold-light'}`}
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
