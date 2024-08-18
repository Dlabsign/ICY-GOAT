"use client"; // Tambahkan ini di bagian paling atas
import { motion } from "framer-motion";

export default function HeroDestination() {
  return (
    <div
      className="px-7 sm:px-40 py-[37%] sm:py-[13%] flex  justify-center items-center w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/contact/contactus.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "botto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center text-center ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          className="text-neutral-50 text-5xl  font-light font-['Recline'] leading-tight lg:leading-[72.19px]"
        >
          Destination
        </motion.div>
      </div>
    </div>
  );
}
