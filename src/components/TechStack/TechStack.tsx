import React from 'react';

const TechStack: React.FC = () => {
  const frameworks = [
    {
      name: 'Figma',
      logo: '/figma.svg'
    },
    {
      name: 'TypeScript',
      logo: '/typescript.svg'
    },
    {
      name: 'React',
      logo: '/react.svg'
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
      name: 'django',
      logo: '/django.svg'
    }
  ];

  return (

        <div className=" flex justify-center items-center bg-[#0c0c0c] gap-20 py-20 flex-wrap ">
        {frameworks.map((framework, index) => (
            <img
            key={index}
            src={framework.logo}
            alt={framework.name}
            title={framework.name}
            className="w-[75px] h-[75px] object-contain hover:scale-110 transition-transform invert"
            />
        ))}
        </div>

    
  );
};

export default TechStack;
