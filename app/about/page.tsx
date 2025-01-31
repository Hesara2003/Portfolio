'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Code, Palette, Globe, Coffee, Database, Cpu, Cloud, Shield, Star, Heart, Quote, BookOpen, Zap, ExternalLink } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, initialPosition }: { icon: React.ComponentType<{ className?: string }>, initialPosition: { x: number, y: number } }) => {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        let newX = prev.x + direction.x;
        let newY = prev.y + direction.y;
        if (newX < 0 || newX > 90) setDirection(d => ({ ...d, x: -d.x }));
        if (newY < 0 || newY > 90) setDirection(d => ({ ...d, y: -d.y }));
        return {
          x: Math.max(0, Math.min(90, newX)),
          y: Math.max(0, Math.min(90, newY))
        };
      });
    }, 50);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 0.2,
        scale: 1,
        x: [position.x + '%', position.x + 2 + '%', position.x + '%'],
        y: [position.y + '%', position.y + 2 + '%', position.y + '%'],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <Icon className="w-8 h-8 md:w-12 md:h-12 text-purple-400/20 hover:text-purple-400 transition-colors duration-300" />
    </motion.div>
  );
};

interface Skill {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="p-6 rounded-lg backdrop-blur-sm bg-white/5 border border-gray-700 hover:border-purple-400 transition-all duration-300"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="text-purple-400 mb-4"
    >
      {skill.icon}
    </motion.div>
    <h3 className="font-semibold text-lg text-white mb-2">{skill.name}</h3>
    <p className="text-gray-300">{skill.description}</p>
  </motion.div>
);

const StatCounter = ({ value, label }: { value: string, label: string }) => {
  const [count, setCount] = useState(0);
  const finalValue = parseInt(value);

  useEffect(() => {
    let start = 0;
    const increment = finalValue / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        setCount(finalValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [finalValue]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.8 }}
      className="text-center"
    >
      <motion.div
        className="text-4xl font-bold text-purple-400 mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {count}+
      </motion.div>
      <div className="text-gray-300">{label}</div>
    </motion.div>
  );
};

const skills: Skill[] = [
  {
    icon: <Code className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
    name: 'Web Development',
    description: 'Building responsive and modern web applications.'
  },
  {
    icon: <Palette className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
    name: 'UI/UX Design',
    description: 'Designing user-friendly and aesthetic interfaces.'
  },
  {
    icon: <Globe className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
    name: 'Graphic Design',
    description: 'Creating visually appealing graphics and illustrations.'
  },
  {
    icon: <Coffee className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
    name: 'Backend Development',
    description: 'Creating robust and scalable backend systems.'
  }
];

const blogPosts = [
  {
    icon: <BookOpen className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
    category: 'Mentorship',
    title: 'Mentorship in Tech: How Guiding Beginners Strengthens Your Own Skills',
    description: 'The benefits of mentorship and how it can help you grow as a developer.',
    date: 'Dec 22, 2024',
    link: 'https://medium.com/@hesarapasandul632/mentorship-in-tech-how-guiding-beginners-strengthens-your-own-skills-4f7c6eedd94f'
  },
  {
    icon: <Zap className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
    category: 'Web Development',
    title: 'Building a Beginner-Friendly E-Commerce App: Lessons from a Hybrid Developer and My Team',
    description: 'The process of building an e-commerce app and the lessons learned along the way.',
    date: 'Dec 22, 2024',
    link: 'https://medium.com/@hesarapasandul632/building-a-beginner-friendly-e-commerce-app-lessons-from-a-hybrid-developer-and-my-team-80e3798c9121'
  }
];

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-900">
      <div className="fixed inset-0 z-0">
        <motion.div
          animate={{
            backgroundPosition: [`0px ${scrollY * 0.5}px`, `0px ${scrollY * 0.5 + 1000}px`],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_110%)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
          {[Code, Database, Cloud, Shield, Star, Heart, Cpu].map((Icon, index) => (
            <FloatingIcon
              key={index}
              icon={Icon}
              initialPosition={{
                x: Math.random() * 90,
                y: Math.random() * 90
              }}
            />
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center space-y-6 max-w-4xl mx-auto px-4"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Hello, I'm a Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl text-gray-300"
            >
              Crafting digital experiences that make a difference
            </motion.p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value="8" label="Projects Built" />
              <StatCounter value="4" label="Hackathons Joined" />
              <StatCounter value="6" label="Tech Skills" />
              <StatCounter value="34" label="Certifications" />
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Latest Blog Posts
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {post.icon}
                        <span className="px-3 py-1 text-sm bg-purple-500/20 rounded-full text-purple-300">
                          {post.category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">5 min read</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-300">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-400">{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-400 group-hover:text-purple-300">
                        <span>Read More</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default About;