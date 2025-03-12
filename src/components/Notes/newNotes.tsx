import { Divider } from "@nextui-org/react";

export default function NewNotes() {
  const notes = [
    { title: "Privacy Notes", link: "https://substack.com/p/privacy" },
    { title: "Listerine Notes", link: "https://substack.com/p/privacy" },
    { title: "JJK : Souls x AI Notes", link: "https://substack.com/p/privacy" },
    { title: "Design Systems Notes", link: "https://substack.com/p/privacy" },
  ];

  return (
    <div className="px-80 pb-40 bg-zinc-50 text-black">
      <div className=" pt-24 pb-20 flex flex-col items-center">
        <h3 className="text-5xl font-light text-start items-start justify-start sm:text-7xl tracking-wide">
          notes
        </h3>
        <p className="pt-8 text-left text-lg text-gray-400">[ thoughts* ]</p>
      </div>

      {notes.map((note, index) => (
        <div key={index} className="hover:bg-zinc-200 hover:duration-500">
          <div className="py-10 px-4 flex justify-between items-center">
            <span className="text-black">{note.title}</span>
            <a
              href={note.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white"
            >
              Read More
            </a>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
}
