import { AboutUs } from "database/db_home";
import Image from "next/image";

export default function AboutDescription() {
  return (
    <div className="flex flex-col justify-center items-start gap-16 px-10 py-10 sm:px-72 sm:py-24 ">
      <Image src="/images/mainlogo.svg" alt="logo" width={170} height={29} />
      <div className="text-[#3d3d3d] text-base md:text-lg lg:text-2xl font-light font-['Recline'] leading-6 md:leading-8 lg:leading-10">
        Di Icy Goat, kami menawarkan berbagai destinasi yang terjangkau. Kami
        mampu memberikan harga terendah karena kami memiliki staf di setiap
        lokasi. Tujuan utama kami adalah menyediakan pengalaman perjalanan yang
        luar biasa tanpa menguras kantong Anda.
      </div>
      <div className="w-full max-w-[210px] border border-[#3d3d3d]"></div>
      {AboutUs.map((about, index) => (
        <div key={index} className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <div className="text-[#3d3d3d] text-3xl md:text-4xl lg:text-5xl font-light font-['Recline'] leading-8 md:leading-10 lg:leading-[72.19px]">
            {about.headline}
          </div>
          <div className="text-[#3d3d3d] text-base md:text-lg lg:text-xl font-light font-['Recline'] leading-6 md:leading-8 lg:leading-10">
            {about.deskripsi}
          </div>
          <div className="w-full max-w-[210px] border border-[#3d3d3d]"></div>
        </div>
      ))}
    </div>
  );
}
