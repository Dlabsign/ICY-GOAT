"use client"; // Tambahkan ini di bagian paling atas

import { motion } from "framer-motion";
import { useState } from "react";
import { dataHoverSection } from "database/db_home";

export default function BannerHover() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen  flex flex-col lg:flex-row justify-center items-center gap-x-5 sm:gap-x-[5px] sm:mt-0 mt-12">
      {dataHoverSection.map((section, index) => (
        <motion.div
          key={index}
          className="py-24 max-h-max flex-grow flex-shrink-0 basis-full lg:basis-0 lg:h-auto w-full px-5 sm:px-28 h-[645px] flex justify-center items-center gap-2.5"
          style={{
            backgroundImage: `url(${section.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            maxHeight: "100%",
            transition:
              "background-size 0.3s ease-in-out, background-position 0.3s ease-in-out",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-auto lg:h-[304px] flex flex-col justify-start items-start gap-8 lg:gap-[35px]">
            <div className="w-full text-white text-3xl lg:text-5xl font-light font-['Recline']">
              {section.title}
            </div>
            {hoveredIndex === index && (
              <motion.div
                className="w-full text-white text-sm sm:text-base font-gotham font-medium leading-normal lg:leading-[30px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                {section.description}
              </motion.div>
            )}
            <motion.div
              initial={{ y: -50 }} // Start at original position
              animate={{ y: hoveredIndex === index ? 0 : 0 }} // Move up slightly on hover
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col justify-center items-start "
            >
              <div className="text-white text-sm text-nowrap font-gotham font-medium tracking-widest ">
                See More
              </div>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full border-t-[0.5px] border-gray-300"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
