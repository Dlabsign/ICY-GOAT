"use client"; // Tambahkan ini di bagian paling atas
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function BannerSection() {
  const { scrollY } = useViewportScroll();
  const y2 = useTransform(scrollY, [0, 1000], [42, -12]);

  return (
    <motion.div className=" py-16 flex flex-col  justify-center items-center">
      <div className="flex flex-col sm:flex-row items-center ">
        <motion.video
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "10px 10px 25px rgba(0, 0, 0, 0.2)",
          }}
          className="w-full sm:w-1/2 h-[420px] sm:h-[443px] object-cover"
          src="/video/second.mp4"
          loop
          autoPlay
          muted
        />
        <div className="flex-1 p-8 bg-[#5d4037] text-neutral-50 flex flex-col justify-center items-start gap-4 lg:gap-8 sm:text-start text-center">
          <h1 className="text-gray-100 text-3xl font-light font-['Recline'] leading-[50px]">
            Mengungkap Manfaat Istimewa yang Didapatkan dari Layanan Kami
          </h1>
          <p className="text-gray-200 text-sm sm:text-base font-gotham font-medium leading-normal tracking-wide sm:leading-[42px]">
            Layanan kami memberikan pengalaman liburan yang terjangkau dan tak
            terlupakan kepada pasangan suami istri. Nikmati keberanian dan
            kesederhanaan dalam setiap perjalanan.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center ">
        <motion.div
          style={{ y: y2 }}
          initial="visible"
          transition={{ duration: 1 }}
          className="transition ease-in-out flex-1 py-10 px-4 sm:px-12 bg-[#5d4037] text-neutral-50 flex flex-col justify-center items-start  sm:text-start text-center gap-5"
        >
          <h1 className="text-gray-100 text-3xl font-light font-['Recline'] leading-1/2">
            Rasakan Layanan Terbaik Kami
          </h1>
          <p className="text-gray-200 text-sm sm:text-base font-gotham font-medium leading-normal tracking-wide ">
            Jelajahi katalog lengkap layanan kami dan temukan pengalaman yang
            tak terlupakan.
          </p>
          <div className="flex gap-4 sm:flex-row w-full flex-col">
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
            <motion.button
              className="transition ease-in-out w-full sm:w-auto px-16 py-5 border border-gray-200 hover:bg-[#cacaca] text-neutral-200 hover:text-gray-950 flex justify-center items-center hover:font-medium font-normal tracking-[2px] hover:tracking-[5px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }}
            >
              <h1 className="duration-300 text-center text-sm font-gotham leading-normal">
                SELENGKAPNYA
              </h1>
            </motion.button>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{
            scale: 1.03,
            boxShadow: "10px 10px 25px rgba(0, 0, 0, 0.1)",
          }}
          className="w-full sm:w-1/2 h-[420px] sm:h-[443px] object-cover "
          src="/images/home/plane.jpg"
          alt="Placeholder"
        />
      </div>
    </motion.div>
  );
}
