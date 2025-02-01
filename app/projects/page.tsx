'use client';

import { motion } from 'framer-motion';
import { Globe, Palette, Database, Code, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { JSX } from 'react';

const projects = [
  {
    title: "DesignFusion Studio",
    description: "A modern website for my graphic design projects, built with Next.js, Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    link: "https://www.designfusion.studio/",
    github: "https://github.com/Hesara2003/Graphic-Design-Portfolio",
    features: [
      "Modern Design",
      "Responsive Layout",
      "Custom Animations",
      "SEO Optimized"
    ],
    bgImage: "/img/graphic-design.png"
  },
  {
    title: "Nex-Gen Animated Website",
    description: "Build and Deploy an Sleek, Responsive, and Animated Website",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "GSAP"],
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    link: "https://animated-website-7cf87.web.app/",
    github: "https://github.com/Hesara2003/Animated-Website",
    features: [
      "Interactive Animations",
      "Dark Mode",
      "Custom Design",
      "Responsive Layout"
    ],
    bgImage: "/img/next-gen.png"
  },

  {
    title: "GunTracker",
    description: "Developed a real-time weapon detection system using Python and OpenCV",
    tags: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    link: "https://www.linkedin.com/in/hesaraperera/details/projects/",
    github: "https://github.com/Hesara2003/Gun-tracker",
    features: [
      "Real-time Detection",
      "Machine Learning",
      "OpenCV Integration",
      "Custom Design"
    ],
    bgImage: "/img/gun-tracker.png"
  },

  {
    title: "Landmine Detection Systemr",
    description: "As part of my Year 1, Semester 1 project, I developed a basic landmine detection system using a Arduino and magnetic sensor to detect metallic landmines",
    tags: ["Arduino", "C", "Electronics", "Sensors"],
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    link: "https://www.linkedin.com/in/hesaraperera/details/projects/",
    github: "https://www.linkedin.com/in/hesaraperera/details/projects/",
    features: [
      "Landmine Detection",
      "Sensor Integration",
      "Custom Design",
      "Electronics"
    ],
    bgImage: "/img/Land Mine.png"
  },
];

// SVG Pattern for the grid
const GridPattern = () => (
  <svg className="absolute inset-0 h-full w-full stroke-gray-600/20" fill="none">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 .5h40M.5 0v40" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)" />
  </svg>
);

// Noise texture component
const NoiseTexture = () => (
  <svg className="absolute inset-0 h-full w-full opacity-20 mix-blend-soft-light">
    <filter id="noiseFilter">
      <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.8" 
        numOctaves="4" 
        stitchTiles="stitch"
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: JSX.Element;
  link: string;
  github: string;
  features: string[];
  bgImage: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden h-full"
    >
      {/* Background Image with Next.js Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.bgImage}
          alt={`${project.title} background`}
          fill
          className="object-cover object-center opacity-5 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-105"
          quality={75}
          priority={index === 0}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-gray-900/90 group-hover:from-gray-800/80 group-hover:via-gray-900/85 group-hover:to-gray-900/80 transition-all duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gray-700/30 rounded-xl backdrop-blur-sm">
            {project.icon}
          </div>
          <h2 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
            {project.title}
          </h2>
        </div>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-1.5 text-sm bg-gray-700/30 backdrop-blur-sm text-gray-300 rounded-full hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <ul className="space-y-3 mb-8">
          {project.features.map((feature) => (
            <motion.li 
              key={feature} 
              className="flex items-center gap-3 text-gray-300"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Code className="w-4 h-4 text-purple-400" />
              <span className="hover:text-purple-300 transition-colors duration-200">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4">
          <Link 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            View Live
          </Link>
          <Link 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500/10 rounded-xl transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            Source Code
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 75 }
      ]
    },
    {
      title: "Backend",
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Firebase", level: 85 },
        { name: "Vercel", level: 90}
      ]
    },
    {
      title: "Tools & Others",
      color: "from-emerald-400 to-teal-400",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 70 },
        { name: "Docker", level: 80 }
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Tech Stack
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {techCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="group relative"
          >
            {/* Card Background with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              style={{ padding: '1px' }}
            >
              <div className="absolute inset-0 bg-gray-900 rounded-2xl" />
            </div>

            {/* Card Content */}
            <div className="relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 
              hover:border-gray-600/50 transition-all duration-500 h-full"
            >
              {/* Floating Gradients */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${category.color} 
                  rounded-full blur-[32px] opacity-30`}
              />

              <h3 className="text-2xl font-bold text-white mb-8 relative">
                {category.title}
              </h3>

              <div className="space-y-6 relative">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (idx * 0.2) + (skillIdx * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (idx * 0.2) + (skillIdx * 0.1) }}
                        className={`h-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-gray-900">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] 
          bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_110%)]" />
        
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
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work and technical projects. Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <TechStackSection />
      </main>
      
      <div className="flex-grow" />
      <Footer />
    </div>
  );
};

export default ProjectsPage;