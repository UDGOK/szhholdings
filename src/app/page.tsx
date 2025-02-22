"use client";

import Hero from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import FAQ from '@/components/home/FAQ';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      {/* Current Investment Opportunities */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-gradient"></div>
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
                className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-200 to-indigo-100 bg-clip-text text-transparent"
              >
                Current Investment Opportunities
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-blue-100"
              >
                Explore our latest real estate investment opportunities
              </motion.p>
            </div>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              href="/portfolio"
              className="block group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      Real Estate Portfolio
                    </h3>
                    <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-400/20 text-blue-200 text-sm font-medium border border-blue-300/20">
                      Active Opportunities
                    </span>
                  </div>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    Premium real estate investment opportunities with strong potential for capital appreciation and steady income generation.
                  </p>
                  <div className="flex items-center text-blue-300 font-medium text-lg group-hover:text-blue-200">
                    Discover Opportunities
                    <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Animated Binary Background */}
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
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent"
              >
                Institutional-Grade Investment Management
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-700 mb-8 font-medium leading-relaxed max-w-4xl mx-auto"
              >
                SZH Holdings leverages sophisticated quantitative analysis and deep market expertise
                to deliver alpha-generating opportunities across prime real estate and strategic investments.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-16 relative"
              >
                <div className="w-full max-w-3xl mx-auto h-48 relative">
                  {/* Abstract Market Visualization */}
                  <svg
                    viewBox="0 0 800 200"
                    className="w-full h-full"
                    style={{ filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))' }}
                  >
                    {/* Background Grid */}
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgba(0, 0, 255, 0.1)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                    <rect width="800" height="200" fill="url(#grid)" />

                    {/* Animated Market Line */}
                    <path
                      d="M 0 100 Q 200 50, 400 100 T 800 100"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      className="animate-float"
                    >
                      <animate
                        attributeName="d"
                        dur="5s"
                        repeatCount="indefinite"
                        values="
                          M 0 100 Q 200 50, 400 100 T 800 100;
                          M 0 100 Q 200 150, 400 100 T 800 100;
                          M 0 100 Q 200 50, 400 100 T 800 100
                        "
                      />
                    </path>

                    {/* Gradient Definition */}
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
                    </linearGradient>

                    {/* Data Points */}
                    <g className="data-points">
                      {[0, 200, 400, 600, 800].map((x, i) => (
                        <circle
                          key={i}
                          cx={x}
                          cy="100"
                          r="4"
                          fill="#3b82f6"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </g>
                  </svg>

                  {/* Overlay Elements */}
                  <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-8 pointer-events-none">
                    <div className="text-blue-600 font-medium text-sm">Analytics</div>
                    <div className="text-blue-600 font-medium text-sm">Performance</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-100/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6 animate-float">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Quantitative Excellence</h3>
                <p className="text-gray-700">Proprietary algorithms and data-driven insights driving superior investment decisions</p>
              </div>

              <div className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-100/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6 animate-float" style={{ animationDelay: '0.2s' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Strategic Portfolio</h3>
                <p className="text-gray-700">Curated selection of high-growth real estate assets in premium markets</p>
              </div>

              <div className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-100/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6 animate-float" style={{ animationDelay: '0.4s' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Institutional Expertise</h3>
                <p className="text-gray-700">Harvard-trained investment professionals with proven track record</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Strategy Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Investment Strategy
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Direct Origination</h3>
                <p className="text-gray-300">
                  We focus on identifying and executing strategic investment opportunities across multiple sectors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Active Management</h3>
                <p className="text-gray-300">
                  Our team actively manages our diversified portfolio to maximize risk-adjusted returns for our shareholders.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Learn More?
            </h2>
            <p className="text-xl mb-12">
              Discover how SZH Holdings can help you achieve your investment goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
