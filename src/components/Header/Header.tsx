import React from 'react';
import HeroSection from './HeroSection';

const Header: React.FC = () => {
  return (
      <header className="bg-gray-50">
        <div className="relative py-4">
          <div className="mx-4 flex justify-between items-center">
            {/* Left text */}
            <div>
              <h1 className="text-lg">Gaurav Gupta</h1>
            </div>
            
            {/* Center text */}
            <div className="text-center">
              <p className="text-lg">
                Engineering Student —— Developer, Adventurer, Photographer
              </p>
            </div>

            {/* Right text */}
            <div>
              <p className="text-lg">Resume</p>
            </div>
          </div>
        </div>
        <HeroSection />
      </header>
  );
};

export default Header;
