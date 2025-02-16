#!/bin/bash

# Create main directories
mkdir -p src/{components,pages,data}

# Create component subdirectories
mkdir -p src/components/{Header,TechStack,Projects,Collaborations,Notes}
mkdir -p src/pages/Home

# Create component files
cat > src/components/Header/Header.tsx << 'EOF'
import React from 'react';
import HeroSection from './HeroSection';

const Header: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <header className="max-w-6xl mx-auto">
        <div className="text-center py-12">
          <span className="text-sm">
            Engineering Student —— Developer, Adventurer, Photographer
          </span>
        </div>
        <HeroSection />
      </header>
    </div>
  );
};

export default Header;
EOF

cat > src/components/Header/HeroSection.tsx << 'EOF'
import React, { useState, useEffect } from 'react';
import { heroImages } from '../../data/constants';

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-6 pb-12">
      <div className="bg-black p-4 aspect-[16/9] relative overflow-hidden">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Landscape ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 grayscale ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
EOF

# Create placeholder files for other components
touch src/components/TechStack/TechStack.tsx
touch src/components/Projects/ProjectCard.tsx
touch src/components/Collaborations/Collaborations.tsx
touch src/components/Notes/Notes.tsx

# Create Home page
touch src/pages/Home/Home.tsx

# Create constants file
cat > src/data/constants.ts << 'EOF'
export const heroImages = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&auto=format&fit=crop&q=80',
];

export const projects = [
  {
    title: 'SureHelpers',
    subtitle: 'A Mental Wellness Portal',
    description: 'This project aims to bridge the gap between mental health professionals and students in a college environment.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop&q=80',
  },
  // Add more projects as needed
];

export const collaborators = [
  'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Manipal_University_logo.svg/1200px-Manipal_University_logo.svg.png',
  // Add more collaborators as needed
];

export const notes = [
  { title: 'Privacy articles' },
  { title: 'Listerine' },
  { title: 'JJK : Souls x AI' },
];
EOF

# Create basic App.tsx
cat > src/App.tsx << 'EOF'
import React from 'react';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Home />
    </div>
  );
}

export default App;
EOF

# Make the script executable
chmod +x setup-project.sh

echo "Project structure has been created successfully!"
EOF