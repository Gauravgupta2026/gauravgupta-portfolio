const collaborators = [
  "/MIT.png",
  "/KMC.png",
  "/mahe.png",
  "/LU.jpeg",
  "/superteam.jpg",
];

export default function Collaborations() {
  return (
    <section className="bg-white overflow-hidden">
      
      <div className=" pb-64">
        <div className="text-center">
        <p className=" text-center text-lg text-gray-400">So far, I have collaborated and helped...</p>

        </div>
      </div>

      {[...Array(1)].map((_, i) => (
        <div key={i} className="flex mx-32 justify-between gap-4 pb-20 ">
          {collaborators.map((collab, index) => (
            <img
              key={index}
              src={collab}
              alt="Collaborator"
              className="h-16 "
            />
          ))}
        </div>
      ))}
    </section>
  );
}
