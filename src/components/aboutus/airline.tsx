"use client";

import { motion } from "framer-motion";
import { airlinelogo } from "database/db_home";

export default function AirlineComp() {
  return (
    <div className="max-w-screen flex flex-col justify-center items-center bg-[#fafafa] py-10 sm:px-24 px-5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-slate-700 text-2xl sm:text-3xl font-light font-['Recline'] leading-snug md:leading-normal lg:leading-[72.19px] text-center"
      >
        Kami Bekerja sama lebih dari{" "}
        <span className="text-gotham italic">500++</span> maskapai di seluruh
        dunia
      </motion.div>
      <div className="flex justify-center items-center gap-x-9 mt-6 overflow-hidden relative">
        <motion.div
          className="flex"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ whiteSpace: "nowrap" }} // Ensure images are not wrapped
        >
          {airlinelogo.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Airline ${index + 1}`}
              width={100}
              height={100}
              className="mx-4" // Adjust spacing between images if needed
            />
          ))}
          {airlinelogo.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Airline ${index + 1}`}
              width={100}
              height={100}
              className="mx-4" // Adjust spacing between images if needed
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
