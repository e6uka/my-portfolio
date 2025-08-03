import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Python", level: 80, category: "Backend" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "AWS", level: 75, category: "DevOps" },
    { name: "Docker", level: 70, category: "DevOps" }
  ];

  const categories = ["Frontend", "Backend", "Database", "DevOps"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use 
            to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              style={{
                animationDelay: `${categoryIndex * 100}ms`
              }}
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                {category}
              </h3>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 2 + skillIndex) * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-slate-300">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript", "React", "Vue.js", "Angular", "Node.js", "Express.js",
              "Next.js", "Nuxt.js", "TypeScript", "Python", "Django", "FastAPI",
              "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes",
              "Git", "GitHub", "GitLab", "Figma", "Adobe XD", "Tailwind CSS"
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-sm hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200 interactive"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;