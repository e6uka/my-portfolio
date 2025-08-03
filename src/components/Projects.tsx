import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      image: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "OpenWeather API", "Expo"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio with smooth animations",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      featured: true
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "D3.js", "Express.js"]
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile app for tracking workouts and progress",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Flutter", "SQLite", "Provider"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in modern web development,
            from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl interactive ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  <button className="p-2 bg-slate-900/80 rounded-full hover:bg-blue-600 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-slate-900/80 rounded-full hover:bg-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-blue-300 border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spark Effect */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full transition-all duration-300 ${
                hoveredProject === project.id ? 'opacity-100 scale-150' : 'opacity-0 scale-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;