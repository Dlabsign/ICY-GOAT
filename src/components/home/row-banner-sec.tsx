"use client"; // Tambahkan ini di bagian paling atas

import { useEffect } from "react";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function RowBanner() {
  // Motion value for scroll position
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 1000], [-10, 50]);
  const y2 = useTransform(scrollY, [0, 1000], [60, 0]);

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: -300,
    },
  };

  return (
    <div className="bg-[#d9d9d9] max-w-screen">
      <motion.div
        ref={ref}
        initial="visible"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
        className="w-full px-4 sm:px-8 py-16 sm:py-24 mx-auto flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8"
      >
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 1, x: -300 },
          }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-left"
        >
          <div className="text-black font-recline text-2xl sm:text-3xl lg:text-4xl leading-normal lg:leading-[54.14px]">
            Nikmati Liburan Berkesan Bersama Icy Goat
          </div>
          <div className="text-black text-sm sm:text-base lg:text-lg font-gotham font-medium leading-normal lg:leading-[30px]">
            Temukan destinasi impian Anda dengan harga terjangkau. Kami
            menawarkan pengalaman liburan yang tak terlupakan untuk pasangan
            yang sudah menikah. Rasakan petualangan yang berani namun tetap
            sederhana.
          </div>
        </motion.div>
        <div className="flex justify-center items-center ml-14 sm:ml-0">
          <motion.div
            className=" flex justify-center items-center "
            initial="visible"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 1, x: 600 },
            }}
            transition={{ duration: 1 }}
          >
            <motion.img
              style={{ y: y1 }}
              initial="visible"
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 1, x: 200 },
              }}
              transition={{ duration: 1 }}
              className="transition ease-in-out shadow-lg w-full sm:w-1/2 lg:w-52 h-52 sm:h-72 lg:h-[400px] hover:scale-110 object-cover"
              src="/images/home/row-banner1.jpg"
              alt="Liburan 1"
            />
            <motion.img
              style={{ y: y2 }}
              initial="visible"
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, x: -50 },
                hidden: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1 }}
              className="transition ease-in-out shadow-lg w-full sm:w-1/2 lg:w-52 h-52 sm:h-72 lg:h-[400px] hover:scale-110 object-cover"
              src="/images/home/row-banner2.jpg"
              alt="Liburan 2"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
