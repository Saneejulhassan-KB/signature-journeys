import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Award, Users, Globe, Heart, MapPin, Calendar } from 'lucide-react';

const stats = [
  { icon: Users, value: 5400, suffix: '+', label: 'Happy Travelers' },
  { icon: Globe, value: 12, suffix: '', label: 'Overseas Partners' },
  { icon: MapPin, value: 3, suffix: '', label: 'Office Locations' },
  { icon: Calendar, value: 8, suffix: '+', label: 'Years Experience' },
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="section-title mb-6">
              Your Trusted <span className="text-secondary">Travel Partner</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">goSignature Travel Pvt Ltd</strong> — where every journey is a masterpiece 
                of dreams woven into reality. Established on the 1st of June, 2017, in Kurichithanam and later expanded 
                to Monippally, Kottayam & Piravom, Ernakulam, our story reflects a visionary spirit ignited by our 
                late founder, <strong className="text-foreground">Mr. Shinoj A.R</strong>, who sowed the seeds of this exceptional 
                travel company in February 2015.
              </p>
              <p>
                Today, we stand as a beacon of innovation in the travel industry with <strong className="text-foreground">IATA 
                accreditation</strong> and <strong className="text-foreground">ISO certification</strong>, offering a state-of-the-art 
                online travel booking portal and elegantly designed offices in Piravom & Monippally.
              </p>
              <p>
                With <strong className="text-foreground">5400+ satisfied travelers</strong> and trusted partnerships with 
                <strong className="text-foreground"> 12 overseas companies</strong>, our mission is to elevate customer experience 
                through personalized travel planning, competitive pricing, and world-class service delivery.
              </p>
              <p className="text-lg font-medium text-primary italic">
                "The distance between your dream destination and us is just a call away. 
                Let's create memories that last a lifetime—together."
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/5 border border-primary/10">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-foreground text-sm">IATA Certified</div>
                  <div className="text-xs text-muted-foreground">Accredited Agency</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/5 border border-secondary/10">
                <Heart className="w-8 h-8 text-secondary" />
                <div>
                  <div className="font-semibold text-foreground text-sm">ISO Certified</div>
                  <div className="text-xs text-muted-foreground">Quality Assured</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="stat-number">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Founder Tribute */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 text-center p-10 rounded-3xl bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-border/50"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            In Loving Memory of Our Founder
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong className="text-foreground">Mr. Shinoj A.R</strong> — whose vision and dedication laid the foundation 
            of goSignature Travel. His spirit of excellence and passion for creating extraordinary travel experiences 
            continues to guide us every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
