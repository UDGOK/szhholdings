"use client";

import Hero from '@/components/home/Hero';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              A Leading Investment Management Firm
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              SZH Holdings is a leading investment management firm focused on delivering superior returns
              through strategic investments across multiple sectors and asset classes.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Experience</h3>
                <p className="text-gray-600">Deep expertise in investment management</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Portfolio</h3>
                <p className="text-gray-600">Diversified portfolio of debt-related investments</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Strategy</h3>
                <p className="text-gray-600">Focus on direct origination and active management</p>
              </div>
            </div>
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
