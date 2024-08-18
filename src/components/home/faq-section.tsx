"use client"; // Tambahkan ini di bagian paling atas

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Faq } from "database/db_home";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Faq_Section() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className=" px-4 py-14 opacity-80 bg-[#ffffff] flex flex-col justify-center items-center gap-y-14 sm:gap-y-20">
      <div className="flex flex-col justify-center items-center gap-2.5">
        <div className="text-black text-2xl md:text-3xl lg:text-5xl font-light font-['Recline'] leading-snug md:leading-normal lg:leading-[72.19px]">
          Pertanyaan yang Sering Diajukan
        </div>
        <div className="text-black text-center text-sm sm:text-base font-medium font-gotham leading-normal md:leading-[30px] tracking-[0.2px]">
          Berikut adalah jawaban atas pertanyaan umum yang sering diajukan oleh
          pelanggan.
        </div>
      </div>
      <motion.div className="w-full max-w-4xl flex flex-col justify-start items-start gap-5">
        {Faq.map((section, index) => (
          <div
            key={index}
            className="w-full px-4 md:px-10 pt-6 border-t border-black flex flex-col justify-start items-start gap-6 md:gap-[30px]"
          >
            <div
              className="w-full flex justify-between items-center cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="text-black text-xl sm:text-[32px] font-light font-['Recline'] leading-tight md:leading-snug lg:leading-[48.13px]">
                {section.question}
              </div>
              <motion.div className="text-black">
                {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </motion.div>
            </div>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  className="w-full text-black text-sm md:text-base font-medium font-gotham leading-normal md:leading-[35px]"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {section.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
