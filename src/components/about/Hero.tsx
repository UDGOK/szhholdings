"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-800 to-transparent opacity-50" />
      </div>

      {/* Decorative Elements - Moved below the content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.3 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute left-1/2 -bottom-48 transform -translate-x-1/2"
      >
        <div className="relative w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        </div>
      </motion.div>

      {/* Content - Moved above decorative elements */}
      <div className="container relative px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-5xl md:text-6xl font-bold text-white"
          >
            Transforming Investment Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 text-xl text-gray-300 leading-relaxed"
          >
            At SZH Holdings, we combine deep industry expertise with innovative
            investment strategies to create lasting value for our investors and partners.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;