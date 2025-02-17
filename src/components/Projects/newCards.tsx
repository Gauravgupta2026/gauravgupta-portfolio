// "use client";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Sachetana",
//     subtitle: "[HACKATHON]",
//     description: "A mental wellness partner",
//     image: "/sachetana.png",
//   },
//   {
//     title: "NotCards",
//     subtitle: "[SOLO]",
//     description: "A fun cards game for teens",
//     image: "/cards.png",
//   },
//   {
//     title: "TeamUp",
//     subtitle: "[ASSIGNMENT]",
//     description: "Innovative team collaboration tool",
//     image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80",
//   },
//   {
//     title: "Research Spotlight",
//     subtitle: "[CLIENT WORK]",
//     description: "A directory for the CSE Dept.",
//     image: "/spotlight.png",
//   },
//   {
//     title: "Sachetana",
//     subtitle: "[HACKATHON]",
//     description: "A mental wellness partner",
//     image: "/sachetana.png",
//   },
  
// ];

// export default function Project() {
//   return (
//     <div>
//       <div className="bg-white text-black">
//         <div className="py-10">
//           <div className="px-6 mb-44 ">
//             <div className="flex grid-cols-2 justify-between">
//             <h2 className="text-5xl font-light ">Projects</h2>
              
//               <div className="flex items-end  text-lg w-[800px]">
//                 <p className="text-black">
//                   A collection of projects that showcase innovation across different domains - from mental health, research organization to fun games.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Cards Section */}
//           <div className="overflow-hidden px-6">
//             <div className="flex items-start justify-between">
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative flex flex-col w-[300px] h-[400px] transition-all group"
//                 >
//                   {/* Project Text */}
//                   <div >
//                     <span className="text-md font-medium text-gray-900 block mb-10">
//                       0{index + 1}.
//                     </span>
//                     <h3 className="text-lg">{project.title}</h3>
//                     <p className="text-sm font-medium text-black pb-2">{project.subtitle}</p>
                    
//                   </div>

//                   {/* Image with Hover Effect */}
//                   <div className="relative w-full flex-grow overflow-hidden">
//                     <motion.img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 group-hover:origin-top"
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

          
//         </div>
//       </div>
//     </div>
//   );
// }
