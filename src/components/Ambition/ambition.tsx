import { Divider } from "@nextui-org/react";


export default function Ambition() {
  return (
    <div className="bg-white text-black">
      <div className="mx-4 pb-44">
        <div className="flex grid-cols-2 ">
          <div className="pr-36">
            <Divider/>
            <h3 className="text-md pt-2  pr-4">Career ambitions</h3>
            <p className="text-md leading-relaxed pt-10">
              I aim for a position that gives me the power to influence the
              world through technology. I want to be part of something big and
              bold, I want to make a dent in the world and I believe I have the
              skills to make it happen.
            </p>
          </div>
          <div>
          <Divider/>
            <h3 className="text-md pt-2">Creative ambitions</h3>
            <p className="text-md leading-relaxed pt-10 pr-20">
              I am future-oriented forever, and a fast mover. In this journey, I
              don't intend to lose my humanity. I want to be able to tell
              stories. This is important to me to go far enough, far that I can
              see what others can't see. I want to be able to make a difference
              in the world. I want to make it more young, more vibrant, and more
              alive.
            </p>
          </div>
        </div>
      </div>
      <Divider/>
    </div>
  );
}
