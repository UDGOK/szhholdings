"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-gradient"></div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Discover our track record of successful investments and value creation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Investment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="The Skyline Tower"
                    width={2070}
                    height={1380}
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-blue-600 font-medium">Completed 2023</span>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
                  <span className="text-blue-600 font-semibold">Featured Investment</span>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900">The Skyline Tower</h2>
                
                <div className="flex items-center space-x-4">
                  <div className="px-3 py-1 bg-green-50 rounded-full">
                    <span className="text-green-600 font-medium">32% IRR</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-50 rounded-full">
                    <span className="text-blue-600 font-medium">$180M Project Value</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  A landmark 45-story luxury residential tower in the heart of downtown, featuring 
                  300 premium units with state-of-the-art amenities. Our strategic repositioning 
                  and operational improvements led to significant value appreciation.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Investment Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="ml-2 text-gray-600">Comprehensive renovation program</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="ml-2 text-gray-600">95% occupancy achieved within 6 months</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="ml-2 text-gray-600">LEED Gold certification</span>
                    </li>
                  </ul>
                </div>

                <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  View Full Case Study
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.5B+</div>
              <div className="text-gray-600">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">28%</div>
              <div className="text-gray-600">Average IRR</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Major Markets</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}