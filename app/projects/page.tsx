'use client';

import { useState, JSX } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ExternalLink, Github, Code, Palette, Database, Globe, Star, Users, ShoppingCart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import NextGen from '../../img/Next-Gen Web.png';
import Portfolio from '../../img/Portfolio.png';
import LandMineSystem from '../../img/Land Mine.png';
import GraphicDesign from '../../img/Graphic Design.png';
import Image, { StaticImageData } from 'next/image';
import ProjectModal from '../../components/ProjectModal';
import ProjectCard from '../../components/ProjectCard';

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: JSX.Element;
  link: string;
  github: string;
  image: StaticImageData; // Ensure this matches the type used in the data
  features: string[];
}

const projects: Project[] = [
  {
    title: "Next-Gen Web",
    description: "A modern web application built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    link: "https://next-gen-web.com",
    github: "https://github.com/username/next-gen-web",
    image: NextGen,
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"]
  },
  {
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects and skills.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    link: "https://portfolio.com",
    github: "https://github.com/username/portfolio",
    image: Portfolio,
    features: ["Interactive Animations", "Dark Mode", "Custom Design"]
  },
  // ...other projects
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-16">
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