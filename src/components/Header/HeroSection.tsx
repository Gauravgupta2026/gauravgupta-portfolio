import React, { useState, useEffect } from 'react';
import { heroImages } from '../../data/constants';
import { Divider } from '@nextui-org/react';

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    // <div className='bg-gray-50'>
    <div className='bg-white'>
      <div className="mx-10 pt-40 pb-44 flex justify-center">
      <div className="bg-black px-10 py-6 max-w-2xl w-full">
        <div className="aspect-[16/9] relative overflow-hidden">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Landscape ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-none duration-100 grayscale ${
                currentImage === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
      </div>
      <div className='flex text-xl justify-between pb-8 mx-4'>
        <p>Socials</p>

          <p className='text-xl'>Manipal, KA</p>
          <a href="mailto:gauravssa08@gmail.com" className="text-xl hover:underline">Send an Email</a>
      </div>

      
    </div>
    
  );
};

export default HeroSection;
