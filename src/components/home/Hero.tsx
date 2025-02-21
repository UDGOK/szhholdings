"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

// Ripple effect component inspired by HeroUI
const Ripple = ({ color = "rgba(255, 255, 255, 0.35)" }) => {
  return (
    <span className="absolute inset-0 overflow-hidden rounded-md">
      <span className="absolute inset-0 rounded-md bg-[rgba(255,255,255,0.1)] transition-opacity duration-500 hover:opacity-0" />
      <span
        className="absolute inset-0 rounded-md transition-transform duration-500 hover:scale-[2]"
        style={{
          background: `radial-gradient(circle at center, ${color} 0%, transparent 50%)`,
          opacity: 0,
        }}
      />
    </span>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative isolate overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 min-h-screen"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        <svg
          className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
        <div
          ref={textRef}
          className="mx-auto max-w-5xl flex-shrink-0 lg:mx-0 lg:pt-8 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24 sm:mt-32 lg:mt-16"
          >
            <a href="/portfolio" className="inline-flex space-x-6">
              <span className="hero-badge bg-blue-500/10 text-blue-400 ring-blue-500/20">
                View Portfolio
              </span>
            </a>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl hero-text-gradient"
          >
            SZH Holdings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto lg:mx-0"
          >
            A leading investment firm focused on managing a diversified portfolio of
            strategic investments across multiple sectors
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-x-6"
          >
            <a
              href="/about"
              className="hero-button hero-button-primary relative overflow-hidden group"
            >
              <span className="relative z-10">Learn More</span>
              <Ripple />
            </a>
            <a
              href="/portfolio"
              className="hero-button hero-button-secondary group flex items-center gap-x-2"
            >
              View Portfolio
              <span aria-hidden="true" className="transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
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
        <div className="animate-float">
          <ArrowDownIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;