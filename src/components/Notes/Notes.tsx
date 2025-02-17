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
      <section className="pt-10 pb-20 bg-gray-50 overflow-hidden">
      <div className="mx-4">
        <div className="grid grid-cols-2 pb-32">
            <h2 className="text-4xl text-black font-light ">Notes</h2>
              
              <div className="flex items-end">
                <p className="text-black/60 text-md">
                  A collection of projects that showcase innovation across different domains - from mental health, research organization to fun games.
                </p>
              </div>
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
              className="flex-shrink-0 w-[320px] h-[280px] bg-slate-200 hover:scale-200 transition-transform duration-600"
            >
              <div className="text-black/50 p-8">
                <h3 className="text-lg">{note.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}