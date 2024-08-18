"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="bg-none p-4 font-recline absolute w-full z-40">
      <div className="container mx-auto flex justify-between items-center px-2 sm:px-8 py-6">
        <div className="hidden md:flex w-full justify-between items-center">
          <Link href="/about">
            <motion.div
              className="text-white text-base font-light tracking-[3px] cursor-pointer"
              variants={linkVariants}
              whileHover="hover"
            >
              About
            </motion.div>
          </Link>
          <Link href="/contact">
            <motion.div
              className="text-white text-base font-light tracking-[3px] cursor-pointer"
              variants={linkVariants}
              whileHover="hover"
            >
              Contact
            </motion.div>
          </Link>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={170} height={29} />
          </Link>
          <Link href="/services">
            <motion.div
              className="text-white text-base font-light tracking-[3px] cursor-pointer"
              variants={linkVariants}
              whileHover="hover"
            >
              Service
            </motion.div>
          </Link>
          <Link href="/destinations">
            <motion.div
              className="text-white text-base font-light tracking-[3px] cursor-pointer"
              variants={linkVariants}
              whileHover="hover"
            >
              Destination
            </motion.div>
          </Link>
        </div>
        <div className="sm:hidden flex items-center justify-between w-full">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={120} height={29} />
          </Link>
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-600 h-full px-5 py-5 gap-y-3 flex flex-col items-start  justify-center mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Link href="/about" className="w-full">
            <motion.div
              className="text-white text-base font-light tracking-[3px] cursor-pointer  border-b border-blue-50 text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
            >
              About
            </motion.div>
          </Link>
          <Link href="/contact" className="w-full">
            <motion.div
              className="text-white text-base font-light tracking-[3px] cursor-pointer border-b border-blue-50 w-full text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.7 }}
            >
              Contact
            </motion.div>
          </Link>
          <Link href="/services" className="w-full">
            <motion.div
              className="text-white text-base font-light tracking-[3px] cursor-pointer border-b border-blue-50 w-full text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.9 }}
            >
              Service
            </motion.div>
          </Link>
          <Link href="/destinations" className="w-full">
            <motion.div
              className="text-white text-base font-light tracking-[3px] cursor-pointer border-b border-blue-50 w-full text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 1.1 }}
            >
              Destination
            </motion.div>
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
