"use client"; // Tambahkan ini di bagian paling atas

import React from "react";
import { motion } from "framer-motion";

export default function FormFill() {
  return (
    <div className="px-5 sm:px-24 py-14 opacity-80 bg-[#D9D9D9] flex flex-col justify-center items-center gap-y-14 sm:gap-y-20">
      <div className="flex flex-col justify-center items-center gap-2.5">
        <h1 className="text-black text-2xl md:text-3xl lg:text-5xl font-light font-['Recline'] leading-snug md:leading-normal lg:leading-[72.19px]">
          Mari Terhubung Bersama kami
        </h1>
        <h1 className="text-black text-center text-sm sm:text-base font-medium font-gotham leading-normal md:leading-[30px] tracking-[0.2px]">
          Contact Form
        </h1>
      </div>

      {/* FORM ================== */}
      <div className="flex sm:flex-row justify-between w-full flex-col sm:gap-x-7 gap-y-5 ">
        {/* form */}
        <div className="sm:w-[70%] w-full max-w-screen-lg flex flex-col gap-5">
          <div className="flex w-full flex-col sm:flex-row  justify-between gap-5 ">
            <input
              type="text"
              className="w-full border-[2px] border-gray-700 placeholder-gray-700  rounded-[5px] bg-[#D9D9D9] text-start text-gray-800 py-5 pl-5 text-base font-medium font-gotham uppercase leading-normal tracking-[2px]  focus:outline-none"
              placeholder="FIRST NAME"
            />
            <input
              type="text"
              className="w-full border-[2px] border-gray-700 placeholder-gray-700  rounded-[5px] bg-[#D9D9D9] text-start text-gray-800 py-5 pl-5 text-base font-medium font-gotham uppercase leading-normal tracking-[2px]  focus:outline-none"
              placeholder="LAST NAME"
            />
          </div>
          <div className="flex w-full flex-col sm:flex-row  justify-between gap-5 ">
            <input
              type="text"
              className="w-full border-[2px] border-gray-700 placeholder-gray-700  rounded-[5px] bg-[#D9D9D9] text-start text-gray-800 py-5 pl-5 text-base font-medium font-gotham uppercase leading-normal tracking-[2px]  focus:outline-none"
              placeholder="EMAIL"
            />
            <input
              type="number"
              className="w-full border-[2px] border-gray-700 placeholder-gray-700  rounded-[5px] bg-[#D9D9D9] text-start text-gray-800 py-5 pl-5 text-base font-medium font-gotham uppercase leading-normal tracking-[2px]  focus:outline-none"
              placeholder="PHONE NUMBER"
            />
          </div>
          <textarea
            className="w-full border-[2px] border-gray-700 placeholder-gray-700  rounded-[5px] bg-[#D9D9D9] text-start text-gray-800 py-5 pl-5 text-base font-medium font-gotham uppercase leading-normal tracking-[2px]  focus:outline-none"
            placeholder="your message"
          />
          <motion.button
            className="transition ease-in-out duration-300 w-full sm:w-auto px-16 py-5 bg-[#546e7a] hover:bg-[#254353] active:bg-[#1d3543] flex justify-center items-center hover:font-medium font-normal tracking-[2px] hover:tracking-[5px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <h1 className="duration-200  text-center text-neutral-50 text-sm font-normal  font-gotham leading-normal uppercase">
              submit
            </h1>
          </motion.button>
        </div>{" "}
        <div className="h-full px-14 py-9 flex flex-col justify-start items-center  w-full sm:w-1/2 gap-4 bg-[#546E7A] text-slate-100">
          <h1 className=" text-[28px]  font-light font-['Recline'] leading-snug md:leading-normal ">
            CONTACT DETAIL
          </h1>
          <div className="flex w-full flex-col  justify-center  text-center text-sm sm:text-base font-medium font-gotham leading-normal sm:leading-[25px] tracking-[0.2px] ">
            <h1>icygoat@ongmail.com</h1>
            <h1>+1 23 456 7890 203</h1>
          </div>
          <div className="flex w-full flex-col  justify-center  text-center text-sm sm:text-base font-medium font-gotham leading-normal sm:leading-[25px] tracking-[0.2px] ">
            <h1 className="font-bold">Jakarta</h1>
            <h1>
              Jl. Jend. Sudirman No.52-53, Jakarta Pusat, DKI Jakarta 10210
            </h1>
          </div>
          <div className="flex w-full flex-col  justify-center  text-center text-sm sm:text-base font-medium font-gotham leading-normal sm:leading-[25px] tracking-[0.2px] ">
            <h1 className="font-bold">Bandung</h1>
            <h1>Jl. Asia Afrika No.65, Bandung, Jawa Barat 40111</h1>
          </div>
          <div className="flex w-full flex-col  justify-center  text-center text-sm sm:text-base font-medium font-gotham leading-normal sm:leading-[25px] tracking-[0.2px] ">
            <h1 className="font-bold">Surabaya</h1>
            <h1>Jl. Tunjungan No.101, Surabaya, Jawa Timur 60275 </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
