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
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
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
          <SwiperSlide key={index} className="flex flex-col items-center">
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
