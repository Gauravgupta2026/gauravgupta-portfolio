"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";


export function CanvasRevealEffectDemo() {
  return (
  
      <div className=" pt-52 pb-52 items-center justify-center bg-zinc-950 dark:bg-zinc-950 w-full gap-10  px-40">
                <h2 className="text-5xl text-white mb-28">Projects</h2>
        <div className="flex flex-col lg:flex-row gap-20">
        <Card
          title="Sachetana"
          subtitle="Mental Wellness Portal"
          description="A platform bridging the gap between mental health professionals and students in college."
          image="/sachetana.png"
        />
        <Card
          title="NotCards"
          subtitle="Interactive Card Game"
          description="A modern take on classic card games with real-time multiplayer capabilities."
          image="cards.png"
        />
        <Card
          title="Research Spotlight"
          subtitle="Academic Platform"
          description="Showcasing and connecting research projects across different institutions."
          image="spotlight.png"
        />
        {/* <Card
          title="Research Spotlight"
          subtitle="Academic Platform"
          description="Showcasing and connecting research projects across different institutions."
          image="spotlight.png"
        /> */}
      </div>
      </div>

  );
}

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const Card = ({ title, subtitle, description, image }: CardProps) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-end justify-start dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] bg-black overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-8 left-8 text-white"
            >
              {/* <h2 className="text-3xl font-medium mb-2">{title}</h2> */}
              <p className="text-white/80">View Project →</p>
            </motion.div>
          </motion.div>
        ) : (
          <div className="space-y-4 mb-4">
            <div className="text-center mb-8 absolute top-8 left-1/2 -translate-x-1/2"></div>
            <div className="space-y-2">
              <h2 className="text-2xl font-medium text-white">{title}</h2>
              <h3 className="text-md pb-6 text-white/80">{subtitle}</h3>
              <p className="text-sm text-white/60 max-w-[400px]">
                {description}
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
