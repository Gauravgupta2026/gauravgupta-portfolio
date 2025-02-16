const notes = [
    { title: 'Privacy articles' },
    { title: 'Listerine' },
    { title: 'JJK : Souls x AI' },


  ];


export default function Notes() {
    return (
      <section className="py-36 pb-36 bg-gray-50">
      <div className="mx-32">
        <h2 className="text-5xl mb-24">Notes</h2>
        <div className="flex justify-between items-center">
          {notes.map((note, index) => (
            <div key={index} className="w-[350px] h-[400px] bg-gray-900 hover:scale-105 transition-transform duration-300">
              <div className="text-white p-8 text-start">
                <h3 className="text-lg">{note.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}