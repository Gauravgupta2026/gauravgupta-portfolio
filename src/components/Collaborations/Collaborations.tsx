const collaborators = [
    '/MIT.png',
    '/KMC.png',
    '/mahe.png',
    '/LU.jpeg',
    '/superteam.jpg',
  ];
  

export default function Collaborations() {
    return (
        <section className=" overflow-hidden px-20 py-32">
        {/* <h2 className="text-2xl mb-8 px-6">Collabs</h2> */}
        
          {[...Array(1)].map((_, i) => (
            <div key={i} className="flex justify-between gap-32">
              {collaborators.map((collab, index) => (
                <img key={index} src={collab} alt="Collaborator" className="h-12" />
              ))}
            </div>
          ))}
      </section>
    )
}