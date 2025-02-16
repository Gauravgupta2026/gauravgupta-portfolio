import React from 'react';

const TechStack: React.FC = () => {
  const frameworks = [
    {
      name: 'React',
      logo: '/react.svg'
    },
    {
      name: 'TypeScript',
      logo: '/typescript.svg'
    },
    {
      name: 'Node.js',
      logo: '/node.svg'
    },
    {
      name: 'NextJs',
      logo: '/nextjs.svg'
    },
    {
      name: 'Supabase',
      logo: '/supabase.svg'
    },
    {
      name: 'Figma',
      logo: '/figma.svg'
    },
    {
      name: 'django',
      logo: '/django.svg'
    }
  ];

  return (

        <div className="flex justify-center items-center gap-40 py-32 flex-wrap">
        {frameworks.map((framework, index) => (
            <img
            key={index}
            src={framework.logo}
            alt={framework.name}
            title={framework.name}
            className="w-[65px] h-[65px] object-contain hover:scale-110 transition-transform"
            />
        ))}
        </div>

    
  );
};

export default TechStack;
