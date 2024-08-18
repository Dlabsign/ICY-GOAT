"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./../../app/globals.css";
import { OurTeam } from "database/db_home";

export default function SwiperComponent() {
  return (
    <div className="w-full mb-8 sm:mb-16 px-5 sm:px-36">
      <div className="mb-5 text-neutral-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light font-['Recline'] leading-tight lg:leading-[72.19px] text-center">
        Our Team
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="pb-14"
      >
        {OurTeam.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <img
              className="w-full h-[350px] object-cover rounded"
              src={src.imageUrl}
              alt={`Slide Image ${index + 1}`}
            />
            <div className="mt-4 text-center text-slate-600 text-xl font-medium font-['Recline']  uppercase tracking-wider">
              {src.nama}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
