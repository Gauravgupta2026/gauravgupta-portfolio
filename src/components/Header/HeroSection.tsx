import React, { useState, useEffect } from 'react';
import { heroImages } from '../../data/constants';
import Header from './Header';


const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='h-[100vh]'>
      <Header />
      <div className='bg-[#0c0c0c] text-[#F0F1F2] h-full flex flex-col'>
        <div className="flex-auto flex items-center justify-center px-4 sm:px-6 md:px-10">
          <div className="bg-white px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 w-full max-w-xl">
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

        <div className='flex flex-col sm:flex-row text-base sm:text-lg md:text-xl justify-between px-4 pb-20 space-y-4 sm:space-y-0'>
          <p>Socials</p>
          <p>Manipal, KA</p>
          <a href="mailto:gauravssa08@gmail.com" className="hover:underline">Send an Email</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
