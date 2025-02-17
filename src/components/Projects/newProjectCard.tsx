import React, { useState, useEffect, useRef } from "react";
import MediaBetweenText from "./reveal_project";

const elements = [
    {src: "https://cdn.cosmos.so/53454cbe-a4ec-4782-923f-a82d70e12645.mp4", left: "Sachetana", right: "Mental Wellness Partner", url: "https://www.instagram.com/tim_rodenbroeker/"},
    {src: "https://cdn.cosmos.so/499ddb3b-57cf-4c07-996c-f797fadf64ab.mp4", left: "Research Spotlight ", right: "Organizing Research", url: "https://www.instagram.com/polyhop/"},
    {src: "https://cdn.cosmos.so/444e4a2a-45a6-477f-b342-6b6bc9a7c53b.mp4", left: "NotCards", right: "Fun Cards Game", url: "https://www.instagram.com/andreiongd/"},
    {src: "https://cdn.cosmos.so/f533f1a8-9f67-4360-b395-7abc8594cac9.mp4", left: "Team Up", right: "Sports Scheduling", url: "https://www.instagram.com/lorrr.l/"},
];

export default function MediaBetweenTextScrollDemo() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

//   const lessThan = (size) => {
//     if (size === "sm") {
//       return screenWidth < 640;
//     }
//     return false;
//   };

  return (
    <div className="w-dvw h-auto items-center justify-center bg-white pb-32 text-black overflow-visible">
      <div className="h-auto relative w-full pt-44 pb-20 flex flex-col items-center">
      
        <h3 className="text-5xl font-light text-start items-start justify-start sm:text-7xl tracking-wide">projects</h3>
        <p className="mt-8 text-left text-lg text-gray-400">[Selected*]</p>
        
      </div>

      <div className="h-auto w-full flex flex-col space-y-44 mt-24 mb-44 justify-center items-center text-5xl ">
        {elements.map((element, index) => (
            <a href={element.url} target="_blank" rel="noreferrer" key={index}>
              <MediaBetweenText
                firstText={element.left}
                secondText={element.right}
                mediaUrl={element.src}
                mediaType="video"
                triggerType="inView"
                useInViewOptionsProp={{ once: false, amount: 0.5 }}
                mediaContainerClassName="w-full h-[60px] sm:h-[160px] overflow-hidden mx-1 sm:mx-16 mt-1 sm:mt-4"
                className="cursor-pointer text-lg sm:text-4xl font-light flex flex-row items-center justify-center"
                animationVariants={{
                  initial: { opacity: 0, y: 50 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, type: "spring", bounce: 0, delay: index * 0.2 },
                  },
                }}
              />
            </a>
        ))}
      </div>
    </div>
  );
}
