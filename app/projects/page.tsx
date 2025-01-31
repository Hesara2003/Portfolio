'use client';

import { useState, JSX } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: JSX.Element;
  link: string;
  github: string;
  features: string[];
  bgColor: string;
}
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ExternalLink, Github, Code, Palette, Database, Globe, Star, Users, ShoppingCart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectModal from '../../components/ProjectModal';
import ProjectCard from '../../components/ProjectCard';

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

const projects: Project[] = [
  {
    title: "Next-Gen Web",
    description: "A modern web application built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    link: "https://next-gen-web.com",
    github: "https://github.com/username/next-gen-web",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects and skills.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    link: "https://portfolio.com",
    github: "https://github.com/username/portfolio",
    features: ["Interactive Animations", "Dark Mode", "Custom Design"],
    bgColor: "bg-pink-500/10"
  },
  // ...other projects
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Projects
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onView={setSelectedProject} />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;