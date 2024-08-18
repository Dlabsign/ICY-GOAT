"use client"; // Tambahkan ini di bagian paling atas
import { motion } from "framer-motion";

export default function NewsLetter() {
  return (
    <div className="relative mb-4 w-full flex flex-col justify-center items-center overflow-hidden">
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        src="/video/newsletter.mp4"
        autoPlay
        muted
      />
      <div className="relative flex flex-col justify-center items-center text-center gap-0 px-9 sm:px-24 py-14 sm:py-36 ">
        <div className="text-neutral-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light font-['Recline'] leading-tight sm:leading-[72.19px]">
          Join with our newsletter
        </div>
        <motion.div
          className="text-gray-200 sm:text-[16px] text-[12px] font-normal font-gotham tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
        >
          Dapatkan berita terbaru, penawaran eksklusif, dan update produk
        </motion.div>
        <div className="w-full sm:w-[70%] flex flex-col md:flex-row mt-10 justify-start items-start gap-4">
          <motion.input
            className="w-full pl-5 py-5 bg-gray-100 flex justify-center items-start text-sm font-medium tracking-[1.2px] font-gotham leading-normal text-gray-600 border-none focus:border-blue-500 focus:outline-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            type="email"
            placeholder="Your email address"
            transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }}
          />
          <motion.button
            className="transition ease-in-out duration-300 w-full sm:w-auto px-16 py-5 bg-[#c3c5c6] hover:bg-[#a5a5a5] active:bg-[#7abcdd] flex justify-center items-center hover:font-medium font-normal tracking-[2px] hover:tracking-[5px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }}
          >
            <span className="duration-200 text-center text-neutral-900 hover:text-neutral-900 text-sm font-gotham leading-normal">
              SUBMIT
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
