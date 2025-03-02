"use client";

import Hero from '@/components/finance/Hero';
import { Features } from '@/components/finance/Features';
import { motion } from 'framer-motion';

export default function Finance() {
  return (
    <>
      <Hero />
      <Features />

      {/* Investment Portfolio Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 animate-gradient"></div>
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
                className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-200 to-blue-100 bg-clip-text text-transparent"
              >
                Financial Portfolio
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-emerald-100"
              >
                Strategic investments across diverse financial sectors
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Finance Focus Areas */}
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
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 bg-clip-text text-transparent"
              >
                Financial Services Focus
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-700 mb-8 font-medium leading-relaxed max-w-4xl mx-auto"
              >
                We invest in innovative financial solutions that drive economic growth
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="p-8 bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-xl border border-emerald-100/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-xl mb-6 animate-float">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">FinTech Innovation</h3>
                <p className="text-gray-700">Digital payment solutions and financial technology platforms</p>
              </div>

              <div className="p-8 bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-xl border border-emerald-100/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-xl mb-6 animate-float" style={{ animationDelay: '0.2s' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Asset Management</h3>
                <p className="text-gray-700">Strategic portfolio management and investment solutions</p>
              </div>

              <div className="p-8 bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-xl border border-emerald-100/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-xl mb-6 animate-float" style={{ animationDelay: '0.4s' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Market Analytics</h3>
                <p className="text-gray-700">Advanced data analytics and market intelligence solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Grow Your Investment Portfolio
            </h2>
            <p className="text-xl mb-12">
              Partner with SZH Holdings to access premium financial investment opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}