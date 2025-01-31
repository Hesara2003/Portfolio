'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Search } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CertificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Cloud', 'Development', 'Design'];

  const certifications = [
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      logo: "/aws-logo.png",
      credential: "https://aws.amazon.com/verification",
      category: "Cloud"
    },
    {
      title: "Meta Frontend Developer",
      issuer: "Meta",
      date: "2023",
      logo: "/meta-logo.png",
      credential: "https://coursera.org/verify/professional-cert/...",
      category: "Development"
    },
    {
      title: "Google UX Design",
      issuer: "Google",
      date: "2023",
      logo: "/google-logo.png",
      credential: "https://coursera.org/verify/professional-cert/...",
      category: "Design"
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2023",
      logo: "/freecodecamp-logo.png",
      credential: "https://freecodecamp.org/certification/...",
      category: "Development"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      logo: "/freecodecamp-logo.png",
      credential: "https://freecodecamp.org/certification/...",
      category: "Development"
    },
    {
      title: "UI/UX Fundamentals",
      issuer: "Coursera",
      date: "2023",
      logo: "/coursera-logo.png",
      credential: "https://coursera.org/verify/...",
      category: "Design"
    }
  ];

  const filteredCerts = certifications.filter(cert => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] 
          bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_110%)]" />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"
        />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay">
          <div className="h-full w-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] 
            bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_110%)]" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-6xl mx-auto px-4 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                bg-clip-text text-transparent">
                My Certifications
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional certifications and achievements in technology and design
            </p>
          </motion.div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between 
              bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700">
              <div className="flex gap-2 overflow-x-auto">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap
                      ${selectedCategory === category
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search certificates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700/50 rounded-lg text-white
                    border border-gray-600 focus:border-purple-500 focus:outline-none
                    focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCerts.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-start mb-4">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="px-3 py-1 text-sm bg-purple-500/20 rounded-full text-purple-300">
                        {cert.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 
                      transition-colors">
                      {cert.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">{cert.issuer}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{cert.date}</span>
                      <a
                        href={cert.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 
                          transition-colors"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CertificationsPage;