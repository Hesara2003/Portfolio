'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Award } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/certifications', label: 'Certifications', icon: Award },
    { href: '/awards', label: 'Awards', icon: Award },
    { href: '/contact', label: 'Contact', icon: Mail }

  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='relative'
          >
            <Link href="/" className="relative group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                bg-clip-text text-transparent animate-gradient-x relative z-10">
                Hesara Perera
              </span>
              {/* Continuous Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                rounded-lg opacity-20 blur-lg animate-pulse-slow" />
              {/* Hover Glow Boost */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                rounded-lg opacity-0 group-hover:opacity-40 blur transition duration-500" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`group relative py-3 px-6 rounded-xl flex items-center ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 
                          border border-purple-500/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Icon and Label Container */}
                    <div className="relative flex items-center space-x-3">
                      <Icon className={`w-5 h-5 transition-all duration-300 ${
                        isActive ? 'text-purple-400 scale-110' : 'text-gray-400'
                      } group-hover:text-purple-400 transform group-hover:scale-110 group-hover:rotate-12`} />
                      
                      <span className="font-medium text-sm tracking-wide transition-colors duration-200 
                        group-hover:text-white whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>

                    {/* Bottom Gradient Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <div className="relative">
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden backdrop-blur-xl bg-gray-900/90 rounded-2xl mt-2"
        >
          <div className="py-4 space-y-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center space-x-3 text-white/90 hover:text-white px-4 py-3 
                      rounded-xl hover:bg-gradient-to-r from-blue-500/20 to-purple-500/20 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5 transform group-hover:scale-110 group-hover:rotate-12 
                      transition-all duration-300" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

// Add these to your globals.css or tailwind.config.js
