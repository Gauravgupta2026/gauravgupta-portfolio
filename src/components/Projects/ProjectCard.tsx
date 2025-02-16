
// const projects = [
//   {
//     title: "Sachetana",
//     subtitle: "A Mental Wellness Partner",
//     description:
//       "This project aims to bridge the gap between mental health professionals and students in a college. This app helps a student take medical assessments, schedule appointments and interact with the community",
//     image: "/sachetana.png"  },
//   {
//     title: "NotCards",
//     subtitle: "A fun cards game",
//     description:
//       "This project aims to bridge the gap between mental health professionals and students in a college environment. This app helps a student take medical assessments, schedule appointments and interact with the community",
//     image:
//       "/cards.png",
//   },
//   {
//     title: "Research Spotlight",
//     subtitle: "Organizing research at MIT",
//     description:
//       "This project aims to bridge the gap between mental health professionals and students in a college environment. This app helps a student take medical assessments, schedule appointments and interact with the community",
//     image:
//       "/spotlight.png",
//   },
// ];

// export default function ProjectCard() {
//   return (
//     <div className="bg-white text-white">
//       <div className="mx-20 pt-52 pb-52">
//         <h2 className="text-6xl mb-28">Projects</h2>
//         <div className="space-y-32">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className={`grid grid-cols-2  ${
//                 index % 2 === 0 ? "" : "direction-rtl"
//               }`}
//             >
//               {index % 2 === 0 ? (
//                 <>
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-3/4 object-cover"
//                   />
//                   <div className="flex flex-col justify-items items-start ">
//                     <h3 className="text-lg">{project.title}</h3>
//                     <p className="text-sm text-gray-400 mb-48">
//                       {project.subtitle}
//                     </p>
//                     <p className="text-sm pr-36 pb-10">{project.description}</p>
//                     <button className="bg-white text-black px-4 py-2 text-sm w-fit">
//                       Read More
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="flex flex-col justify-start items-start">
//                     <h3 className="text-lg">{project.title}</h3>
//                     <p className="text-sm text-gray-400 mb-56">
//                       {project.subtitle}
//                     </p>
//                     <p className="text-sm pr-36 pb-10">{project.description}</p>
//                     <button className="bg-white text-black px-4 py-2  text-sm w-fit">
//                       Read More
//                     </button>
//                   </div>
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-3/4 object-cover "
//                   />
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
