'use client';

import React from 'react';
import { Award, Trophy, Medal, Star, ExternalLink, Zap, Smartphone } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

// Custom Card Component
import { ReactNode, CSSProperties } from 'react';

const Card = ({ children, className = '', style, ...props }: { children: ReactNode, className?: string, style?: CSSProperties }) => (
  <div
    className={`rounded-xl border border-gray-800 bg-black/50 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Custom Badge Component
const Badge = ({ children, className = '', ...props }: { children: React.ReactNode, className?: string }) => (
  <span
    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    {...props}
  >
    {children}
  </span>
);

const awards = [
  {
    title: "Best Web Developer 2023",
    organization: "Tech Excellence Awards",
    date: "December 2023",
    description: "Recognized for outstanding contributions in web development and innovation",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    link: "https://awards.com/2023",
    category: "Professional"
  },
  {
    title: "Hackathon Champion",
    organization: "Global Tech Fest",
    date: "November 2023",
    description: "First place in international hackathon for innovative AI solution",
    icon: <Award className="w-6 h-6 text-blue-400" />,
    link: "https://hackathon.com/winners",
    category: "Competition"
  },
  {
    title: "Outstanding Developer",
    organization: "GitHub Stars Program",
    date: "October 2023",
    description: "Recognized for significant open source contributions",
    icon: <Star className="w-6 h-6 text-purple-400" />,
    link: "https://github.com/stars",
    category: "Community"
  },
  {
    title: "Innovation Award",
    organization: "Tech Summit 2023",
    date: "September 2023",
    description: "Awarded for developing breakthrough cloud solutions",
    icon: <Zap className="w-6 h-6 text-orange-400" />,
    link: "https://techsummit.com/awards",
    category: "Innovation"
  },
  {
    title: "Top Rated Freelancer",
    organization: "Upwork",
    date: "August 2023",
    description: "Maintained 100% client satisfaction with over 50 projects",
    icon: <Medal className="w-6 h-6 text-green-400" />,
    link: "https://upwork.com/profile",
    category: "Professional"
  },
  {
    title: "Best Mobile App",
    organization: "App Awards 2023",
    date: "July 2023",
    description: "Won best mobile app in healthcare category",
    icon: <Smartphone className="w-6 h-6 text-pink-400" />,
    link: "https://appawards.com/2023",
    category: "Product"
  }
];

const AwardsPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] 
          bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_110%)]" />
      </div>

      <Navbar />

      <main className="relative z-10 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
              bg-clip-text text-transparent">
              Awards & Recognition
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Celebrating milestones and achievements in technology and innovation
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative p-6 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="p-3 bg-purple-500/10 rounded-xl"
                    >
                      {award.icon}
                    </motion.div>
                    <span className="px-3 py-1 text-sm bg-purple-500/20 rounded-full text-purple-300">
                      {award.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {award.title}
                  </h3>

                  <p className="text-gray-400 mb-4">{award.description}</p>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700/50">
                    <div className="text-sm text-gray-500">{award.date}</div>
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>View</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AwardsPage;