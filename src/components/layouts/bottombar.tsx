export default function BottomBar() {
  return (
    <div className="fixed mt-5 w-full bottom-0 px-4 sm:px-20 py-4  bg-[#f5f1f1] flex flex-col md:flex-row justify-between items-center">
      <div className="text-center text-[#1d1d1d] text-[12px] flex items-center justify-center gap-2 sm:text-sm  font-bold font-gotham">
        <img src="/images/dlabsign.png" alt="" />
        Created By Dlabsign 2024.
      </div>
      <div className="hidden sm:flex gap-x-6">
        <div className="text-center text-[#1d1d1d] text-sm  font-normal font-['Gotham'] tracking-wide">
          Privacy policy
        </div>
        <a
          href="https://wa.me/081259321453
"
          className="text-center text-[#1d1d1d] text-sm  font-normal font-['Gotham'] tracking-wide"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
