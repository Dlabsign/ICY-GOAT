"Use Client";

import "../globals.css";
import NewsLetter from "@/components/layouts/newsletter";
import BottomBar from "@/components/layouts/bottombar";
import Navbar from "@/components/layouts/navbar";
import FormFill from "@/components/contact/forms";
import HeroContact from "@/components/contact/contact_hero_sec";

export default function ContactPage() {
  return (
    <div className="bg-[#d9d9d9]">
      <div className="relative z-20">
        <Navbar />
      </div>
      <HeroContact />
      <FormFill />
      <NewsLetter />
      <BottomBar />
    </div>
  );
}
