import { useEffect, useRef, useState } from 'react';

const notes = [
    { title: 'Privacy articles' },
    { title: 'Listerine' },
    { title: 'JJK : Souls x AI' },
    { title: 'Design Systems' },
    { title: 'AI Research' },

];

export default function Notes() {
    const [isHovered, setIsHovered] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let animationFrameId: number;

        const scroll = () => {
            if (scrollContainer && !isHovered) {
                scrollContainer.scrollLeft += 1;
                
                // Reset scroll position when reaching the end
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
      <section className=" pt-10 pb-24 bg-[#0c0c0c] text-[#F0F1F2]  overflow-hidden">
      <div className="mx-4">
      <div className="h-auto relative w-full pt-20 pb-44 flex flex-col items-center">
      
      <h3 className="text-5xl font-light text-start items-start justify-start sm:text-7xl tracking-wide">notes</h3>
      <p className="mt-8 text-left text-lg text-gray-400">[thoughts*]</p>
      
    </div>
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-16 overflow-x-hidden"
        >
          {/* Duplicate notes for continuous scroll effect */}
          {[...notes, ...notes].map((note, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[320px] h-[280px] bg-zinc-900 hover:scale-200 transition-transform duration-600"
            >
              <div className="text-white p-8">
                <h3 className="text-lg">{note.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}