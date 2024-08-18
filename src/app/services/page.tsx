"use client";
import BottomBar from "@/components/layouts/bottombar";
import Navbar from "@/components/layouts/navbar";
import NewsLetter from "@/components/layouts/newsletter";
import HeroServicePage from "@/components/service/service_hero_sec";

export default function ServicePage() {
  return (
    <div>
      <Navbar />
      <HeroServicePage />
      <NewsLetter />
      <BottomBar />
    </div>
  );
}
