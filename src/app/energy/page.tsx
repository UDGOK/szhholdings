"use client";

import Hero from '@/components/energy/Hero';
import { Features } from '@/components/energy/Features';
import { motion } from 'framer-motion';

export default function Energy() {
  return (
    <>
      <Hero />
      <Features />

      {/* Sustainable Energy Section */}
      <section className="py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 animate-gradient"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-amber-200 to-orange-100 bg-clip-text text-transparent"
              >
                Energy Portfolio
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-amber-100"
              >
                Explore our sustainable energy investments
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Energy Focus Areas */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="binary-rain"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-amber-900 to-gray-900 bg-clip-text text-transparent"
              >
                Energy Focus Areas
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-700 mb-8 font-medium leading-relaxed max-w-4xl mx-auto"
              >
                We invest in sustainable energy solutions that power the future
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="p-8 bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-xl border border-amber-100/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-600 rounded-xl mb-6 animate-float">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Solar Energy</h3>
                <p className="text-gray-700">Advanced solar technologies and utility-scale solar projects</p>
              </div>

              <div className="p-8 bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-xl border border-amber-100/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-600 rounded-xl mb-6 animate-float" style={{ animationDelay: '0.2s' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Wind Power</h3>
                <p className="text-gray-700">Onshore and offshore wind energy infrastructure development</p>
              </div>

              <div className="p-8 bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-xl border border-amber-100/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-600 rounded-xl mb-6 animate-float" style={{ animationDelay: '0.4s' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Energy Storage</h3>
                <p className="text-gray-700">Battery technology and grid-scale energy storage solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Power the Future with Us
            </h2>
            <p className="text-xl mb-12">
              Join SZH Holdings in building a sustainable energy future through strategic investments.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-amber-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}