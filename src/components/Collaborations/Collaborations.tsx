const collaborators = [
  "/MIT.png",
  "/KMC.png",
  "/mahe.png",
  "/LU.jpeg",
  "/superteam.jpg",
];

export default function Collaborations() {
  return (
    <section className="bg-white overflow-hidden mx-4 py-40">
      
      {/* <div className="grid grid-cols-2 pb-32">
        <h2 className="text-4xl text-black font-light ">Collab</h2>

        <div className="flex items-end">
          <p className="text-black/60 text-md">
            With the above projects, I have so far worked and helped...
          </p>
        </div>
      </div> */}

      {[...Array(1)].map((_, i) => (
        <div key={i} className="flex justify-between gap-10">
          {collaborators.map((collab, index) => (
            <img
              key={index}
              src={collab}
              alt="Collaborator"
              className="h-14 "
            />
          ))}
        </div>
      ))}
    </section>
  );
}
