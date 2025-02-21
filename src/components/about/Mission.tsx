"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We strive to deliver superior risk-adjusted returns through a combination of current
            income and capital appreciation. Our team&apos;s extensive experience and deep relationships
            across multiple sectors allow us to identify and capitalize on unique
            investment opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent text-blue-400 border border-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;