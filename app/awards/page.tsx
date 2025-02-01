'use client';

import React, { useState } from 'react';
import { Award, Trophy, Medal, Star, ExternalLink, Zap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import xtreme from '../../public/img/xtreme.png'
const awards = [
  {
    title: "5th Place Winner",
    organization: "SliitXtreme 3.0",
    date: "October 2024",
    description: "Achieved 5th place in SliitXtreme 3.0 as part of team ENIGMA, a competitive coding event at SLIIT.",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    link: "https://www.linkedin.com/in/hesaraperera/details/honors/",
    category: "Competition",
    image: xtreme,
    size: "medium" // small, medium, large
  },
  {
    title: "Dean's List - Semester 1 (3.94)",
    organization: "Sri Lanka Institute of Information Technology",
    date: "October 2023",
    description: "Achieved exceptional academic performance with a GPA of 3.94.",
    icon: <Star className="w-6 h-6 text-blue-400" />,
    link: "https://www.linkedin.com/in/hesaraperera/details/honors/",
    category: "Academic",
    image: "/img/awards/deans-list.jpg",
    size: "large"
  },
  {
    title: "Quaterfinalist- Idealize 2024",
    organization: "AIESEC of University of Moratuwa",
    date: "September 2024",
    description: "Participated in a competitive mobile app and web development challenge organized by AIESEC at the University of Moratuwa",
    icon: <Medal className="w-6 h-6 text-green-400" />,
    link: "https://www.linkedin.com/in/hesaraperera/details/honors/",
    category: "Competition"
  },
  {
    title: "Finalist - Algothon 2025",
    organization: "SLIIT - Codefest",
    date: "January 2025",
    description: "Finalist in the Algothon 2025, a competitive coding event at SLIIT that showcased our skills in problem-solving and algorithms.",
    icon: <Award className="w-6 h-6 text-red-400" />,
    link: "https://www.linkedin.com/in/hesaraperera/details/honors/",
    category: "Competition"
  }
];

const AwardsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredAwards = selectedCategory
    ? awards.filter(award => award.category === selectedCategory)
    : awards;

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-900">
      {/* Background Effects - Kept Original */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] 
          bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_110%)]" />
      </div>

      <Navbar />

      <main className="relative z-10 py-20">
        {/* Category Filter */}
        <div className="max-w-6xl mx-auto px-4 mb-10">
          <div className="flex justify-center space-x-4 mb-10">
            {['All', ...new Set(awards.map(award => award.category))].map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${selectedCategory === category || (category === 'All' && !selectedCategory)
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }
                `}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

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
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredAwards.map((award, index) => (
              <motion.div
                key={award.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.1 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-6 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
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
                    <motion.a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>View</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AwardsPage;