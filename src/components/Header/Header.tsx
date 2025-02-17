import React from 'react';
import HeroSection from './HeroSection';
import UnderlineToBackgroundDemo from './nav_text';

const Header: React.FC = () => {
  return (
      // <header className="bg-gray-50">
      <header className="bg-[#0c0c0c] text-[#F0F1F2]">
        <div className="relative py-4">
          <div className="mx-4 flex justify-between items-center">
            {/* Left text */}
            <div>
              <h1 className="text-xl">Gaurav Gupta</h1>
            </div>
            
            {/* Center text */}
            <div className="text-center">
              <UnderlineToBackgroundDemo/>
            </div>

            {/* Right text */}
            <div>
              <p className="text-xl">Github</p>
            </div>
          </div>
        </div>
        <HeroSection />
      </header>
  );
};

export default Header;
