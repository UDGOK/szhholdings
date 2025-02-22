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

  const sectors = [
    {
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      label: 'Real Estate',
      description: 'Premium Properties',
      gradient: 'from-blue-500 to-blue-600',
      shadow: 'group-hover:shadow-blue-500/25',
      href: '/portfolio'
    },
    {
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: 'Technology',
      description: 'Innovation Hub',
      gradient: 'from-purple-500 to-purple-600',
      shadow: 'group-hover:shadow-purple-500/25',
      href: '/technology'
    },
    {
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Energy',
      description: 'Sustainable Future',
      gradient: 'from-amber-500 to-amber-600',
      shadow: 'group-hover:shadow-amber-500/25',
      href: '/energy'
    },
    {
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Finance',
      description: 'Strategic Growth',
      gradient: 'from-emerald-500 to-emerald-600',
      shadow: 'group-hover:shadow-emerald-500/25',
      href: '/finance'
    }
  ];

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
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:px-8 lg:pt-40 flex flex-col items-center justify-center">
        <div
          ref={textRef}
          className="max-w-5xl flex-shrink-0 text-center"
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
            className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto"
          >
            A leading investment firm focused on managing a diversified portfolio of
            strategic investments across multiple sectors
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-x-6"
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

          {/* Industry Sectors Grid - HeroUI Style */}
          <div className="relative mt-24 max-w-5xl mx-auto">
            {/* Decorative blur effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 w-3/4 h-1/2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl opacity-20" />
              <div className="absolute bottom-0 right-1/4 w-3/4 h-1/2 bg-gradient-to-tl from-emerald-500/30 to-amber-500/30 blur-3xl opacity-20" />
            </div>

            {/* Grid Container */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {sectors.map((sector, index) => (
                <a 
                  href={sector.href}
                  key={sector.label}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      duration: 0.8,
                      delay: index * 0.1,
                      bounce: 0.3
                    }}
                    className={`
                      group relative
                      flex flex-col items-center
                      p-6 md:p-8
                      rounded-3xl
                      bg-white/5
                      backdrop-blur-xl
                      border border-white/10
                      shadow-lg
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-white/10
                      hover:border-white/20
                      ${sector.shadow}
                      cursor-pointer
                    `}
                  >
                    {/* Gradient background */}
                    <div className={`
                      absolute inset-0 rounded-3xl opacity-0
                      bg-gradient-to-br ${sector.gradient}
                      group-hover:opacity-10
                      transition-opacity duration-300
                    `} />

                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className={`
                        absolute inset-0 rounded-full
                        bg-gradient-to-br ${sector.gradient}
                        opacity-20 blur-lg
                        group-hover:opacity-30
                        transition-opacity duration-300
                      `} />
                      <div className="relative text-white/80 group-hover:text-white/90 transition-colors duration-300">
                        {sector.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90">
                      {sector.label}
                    </h3>
                    <p className="text-white/70 text-center group-hover:text-white/80">
                      {sector.description}
                    </p>

                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
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