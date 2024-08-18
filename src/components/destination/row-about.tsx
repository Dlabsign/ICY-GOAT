import React from "react";



export default function AboutDestination({ negaraTerpilih }) {
  if (!negaraTerpilih || !negaraTerpilih.tentang) {
    return null; // Render nothing if no country is selected
  }

  return (
    <>
      {negaraTerpilih.tentang.map((dest, destIndex) => (
        <div
          key={destIndex}
          className="px-8 sm:px-40 py-28 flex flex-col sm:flex-row justify-center items-start gap-y-14 sm:gap-x-20"
        >
          <img
            className="w-[300px] h-[350px] bg-cover"
            src={dest.image}
            alt={dest.image}
          />
          <div className="flex flex-col justify-center items-start gap-3 mt-16 sm:mt-0">
            <div className="text-black text-base font-light font-['Recline'] leading-none">
              {dest.title}
            </div>
            <div className="text-black text-4xl font-light font-['Recline'] leading-[54.14px]">
              {dest.title}
            </div>
            <div className="text-[#3d3d3d] text-base font-light font-['gotham'] leading-10">
              {dest.deskripsi}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
