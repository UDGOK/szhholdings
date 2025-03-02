"use client";

import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 min-h-[80vh]">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        <svg
          className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="tech-pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-purple-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#tech-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-5xl flex-shrink-0 lg:mx-0 lg:pt-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24 sm:mt-32 lg:mt-16"
          >
            <a href="/portfolio" className="inline-flex space-x-6">
              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm font-semibold leading-6 text-purple-200 ring-1 ring-inset ring-purple-500/20">
                Latest Updates
              </span>
            </a>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Technology Investments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg leading-8 text-purple-100 max-w-3xl mx-auto lg:mx-0"
          >
            Investing in breakthrough technologies that are reshaping industries and defining the future of innovation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-x-6"
          >
            <a
              href="/contact"
              className="rounded-md bg-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="/portfolio"
              className="text-lg font-semibold leading-6 text-white hover:text-purple-200 transition-colors duration-300"
            >
              View Portfolio <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          {/* Tech Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3 lg:mt-24"
          >
            {[
              { value: '50+', label: 'Tech Companies' },
              { value: '$2B+', label: 'Investment Value' },
              { value: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="flex flex-col items-center gap-y-3 border-l border-white/10 pl-6 first:border-0 first:pl-0"
              >
                <dt className="text-sm leading-6 text-purple-200">{stat.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce">
          <ArrowDownIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;