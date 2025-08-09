import React from 'react';
import styled from 'styled-components';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.card.background};
  border: 1px solid ${({ theme }) => theme.card.borderColor};
  &:hover {
    border: 1px solid ${({ theme }) => theme.card.hoverBorderColor};
  }
`;

const About: React.FC = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Focus",
      description: "Creating beautiful, user-centered designs that enhance user experience."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and smooth interactions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional digital products."
    }
  ];

  const textColorClass = theme === 'light' ? 'text-slate-900' : 'text-slate-300';
  const featureTitleColorClass = theme === 'light' ? 'text-slate-900' : 'text-white';
  const featureDescriptionColorClass = theme === 'light' ? 'text-slate-700' : 'text-slate-300';
  const sectionBgClass = theme === 'light' ? 'bg-[#c7c7c7]' : '';

  return (
    <section id="aboutme" className={`py-20 px-6 ${sectionBgClass}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className={`space-y-6 text-lg ${textColorClass} leading-relaxed`}>
              <p>
              Hi, I'm Ebuka, a frontend developer with a product-first mindset. 
              I specialize in crafting intuitive user interfaces and turning complex ideas into seamless, 
              user-friendly experiences. My approach goes beyond writing code — I think deeply about how products should feel, 
              how users interact with them, and how technology can solve real problems at scale.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in continuous learning and staying 
                ahead of industry trends.
              </p>
              
              <p>
                My approach combines technical expertise with creative problem-solving, 
                ensuring that every project not only functions flawlessly but also 
                delights users and achieves business goals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                className={`group p-6 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105 interactive`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors ${featureTitleColorClass}`}>
                  {feature.title}
                </h3>
                <p className={`${featureDescriptionColorClass} leading-relaxed`}>
                  {feature.description}
                </p>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;