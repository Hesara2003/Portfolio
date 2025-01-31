import Image, { StaticImageData } from 'next/image';
import { JSX } from 'react';
import Project from '../components/ProjectModal';

interface ProjectCardProps {
    project: {
      title: string;
      description: string;
      tags: string[];
      icon: JSX.Element;
      link: string;
      github: string;
      features: string[];
    };
    index: number;
    onView: (project: Project) => void;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onView }) => {
    return (
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-start">
        <div className="flex items-center gap-3 mb-4">
          {project.icon}
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
        <p className="text-gray-300 text-sm mb-2">{project.description}</p>
        <div className="flex gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onView(project)}
          className="mt-auto bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
        >
          View Project
        </button>
      </div>
    );
  };
  
  export default ProjectCard;