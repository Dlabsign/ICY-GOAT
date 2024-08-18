"use client";

export default function VideoSection({ negaraTerpilih }) {
  if (!negaraTerpilih) {
    return null; // Render nothing if no country data is provided
  }

  return (
    <div className="relative w-full flex flex-col justify-center items-center overflow-hidden">
      <video
        key={negaraTerpilih.videoProfile} // Add a key to force re-mount
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        autoPlay
      >
        <source src={negaraTerpilih.videoProfile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex flex-col justify-center items-center text-center gap-2 sm:gap-6 p-7 sm:p-40 py-20 sm:py-40">
        <div className="text-neutral-50 text-base sm:text-2xl font-light font-gotham">
          Welcome To
        </div>
        <div className="text-neutral-50 text-4xl sm:text-6xl font-light font-['Recline'] tracking-wide uppercase">
          {negaraTerpilih.negara || "Unknown Country"}
        </div>
      </div>
    </div>
  );
}
