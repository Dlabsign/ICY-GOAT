"use client"; // Ensure this is at the very top

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
interface Destination {
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

interface PopularSectionProps {
  negaraTerpilih?: {
    destinations: Destination[];
  };
}

export default function PopularSection({
  negaraTerpilih,
}: PopularSectionProps) {
  const destinations = negaraTerpilih?.destinations || [];

  return (
    <div className="h-auto px-4 py-14 flex flex-col justify-center items-center gap-14">
      <div className="w-full flex justify-between items-center px-5 sm:px-24">
        <img
          src="/images/destinations/arrow.png"
          className="w-[30px] opacity-65 rotate-180 sm:block hidden"
          alt=""
        />
        <div className="text-center">
          <h1 className="text-black text-5xl font-light font-['Recline'] leading-[72.19px]">
            Popular Destination
          </h1>
          <p className="text-black text-base font-medium font-['gotham'] leading-[30px]">
            Most Visited
          </p>
        </div>
        <img
          src="/images/destinations/arrow.png"
          className="w-[30px] opacity-65 sm:block hidden"
          alt=""
        />
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full z-0 relative"
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div className=" p-10 z-0 sm:p-5">
              <img
                className="rotate-[4.35deg] hover:rotate-0 duration-200 w-full h-[350px] object-cover mb-4"
                src={dest.image}
                alt={dest.name}
              />
              <div className="flex flex-col items-start gap-2">
                <h2 className="text-black text-[32px] font-light font-['Recline'] leading-[48.13px]">
                  {dest.name}
                </h2>
                <div className="w-[30px] h-[1px] bg-gray-800 mb-2"></div>
                <span className="text-black text-base font-light font-['Recline'] leading-normal">
                  {dest.subtitle}
                </span>
              </div>
              <DescriptionWithReadMore text={dest.description} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const DescriptionWithReadMore: React.FC<{ text: string }> = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <p className="text-gray-800 text-sm font-medium font-['gotham'] leading-8 tracking-wide">
      {isReadMore ? `${text.slice(0, 50)}...` : text}
      <span
        onClick={() => setIsReadMore(!isReadMore)}
        className="text-gray-800 font-black cursor-pointer mt-5 flex flex-col"
      >
        {isReadMore ? "Read More" : "Hide"}
      </span>
    </p>
  );
};
