"use client";

import { useState } from 'react';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Current Offerings', href: '/offerings' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Investments',
    links: [
      { name: 'Strategy', href: '/investments/strategy' },
      { name: 'Portfolio', href: '/investments/portfolio' },
      { name: 'Case Studies', href: '/investments/case-studies' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-[#0A0F1E] text-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-purple-600/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  SZH Holdings
                </h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  A leading investment firm focused on managing a diversified portfolio of
                  strategic investments across multiple sectors.
                </p>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                  Subscribe to our newsletter
                </h4>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="relative w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent
                        placeholder:text-gray-500 text-sm backdrop-blur-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600
                      hover:to-blue-700 rounded-lg text-sm font-medium transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2
                      focus:ring-offset-[#0A0F1E] shadow-[0_0_20px_rgba(59,130,246,0.2)]
                      hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:scale-[1.02] transform"
                  >
                    Subscribe to Updates
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:px-4">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 
                          text-sm block hover:translate-x-1 transform transition-transform"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Connect with us
                </h3>
                <div className="mt-6 flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="group relative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-200" />
                      <div className="relative text-gray-400 hover:text-white transition-colors duration-200
                        hover:scale-110 transform transition-transform p-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10
                        hover:border-white/20 hover:bg-white/10">
                        <span className="sr-only">{social.name}</span>
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-16 pt-8">
          <div className="absolute top-0 left-4 right-4">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SZH Holdings.
              <span className="block md:inline md:ml-1">All rights reserved.</span>
            </p>
            <div className="flex items-center space-x-8 text-sm">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
              >
                Terms
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 opacity-75" />
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
              >
                Privacy
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 opacity-75" />
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
              >
                Cookies
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 opacity-75" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;