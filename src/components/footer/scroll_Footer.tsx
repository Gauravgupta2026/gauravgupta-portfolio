import React from "react"

const Preview: React.FC = () => {
  return (
    <div className="w-full bg-[#ffffff] items-center justify-center h-full overflow-auto">
      {/* add relative positioning to the main conent */}
      {/* <div className="relative w-dvw h-dvh z-10 text-2xl font-mono md:text-6xl font-light uppercase flex justify-center items-center bg-[#ffffff] text-gray-100 whitespace-pre">
        Get in touch?
      </div> */}

      {/* Sticky footer. The only important thing here is the z-index, the sticky position and the bottom value */}
      <div className="sticky z-100 bottom-0 left-0 w-full h-80 bg-[#f7f7f7] flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-[#5e5e5e]">
          <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
            
            <ul>
              <li className="hover:underline cursor-pointer">Github</li>
              <li className="hover:underline cursor-pointer">Instagram</li>
              <li className="hover:underline cursor-pointer">X (Twitter)</li>
            </ul>
          </div>
          <h2 className="absolute bottom-4 left-0  translate-y-1/3 sm:text-[192px]  text-[80px] text-[#e4e4e4] font-calendas">
            Gaurav Gupta
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Preview
