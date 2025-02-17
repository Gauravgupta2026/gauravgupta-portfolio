"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/utils";

export function CardDemo() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Sachetana",
      subtitle: "Mental Wellness Portal",
      description: "A platform bridging the gap between mental health professionals and students in college.",
      image: "url('/sachetana.png')",
      hoverGif: "url('https://media.giphy.com/media/3o7btQ0NH6Kl8CxCfK/giphy.gif')",
      timeline: "4 months"
    },
    {
      title: "NotCards",
      subtitle: "Interactive Card Game",
      description: "A modern take on classic card games with real-time multiplayer capabilities.",
      image: "url('/cards.png')",
      hoverGif: "url('https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif')",
      timeline: "2 days"
    },
    {
      title: "Research Spotlight",
      subtitle: "Academic Platform",
      description: "Showcasing and connecting research projects across different institutions.",
      image: "url('/spotlight.png')",
      hoverGif: "url('https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif')",
      timeline: "3 months"
    },
    {
      title: "Team Up",
      subtitle: "Local Match Scheduling",
      description: "Made for the students of a college to organize games.",
      image: "url('/teamup.png')",
      hoverGif: "url('https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif')",
      timeline: "2 months"
    },
    {
      title: "Design System",
      subtitle: "UI Component Library",
      description: "A comprehensive design system for modern web applications.",
      image: "url('/design.png')",
      hoverGif: "url('https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif')",
      timeline: "4 months"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId: number;

    const scroll = () => {
      if (scrollContainer && !isHovered) {
        scrollContainer.scrollLeft += 1;

        if (scrollContainer.scrollLeft >= 
            scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <div className="w-full">
      <div className="mx-4">
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-8 overflow-x-hidden"
        >
          {[...projects, ...projects].map((project, index) => (
            <div key={index} className="flex-shrink-0 group">
              <div
                className={cn(
                  "w-[400px] cursor-pointer overflow-hidden relative card h-[300px] rounded-md shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                  "transition-all duration-500 ease-in-out",
                  "group-hover:scale-105 group-hover:translate-x-2",
                  "origin-left"
                )}
                style={{
                  backgroundImage: project.image,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div 
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  )}
                  style={{
                    backgroundImage: project.hoverGif,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="text relative z-50">
                  <h1 className="font-bold text-lg md:text-xl text-gray-50 relative">
                    {project.title}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative my-2">
                    {project.subtitle}
                  </p>
                  <p className="font-normal text-xs text-gray-50 relative">
                    {project.description}
                  </p>
                </div>
              </div>
              <h3 className="mt-2 text-lg font-medium text-black/80">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
