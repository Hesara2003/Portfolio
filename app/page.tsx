'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowDown, Code, Palette, Mail, Github, Linkedin, Twitter, ExternalLink, Database, Cloud } from 'lucide-react';
import TypewriterText from '../components/Typewriter';
import Confetti from '../components/Confetti';
import Image from 'next/image';
import myImage from '../img/myPhoro.png';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const email = "your.email@example.com";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(email);
      setShowConfetti(true);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const skills = [
    { icon: Code, name: 'Frontend', tech: ['React', 'Next.js', 'TypeScript'] },
    { icon: Database, name: 'Backend', tech: ['Node.js', 'Python', 'SQL'] },
    { icon: Cloud, name: 'Cloud', tech: ['AWS', 'Vercel', 'Firebase'] },
    { icon: Palette, name: 'Design', tech: ['Figma', 'Adobe XD', 'Tailwind'] }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Graphic Designer',
      company: 'Behance',
      description: 'Remote',
      tech: ['Graphic Design', 'UI/UX Design', 'Social Media Post Design'],
      achievements: [
        '10+ projects completed',
      ]
    },
    {
      year: '2024',
      title: 'Technical Writer',
      company: 'Medium',
      description: 'Remote',
      tech: ['Technical Writing', 'Blogging', 'Content Creation'],
      achievements: [
        'Published 2+ articles',
        '10+ monthly readers'
      ]
    },
    
    {
      year: '2024',
      title: 'Google Cloud Innovator',
      company: 'Google Developers Group',
      description: 'Active member in Google Developers Group',
      tech: ['Cloud Computing', 'Machine Learning', 'Web Development'],
      achievements: [
        'Helped tech community'
      ]
    },

    {
      year: '2023-2027',
      title: 'Computer Science Student',
      company: 'Sri Lanka Institute of Information Technology',
      description: 'Full-time',
      tech: ['Data Structures', 'Algorithms', 'Software Development'],
      achievements: [
        '3.67 CGPA',
        'Dean\'s List',
        'IEEEXtreme Winner',
        'Codefest Finalist',
        'Conference Paper Publication'
      ]
    },

    {
      year: '2023',
      title: 'Customer Care Executive',
      company: 'Sri Lanka Insurance',
      description: 'Full-time',
      tech: ['Customer Support', 'Customer Service', 'Client Services'],
      achievements: [
        'Resolved 100+ customer queries daily',
        'Achieved 95% customer satisfaction'
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] 
          bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_110%)]" />
        
        {/* Gradient Orbs */}
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
      
      <main className="flex-grow text-white relative overflow-hidden">
        {showConfetti && <Confetti />}
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(59,130,246,0.1),transparent)] animate-gradient-float-1" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_80%,rgba(147,51,234,0.1),transparent)] animate-gradient-float-2" />
        </div>
        
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className={`max-w-6xl mx-auto px-4 py-20 md:py-32 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="space-y-12 text-center">
            {/* Profile Photo */}
            <motion.div
              variants={fadeInUp}
              className="relative w-48 h-48 mx-auto mb-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
              <Image
                src={myImage}
                alt="Profile"
                className="absolute inset-2 rounded-full object-cover object-center
                  transition-transform duration-300 hover:scale-105 
                  border-4 border-gray-800"
                layout="fill"
              />

            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-4 animate-fade-in">
              <p className="text-blue-400 font-medium tracking-wide uppercase text-sm">
                <TypewriterText text="Welcome to my portfolio" delay={100} />
              </p>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                  <TypewriterText text="Hello! I'm Hesara" delay={100} />
                </span>
              </h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light"
              >
                <TypewriterText text="Crafting digital experiences with code & creativity" delay={100} />
              </motion.p>

              {/* GitHub Portfolio Button */}
              <motion.div variants={fadeInUp} className="pt-8">
                <motion.a
                  href="https://github.com/Hesara2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="inline-flex items-center gap-3 px-8 py-4 
                    bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl
                    hover:border-purple-400 transition-all duration-300
                    shadow-lg hover:shadow-purple-500/25"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  <span className="text-white group-hover:text-purple-400 transition-colors font-medium">
                    View GitHub Portfolio
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
            <div className="text-center mb-16">
          <a
            href="https://www.designfusion.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 rounded-xl
              hover:bg-purple-500 transition-all duration-300 transform hover:scale-105 
              hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25 font-medium text-lg"
          >
            <span>View Design Portfolio</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

            {/* Social Links */}
            <div className="flex justify-center gap-8 mt-8">
              {[{ Icon: Github, href: "#", label: "GitHub", delay: "100" },
                { Icon: Linkedin, href: "#", label: "LinkedIn", delay: "200" }]
                .map(({ Icon, href, label, delay }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 rounded-full hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${delay}ms` }}
                    aria-label={label}
                  >
                    <Icon className="w-7 h-7 text-gray-400 hover:text-blue-400 transition-colors" />
                  </a>
                ))}
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[{ Icon: Code, title: "Development", description: "Building elegant solutions with modern technologies", color: "text-blue-400", gradient: "hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-transparent" },
                { Icon: Palette, title: "Design", description: "Creating intuitive and stunning user experiences", color: "text-purple-400", gradient: "hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-transparent" },
                { Icon: Mail, title: "Let's Connect", description: "Collaborate on your next big project", color: "text-teal-400", gradient: "hover:bg-gradient-to-br hover:from-teal-500/10 hover:to-transparent" }]
                .map(({ Icon, title, description, color, gradient }) => (
                  <div
                    key={title}
                    className={`p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm ${gradient}
                      transition-all duration-500 hover:scale-105 hover:-translate-y-2
                      hover:shadow-xl hover:shadow-blue-500/10 group cursor-pointer border border-gray-700/50 hover:border-blue-400/50`}
                  >
                    <Icon className={`w-12 h-12 mb-6 ${color} mx-auto transform group-hover:rotate-12 transition-transform`} />
                    <h3 className="text-2xl font-bold mb-4">{title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {description}
                    </p>
                  </div>
                ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 mt-16"
            >
              <button className="group px-8 py-4 bg-purple-600 rounded-xl relative overflow-hidden">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 
                  transition-transform origin-left duration-300"></div>
              </button>

              <button 
                onClick={handleContactClick}
                className="group px-8 py-4 border-2 border-purple-400 rounded-xl relative overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-purple-400/10 transform scale-x-0 group-hover:scale-x-100 
                  transition-transform origin-left duration-300"></div>
              </button>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="mt-24 animate-bounce">
              <ArrowDown className="mx-auto w-8 h-8 text-gray-400 hover:text-blue-400 
                transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              My Expertise
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative p-6 rounded-xl overflow-hidden"
                >
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" style={{ padding: '1px' }} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-12 h-12 text-purple-400 group-hover:text-purple-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">{skill.name}</h3>
                    
                    {/* Tech Stack */}
                    <div className="space-y-3">
                      {skill.tech.map((tech, techIndex) => (
                        <div key={techIndex} className="relative">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">{tech}</span>
                          </div>
                          <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              transition={{ duration: 1, delay: index * 0.2 + techIndex * 0.1 }}
                              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              My Journey
            </motion.h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" />

              {/* Timeline Items */}
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 
                    transform -translate-x-1/2 border-4 border-gray-900" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700
                      hover:border-purple-400 transition-all duration-300 group hover:-translate-y-2">
                      <span className="text-purple-400 font-mono">{item.year}</span>
                      <h3 className="text-xl font-bold mt-2 mb-1">{item.title}</h3>
                      <p className="text-purple-300 mb-2">{item.company}</p>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-sm bg-gray-700/50 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="list-disc list-inside text-gray-400 mt-4">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Experience
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="text-purple-400 font-bold text-lg w-20">{item.year}</div>
                  <div className="flex-1 p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm
                    border border-gray-700">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-purple-400 mb-2">{item.company}</p>
                    <p className="text-gray-400">{item.description}</p>
                    <ul className="list-disc list-inside text-gray-400 mt-4">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-400 mb-8">
              Have a project in mind? Let's create something amazing.
            </p>
            <button
              onClick={handleContactClick}
              className="px-8 py-4 bg-purple-600 rounded-xl hover:bg-purple-500
                transition-all duration-300 transform hover:scale-105
                hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25"
            >
              Get In Touch
            </button>
          </div>
        </section>
      </main>
      
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 
          rounded-lg shadow-lg animate-fade-in-up">
          Email copied successfully!
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Home;