'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Mic, Search, X } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import MetaLogo from '../../img/meta-logo.png';
import AwsLogo from '../../img/aws-logo.svg';
import GoogleLogo from '../../img/google-logo.png';
import Cloud101 from '../../img/Certificates/Cloud/Cloud101.png';
import ArchitectRol from '../../img/Certificates/Cloud/Architect Rol.png';
import GettingStarted from '../../img/Certificates/Cloud/Getting Started.png';
import PromptEng from '../../img/Certificates/Cloud/Prompt Eng.png';
import TechEssential from '../../img/Certificates/Cloud/Technical Essentials.png';
import SliitLogo from '../../img/Sliit-logo.png';
import JetsonNano from '../../img/Certificates/AI ML/JetsonNano.png';
import Microsoft from '../../img/microsoft-logo.jpg';
import AzureApp from '../../img/Certificates/Cloud/azure-app.png';
import azurecv from '../../img/Certificates/Cloud/azure-cv.png';
import azurearch from '../../img/Certificates/Cloud/azure-arch.png';
import azurecc from '../../img/Certificates/Cloud/azure-cc.png';
import azureca from '../../img/Certificates/Cloud/azure-ca.png';
import stReg from '../../img/Certificates/Ai ML/st-reg.png';
import stanford from '../../img/stanford-logo.png';
import Stage1 from '../../img/Certificates/AI ML/Stage01.png';
import Stage2 from '../../img/Certificates/AI ML/Stage02.png';
import Nvidea from '../../img/Nvidea-logo.jpg';
import msAi from '../../img/Certificates/AI ML/ms-ai.png';
import linkedin from '../../img/linkedin-logo.png';
import ethicsAi from '../../img/Certificates/AI ML/ethics-ai.png';
import introAi from '../../img/Certificates/AI ML/intro-ai.png';
import ghAdvanced from '../../img/Certificates/Version Control/gh-advanced.png';
import ghFoundations from '../../img/Certificates/Version Control/gh-foundations.png';
import GitHub from '../../img/github-logo.png';

interface Cert {
  title: string;
  issuer: string;
  date?: string;
  logo: any;
  credential: string;
  category: string;
  bgImage?: string;
  certificateImage?: string;
}

const CertModal = ({ cert, isOpen, onClose }: { cert: Cert | null; isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden"
        >
          <Image
            src={cert?.certificateImage || '/default-cert.jpg'}
            alt={cert?.title || 'Certificate'}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const CertificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState<null | {
    title: string;
    issuer: string;
    date?: string;
    logo: any;
    credential: string;
    category: string;
    bgImage?: string;
    certificateImage?: string;
  }>(null);

  const categories = ['All', 'Cloud', 'Development', 'Design', 'AI/ML','Version Control', 'Cybersecurity'];

  const certifications = [
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "2024",
      logo: AwsLogo,
      credential: "https://www.coursera.org/account/accomplishments/verify/GI9J2TROJU8W",
      category: "Cloud",
      bgImage: "/img/aws-bg.jpg",
      certificateImage: TechEssential
    },

    {
      title: "The Cloud Architect Role in the AWS Cloud",
      issuer: "Amazon Web Services",
      date: "2025",
      logo: AwsLogo,
      credential: "https://www.linkedin.com/in/hesaraperera/details/certifications/",
      category: "Cloud",
      bgImage: "/img/aws-bg.jpg",
      certificateImage: ArchitectRol
    },

    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services",
      date: "2025",
      logo: AwsLogo,
      credential: "https://www.credly.com/badges/289feace-135b-4c09-8a68-93019d6eee27/linked_in_profile",
      category: "Cloud",
      bgImage: "/img/aws-bg.jpg",
      certificateImage: Cloud101
    },

    {
      title: "AWS Foundations: Getting Started with the AWS Cloud Essentials",
      issuer: "Amazon Web Services",
      date: "2025",
      logo: AwsLogo,
      credential: "https://www.linkedin.com/in/hesaraperera/details/certifications/",
      category: "Cloud",
      bgImage: "/img/aws-bg.jpg",
      certificateImage: GettingStarted
    },

    {
      title: "Host a web application with Azure App Service",
      issuer: "Microsoft",
      date: "2024",
      logo: Microsoft,
      credential: "https://learn.microsoft.com/en-us/users/pereramph-4397/achievements/habpspg8?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      category: "Cloud",
      bgImage: "/img/aws-bg.jpg",
      certificateImage: AzureApp
    },

    {
      title: "Microsoft Azure AI Fundamentals:Computer Vision",
      issuer: "Microsoft",
      date: "2024",
      logo: Microsoft,
      credential: "https://learn.microsoft.com/en-us/users/pereramph-4397/achievements/p5fjd3r4?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      category: "Cloud",
      bgImage: "/img/aws-bg.jpg",
      certificateImage: azurecv
    },

    {
      title: "Microsoft Azure AI Fundamentals: Describe Azure architecture and services",
      issuer: "Microsoft",
      date: "2024",
      logo: Microsoft,
      credential: "https://learn.microsoft.com/en-gb/users/pereramph-4397/achievements/habplwl8?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      category: "Cloud",
      bgImage: "/img/aws-bg.jpg",
      certificateImage: azurearch
    },

    {
      title: "Microsoft Azure AI Fundamentals: Describe cloud concepts",
      issuer: "Microsoft",
      date: "2024",
      logo: Microsoft,
      credential: "https://learn.microsoft.com/en-us/users/pereramph-4397/achievements/87d4suvw?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      category: "Cloud",
      bgImage: "/img/aws-bg.jpg",
      certificateImage: azurecc
    },

    {
      title: "Microsoft Cloud Adoption Framework for Azure",
      issuer: "Microsoft",
      date: "2024",
      logo: Microsoft,
      credential: "https://learn.microsoft.com/en-gb/users/pereramph-4397/achievements/3rke57zh?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      category: "Cloud",
      bgImage: "/img/aws-bg.jpg",
      certificateImage: azureca
    },

    {
      title: "Foundations of Prompt Engineering",
      issuer: "Amazon Web Services",
      date: "2024",
      logo: AwsLogo,
      credential: "https://www.linkedin.com/in/hesaraperera/details/certifications/",
      category: "Cloud",
      bgImage: "/img/aws-bg.jpg",
      certificateImage: PromptEng
    },

    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford University",
      date: "2024",
      logo: stanford,
      credential: "https://learn.nvidia.com/certificates?id=gS5RuS08SMaEGj9xj_pudQ#",
      category: "AI/ML",
      certificateImage: stReg
    },

    {
      title: "AI/ML Engineer- Stage 1",
      issuer: "Sri Lanka Institute of Information Technology",
      date: "2025",
      logo: SliitLogo,
      credential: "https://freecodecamp.org/certification/...",
      category: "AI/ML",
      certificateImage: Stage1
    },
    {
      title: "AI/ML Engineer- Stage 2",
      issuer: "Sri Lanka Institute of Information Technology",
      date: "2025",
      logo: SliitLogo,
      credential: "https://freecodecamp.org/certification/...",
      category: "AI/ML",
      certificateImage: Stage2
    },
    {
      title: "Getting Started with AI on Jetson Nano",
      issuer: "NVIDIA",
      date: "2025",
      logo: Nvidea,
      credential: "https://learn.nvidia.com/certificates?id=gS5RuS08SMaEGj9xj_pudQ#",
      category: "AI/ML",
      certificateImage: JetsonNano
    },

    {
      title: "Career Essentials in Genereative AI by Microsoft",
      issuer: "Microsoft",
      date: "2024",
      logo: Microsoft,
      credential: "https://www.linkedin.com/learning/certificates/f9e9a3c3ff775a28dc2d66bd38935d671c240cb26323611c6080cad832ca20e1",
      category: "AI/ML",
      certificateImage: msAi
    },

    {
      title: "Ethics in the Age of Generative AI",
      issuer: "LinkedIn Learning",
      date: "2024",
      logo: linkedin,
      credential: "https://www.linkedin.com/learning/certificates/d8fae848ae191632e713158c69aa0fa10f0b224c9a83ec9c54bdb6953b63d218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2MeJLNZgQMuNCZBAGDvuwA%3D%3D",
      category: "AI/ML",
      certificateImage: ethicsAi
    },

    {
      title: "Introduction to Artificial Intelligence",
      issuer: "LinkedIn Learning",
      date: "2024",
      logo: linkedin,
      credential: "https://www.linkedin.com/learning/certificates/063239764cdcf0953fcc889bd0c309b38b098305043fdbe98e397299f93cc8e0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2MeJLNZgQMuNCZBAGDvuwA%3D%3D",
      category: "AI/ML",
      certificateImage: introAi
    },

    {
      title: "GitHub Advanced Security",
      issuer: "GitHub",
      date: "2025",
      logo: GitHub,
      credential: "https://learn.microsoft.com/en-us/users/pereramph-4397/achievements/uyknx6n3?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      category: "Version Control",
      certificateImage: ghAdvanced
    },

    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      date: "2024",
      logo: GitHub,
      credential: "https://learn.microsoft.com/en-us/users/pereramph-4397/achievements/dcalghsj?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      category: "Version Control",
      certificateImage: ghFoundations
    },


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
                      <Image
                        src={cert.logo}
                        alt={cert.issuer}
                        width={50}
                        height={50}
                        className="object-contain"
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
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="relative mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 
                        rounded-lg flex items-center justify-center space-x-2 
                        group overflow-hidden shadow-lg hover:shadow-purple-500/25
                        transition-all duration-300 hover:-translate-y-0.5"
                    >
                      {/* Button Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 
                        opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                      
                      {/* Button Content */}
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="text-white font-medium">View Certificate</span>
                        <ExternalLink className="w-4 h-4 text-white transform 
                          group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      
                      {/* Border Glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 
                        rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <CertModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
      
      <Footer />
    </div>
  );
};

export default CertificationsPage;