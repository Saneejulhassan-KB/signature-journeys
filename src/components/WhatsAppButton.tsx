import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello! I would like to enquire about your travel services.'
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center transition-colors animate-pulse-glow group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
      </div>
      
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
    </motion.button>
  );
};

export default WhatsAppButton;
