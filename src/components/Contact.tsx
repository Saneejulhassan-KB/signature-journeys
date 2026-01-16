import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

const offices = [
  {
    name: 'Piravom Office',
    address: 'Piravom, Ernakulam, Kerala',
    phone: '+91 98765 43210',
    email: 'piravom@gosignature.com',
  },
  {
    name: 'Monippally Office',
    address: 'Monippally, Kottayam, Kerala',
    phone: '+91 98765 43211',
    email: 'monippally@gosignature.com',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*New Enquiry from Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Message:* ${formData.message}`
    );

    // Simulate a brief delay
    setTimeout(() => {
      // Open WhatsApp with the message
      window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank');
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Redirecting to WhatsApp...');
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 500);
  };

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="section-title mb-6">
            Let's Plan Your <span className="text-secondary">Dream Trip</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Reach out to us and our travel experts will help you create the perfect journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Send Us an Enquiry
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Thank You!
                </h4>
                <p className="text-muted-foreground text-center">
                  Your enquiry has been sent. We'll get back to you shortly!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your travel plans..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-secondary py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Your enquiry will be sent directly to our WhatsApp for faster response.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Office Cards */}
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  {office.name}
                </h4>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-primary" />
                    {office.address}
                  </p>
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                    {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    {office.email}
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
            >
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                Office Timings
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium text-foreground">9:30 AM - 6:30 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-secondary">Closed</span>
                </p>
              </div>
            </motion.div>

            {/* Quick WhatsApp */}
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="block bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="w-10 h-10 text-white mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">
                Quick WhatsApp Chat
              </h4>
              <p className="text-white/80 text-sm">
                Get instant response from our travel experts
              </p>
            </motion.a>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl overflow-hidden shadow-card border border-border/50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.3!2d76.5!3d9.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDgnMDAuMCJOIDc2wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="goSignature Travel Office Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
