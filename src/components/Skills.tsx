import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeProvider';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.tag.background};
  border: 1px solid ${({ theme }) => theme.card.borderColor};
  &:hover {
    border: 1px solid ${({ theme }) => theme.card.hoverBorderColor};
  }
`;

const ProgressBar = styled.div`
  background-color: ${({ theme }) => theme.progressBar.background};
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.tag.background};
  border: 1px solid ${({ theme }) => theme.tag.borderColor};
  color: ${({ theme }) => theme.tag.color};
  &:hover {
    color: ${({ theme }) => theme.tag.hoverColor};
  }
`;

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  const skills: Skill[] = [
    { name: "React", level: 85, category: "Frontend" },
    { name: "React native", level: 95, category: "Frontend" },
    // { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "Node.js", level: 1, category: "Backend" },
    { name: "Python", level: 1, category: "Backend" },
    { name: "PostgreSQL", level: 1, category: "Database" },
    { name: "MongoDB", level: 1, category: "Database" },
    { name: "AWS", level: 15, category: "DevOps" },
    { name: "Docker", level: 7, category: "DevOps" }
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

  const subheadingColorClass = theme === 'light' ? 'text-slate-900' : 'text-slate-300';
  const skillNameColorClass = theme === 'light' ? 'text-slate-900' : 'text-white';
  const skillLevelColorClass = theme === 'light' ? 'text-slate-600' : 'text-slate-400';

  return (
    <section id="skills" className={`py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl pb-1 font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className={`text-xl ${subheadingColorClass} max-w-3xl mx-auto`}>
            A comprehensive toolkit of modern technologies and frameworks that I use 
            to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <SkillCard
              key={category}
              className={`backdrop-blur-sm rounded-xl p-6 transition-all duration-300`}
              style={{
                animationDelay: `${categoryIndex * 100}ms`
              }}
            >
              <h3 className={`text-xl font-semibold mb-6 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}>
                {category}
              </h3>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${skillNameColorClass}`}>{skill.name}</span>
                        <span className={`text-sm ${skillLevelColorClass}`}>{skill.level}%</span>
                      </div>
                      
                      <ProgressBar className={`w-full rounded-full h-2 overflow-hidden`}>
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 2 + skillIndex) * 100}ms`
                          }}
                        />
                      </ProgressBar>
                    </div>
                  ))}
              </div>
            </SkillCard>
          ))}
        </div>

        {/* Technologies Cloud */}
        <div className="mt-16 text-center">
          <h3 className={`text-2xl font-semibold mb-8 ${subheadingColorClass}`}>
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript", "React", "Vue.js", "Angular", "Node.js",
              "Next.js", "Nuxt.js", "TypeScript", 
               "Redis", "AWS", "Docker", 'React native', 'ai',
              "Git", "GitHub", "GitLab", "Figma", "Tailwind CSS"
            ].map((tech, index) => (
              <TechTag
                key={tech}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 interactive`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {tech}
              </TechTag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;