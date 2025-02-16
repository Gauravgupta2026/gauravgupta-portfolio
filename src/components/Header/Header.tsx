import React from 'react';
import HeroSection from './HeroSection';

const Header: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <header>
        <div className="relative py-4">
          {/* Top left text */}
          <div className="absolute mx-4">
            <h1 className="text-md ">Gaurav Gupta</h1>
          </div>
          
          {/* Centered text */}
          <div className="text-center">
            <span className="text-sm">
              Engineering Student —— Developer, Adventurer, Photographer
            </span>
          </div>
        </div>
        <HeroSection />
      </header>
    </div>
  );
};

export default Header;
