import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const EnquiryModal = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md rounded-2xl bg-[#0b0b0b] p-6 text-white shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Send Enquiry</h3>
            <button onClick={onClose}>
              <X className="w-6 h-6 text-white/70 hover:text-white" />
            </button>
          </div>

          <p className="text-sm text-white/60 mb-6">
            We will respond to your inquiry as quickly as possible
          </p>

          {/* Name */}
          <input
            type="text"
            placeholder="Name *"
            className="w-full mb-4 rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-secondary"
          />

          {/* Mobile */}
          <div className="flex mb-4">
            <span className="flex items-center px-3 bg-white/10 rounded-l-lg border border-white/10">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              placeholder="Mobile Number *"
              className="w-full rounded-r-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-secondary"
            />
          </div>

          {/* Services */}
          <div className="mb-6">
            <p className="mb-3 text-sm font-medium">
              Choose the service you want *
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[selectedService].map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="accent-secondary"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button className="w-full rounded-full bg-secondary py-3 font-semibold hover:bg-secondary/90 transition">
            Submit
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnquiryModal;
