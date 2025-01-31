'use client';

import { useState, JSX } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ExternalLink, Github, Code, Palette, Database, Globe, Star, Users, ShoppingCart, CheckCircle } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import NextGen from '../../img/Next-Gen Web.png'
import Portfolio from '../../img/Portfolio.png'
import LandMineSystem from '../../img/Land Mine.png'
import GraphicDesign from '../../img/Graphic Design.png'
import Image from 'next/image';
import ProjectModal from '../../components/ProjectModal';

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
  image: string;
  features: string[];
}

const ProjectCard = ({ project, index, onView }: { project: Project, index: number, onView: (project: Project) => void }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-xl overflow-hidden group"
    >
      {/* Background Image with Hover Effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95 group-hover:opacity-75 transition-opacity duration-300 z-10" />
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
          quality={90}
          priority={index === 0}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 p-6 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-purple-500/10 rounded-xl">
            {project.icon}
          </div>
          <div className="flex space-x-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-purple-500/10 rounded-full text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onView(project)}
          className="mt-4 w-full py-2 px-4 rounded-lg bg-purple-500 hover:bg-purple-600 transition-colors flex items-center justify-center space-x-2"
        >
          <span>View Details</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      title: "Next-Gen Website",
      description: "Buld and deploy a modern website using Next.js, Tailwind CSS, GSAP and Framer Motion to create stunning animations and interactive UI elements.",
      tags: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion"],
      icon: <Palette className="w-6 h-6" />,
      link: "https://animated-website-7cf87.web.app/",
      github: "https://github.com/Hesara2003/Animated-Website",
      image: NextGen,
      features: [
        "Interactive UI",
        "Stunning animations",
        "Responsive design"
      ]
    },
    {
      title: "Customized Animated Portfolio Website",
      description: "A customized portfolio website built with React and Framer Motion to showcase projects and skills with 3D animations and interactive elements.",
      tags: ["React", "Framer Motion", "TypeScript", "Tailwind CSS"],
      icon: <Users className="w-6 h-6" />,
      link: "https://hesara-portfolio.web.app/",
      github: "https://github.com/Hesara2003",
      image: Portfolio,
      features: [
        "3D animations",
        "Interactive UI",
        "Project showcase"
      ]
    },
    {
      title: "Autonomous Landmine Detection System Using Magnetic Field",
      description: "Developed an autonomous landmine detection system using Arduino, magnetic field sensors and algorithms to detect landmines in real-time.",
      tags: ["Arduino", "C", "Magnetic Field Sensors", "Algorithms"],
      icon: <Star className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/hesaraperera/details/projects/",
      github: "https://www.linkedin.com/in/hesaraperera/details/projects/",
      image: LandMineSystem,
      features: [
        "Real-time detection",
        "Autonomous operation",
        "Algorithm optimization"
      ]
    },
    {
      title: "Graphic Design Portfolio",
      description: "A portfolio website showcasing graphic design projects and UI/UX designs created using figma",
      tags: ["Figma", "UI/UX Design", "Graphic Design", "Illustrator"],
      icon: <Globe className="w-6 h-6" />,
      link: "https://www.designfusion.studio/",
      github: "https://github.com/Hesara2003/Graphic-Design-Portfolio",
      image: GraphicDesign,
      features: [
        "3D animations",
        "Interactive UI",
        "Project showcase",
        "Contact form"
      ]
    }
  ];

  const techStack = {
    "Frontend": [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Three.js", level: "Intermediate" },
      { name: "Redux", level: "Advanced" }
    ],
    "Backend": [
      { name: "Node.js", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" }
    ],
    "DevOps & Tools": [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Linux", level: "Advanced" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] 
          bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_110%)]" />
        
        {/* Animated Orbs */}
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
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3C/rect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <Navbar />
      
      {/* Existing content */}
      <main className="relative z-10">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,rgba(147,51,234,0.1),transparent)] animate-pulse" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <span className="block text-sm font-semibold text-purple-400 mb-4 tracking-wider uppercase">
                  My Work
                </span>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                    bg-clip-text text-transparent animate-gradient relative">
                    Featured Projects
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 
                    opacity-20 blur-xl -z-10" />
                </h1>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                >
                  A collection of my recent work showcasing 
                  <span className="text-purple-400 mx-1">full-stack development</span>, 
                  <span className="text-blue-400 mx-1">UI/UX design</span>, and 
                  <span className="text-pink-400 mx-1">problem-solving</span> abilities.
                </motion.p>

                {/* Decorative Elements */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 
                  bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              </motion.div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} onView={setSelectedProject} />
              ))}
            </div>

            {/* Tech Stack Section */}
            <div className="relative">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="inline-block animate-float bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <div key={category} className="space-y-6">
                    <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                      {category}
                    </h3>
                    <div className="space-y-4">
                      {technologies.map((tech, index) => (
                        <div
                          key={tech.name}
                          className="group relative"
                          onMouseEnter={() => setHoveredTech(`${category}-${index}`)}
                          onMouseLeave={() => setHoveredTech(null)}
                        >
                          <div className="relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-gray-700 p-4 transition-all duration-300 hover:bg-white/10">
                            <div className="flex justify-between items-center">
                              <span className="text-white font-medium">
                                {tech.name}
                              </span>
                              <span className={`text-sm ${
                                tech.level === 'Advanced' ? 'text-green-400' : 'text-yellow-400'
                              }`}>
                                {tech.level}
                              </span>
                            </div>
                            <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  hoveredTech === `${category}-${index}` ? 'w-full' : 'w-0'
                                } ${
                                  tech.level === 'Advanced' ? 'bg-green-400' : 'bg-yellow-400'
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer />
    </div>
  );
};

export default ProjectsPage;