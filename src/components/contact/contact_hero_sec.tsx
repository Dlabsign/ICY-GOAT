"use client"; // Tambahkan ini di bagian paling atas
import { motion } from "framer-motion";

export default function HeroContact() {
  return (
    <div
      className="mb-4 px-7 sm:px-40 py-[37%] sm:py-[13%] flex  justify-center items-center w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/contact/contactus.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "botto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center text-center gap-4 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          className="text-neutral-50 text-5xl  font-light font-['Recline'] leading-tight lg:leading-[72.19px]"
        >
          Contact US
        </motion.div>
      </div>
    </div>
  );
}

// <div className="relative w-full h-[50vh] sm:h-[70vh] flex justify-center items-center overflow-hidden">
//       <motion.video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         loop
//         src="/images/contact/contactus.mp4"
//         autoPlay
//         muted
//       />

//       <div className="relative z-10 flex flex-col justify-center items-center text-center gap-4 lg:gap-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
//           className="text-neutral-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light font-['Recline'] leading-tight lg:leading-[72.19px]"
//         >
//           Contact Us
//         </motion.div>
//       </div>
//     </div>
