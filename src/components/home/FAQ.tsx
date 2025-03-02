"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/utils/cn';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of investment opportunities does SZH Holdings offer?",
    answer: "SZH Holdings offers a diverse range of investment opportunities, including premium real estate investments, strategic portfolio management, and institutional-grade investment solutions. Our focus is on delivering alpha-generating opportunities across multiple sectors while maintaining strong risk management practices."
  },
  {
    question: "How does SZH Holdings select its investment opportunities?",
    answer: "We employ a rigorous, data-driven approach to selecting investment opportunities. Our team utilizes sophisticated quantitative analysis, proprietary algorithms, and deep market expertise to identify and evaluate potential investments. Each opportunity undergoes thorough due diligence to ensure it meets our strict investment criteria."
  },
  {
    question: "What is the minimum investment requirement?",
    answer: "Investment minimums vary by opportunity and investment vehicle. We structure our offerings to accommodate different levels of investment while maintaining our commitment to institutional-quality opportunities. Contact our team for specific details about current investment minimums and opportunities."
  },
  {
    question: "How does SZH Holdings manage risk?",
    answer: "Risk management is central to our investment strategy. We employ a multi-layered approach that includes diversification across sectors and assets, continuous market analysis, and active portfolio management. Our team of Harvard-trained investment professionals brings extensive experience in risk assessment and mitigation."
  },
  {
    question: "What makes SZH Holdings different from other investment firms?",
    answer: "SZH Holdings distinguishes itself through our combination of quantitative excellence, strategic portfolio management, and institutional expertise. We leverage advanced technology and data analytics while maintaining a personal approach to client relationships. Our focus on transparency and consistent communication ensures our investors are always well-informed."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.015] mix-blend-overlay" />
      <div className="absolute -left-[50%] top-0 h-[1000px] w-[1000px] animate-blob rounded-full bg-gradient-to-r from-blue-100/20 to-cyan-100/20 blur-3xl filter" />
      <div className="absolute -right-[50%] top-[20%] h-[1000px] w-[1000px] animate-blob animation-delay-2000 rounded-full bg-gradient-to-l from-indigo-100/20 to-purple-100/20 blur-3xl filter" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about investing with SZH Holdings
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm",
                  "hover:shadow-lg hover:bg-white transition-all duration-300",
                  openIndex === index && "shadow-lg ring-1 ring-blue-200 bg-white"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between bg-gradient-to-r from-transparent via-blue-50/0 to-transparent group-hover:via-blue-50/50 transition-all duration-300 rounded-t-xl"
                >
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center bg-blue-50 transition-all duration-300",
                    "group-hover:bg-blue-100",
                    openIndex === index && "bg-blue-100 rotate-180"
                  )}>
                    <svg
                      className="w-5 h-5 text-blue-600 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="p-6 pt-0">
                    <p className="text-gray-600 leading-relaxed [text-wrap:pretty]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;