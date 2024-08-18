"use client"; // Tambahkan ini di bagian paling atas

import { useState, useEffect } from "react";
import "../../app/globals.css";
import Navbar from "../layouts/navbar";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <section
      className="home-hero-section w-screen max-w-full h-screen max-h-full flex flex-col justify-start items-center sm:gap-2.5 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: isHovered ? "none" : "default" }}
    >
      <Navbar />
      {/* Hero Section */}
      <motion.div
        className="w-full flex flex-col justify-center items-center h-full sm:mt-12 mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="text-start sm:text-center w-full flex flex-col justify-center items-center gap-2.5 px-12 sm:px-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className="text-white sm:text-[75px] text-[45px] font-light font-['Recline'] tracking-[3px]">
            Destinasi Yang Terjangkau
            <br />
            Untuk Kamu
          </h1>
          <motion.div
            className="text-gray-200 text-[16px] font-normal font-gotham tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          >
            Menawarkan berbagai destinasi terjangkau untuk pasangan yang berani
            dan bersahaja.
          </motion.div>
          <div className="w-full sm:w-1/2 flex flex-col md:flex-row mt-10 justify-start items-start">
            <motion.input
              className="w-full pl-5 py-5 bg-gray-100 flex justify-center items-start text-sm font-medium tracking-[1.2px] font-gotham leading-normal text-gray-600 border-none focus:border-none focus:outline-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }}
            />
            <motion.button
              className="transition ease-in-out duration-300 w-full sm:w-auto px-16 py-5 bg-[#546e7a] hover:bg-[#254353] active:bg-[#1d3543] flex justify-center items-center hover:font-medium font-normal tracking-[2px] hover:tracking-[5px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }}
            >
              <h1 className="duration-200  text-center text-neutral-50 text-sm font-normal  font-gotham leading-normal">
                VISIT
              </h1>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      {isHovered && (
        <img
          src="/images/circle_mving.png"
          alt="Hover Image"
          className={`hover-image ${isHovered ? "visible" : ""}`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}
    </section>
  );
}
