"use client"; // If using Next.js 13 with App Router

import { motion } from "framer-motion";
import { dataMovingBanner } from "database/db_home";

const variants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

export default function MovingImages() {
  return (
    <div className="relative overflow-hidden w-full h-full pb-16  ">
      <motion.div className="flex  w-full  ">
        {dataMovingBanner.map((item, index) => (
          <motion.div
            key={index}
            className=" mx-2  w-full flex justify-start flex-col items-start"
            variants={variants}
            animate="animate"
          >
            <motion.img
              whileHover={{
                scale: 1.02,
                boxShadow: "10px 10px 25px rgba(0, 0, 0, 0.2)",
              }}
              src={item.imageUrl}
              alt={`Image ${index + 1}`}
              className="object-cover min-w-[260px] h-[350px]"
            />
            <div className="text-start">
              <div className="my-4 ">
                <h3 className="text-lg font-semibold">{item.headline}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <motion.button
                className="transition ease-in-out duration-300 w-full sm:w-auto px-5 py-3.5 bg-[#546e7a] hover:bg-[#254353] active:bg-[#1d3543] flex justify-center items-center hover:font-medium font-normal tracking-[1px] hover:tracking-[2px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }}
              >
                <h1 className="duration-200  text-center text-neutral-50 text-sm font-normal  font-gotham leading-normal">
                  BOOKING SEKARANG
                </h1>
              </motion.button>
            </div>
          </motion.div>
        ))}
        {dataMovingBanner.map((item, index) => (
          <motion.div
            key={index}
            className=" mx-2  w-full flex justify-start flex-col items-start"
            variants={variants}
            animate="animate"
          >
            <motion.img
              whileHover={{
                scale: 1.02,
                boxShadow: "8px 7px 25px rgba(0, 0, 0, 0.2)",
              }}
              src={item.imageUrl}
              alt={`Image ${index + 1}`}
              className="object-cover min-w-[260px] h-[350px]"
            />
            <div className="text-start">
              <div className="my-4 ">
                <h3 className="text-lg font-semibold">{item.headline}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <motion.button
                className="transition ease-in-out duration-300 w-full sm:w-auto px-5 py-3.5 bg-[#546e7a] hover:bg-[#254353] active:bg-[#1d3543] flex justify-center items-center hover:font-medium font-normal tracking-[1px] hover:tracking-[2px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1.4 }}
              >
                <h1 className="duration-200  text-center text-neutral-50 text-sm font-normal  font-gotham leading-normal">
                  BOOKING SEKARANG
                </h1>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
