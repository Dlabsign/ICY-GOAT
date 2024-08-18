"use client"; // Tambahkan ini di bagian paling atas

import "../globals.css";
import HeroSection from "@/components/home/hero-section";
import RowBanner from "@/components/home/row-banner-sec";
import BannerHover from "@/components/home/banner-hover";
import BannerSection from "@/components/home/bannersection";
import MovingImages from "@/components/home/carousel-moving";
import Faq_Section from "@/components/home/faq-section";
import NewsLetter from "@/components/layouts/newsletter";
import BottomBar from "@/components/layouts/bottombar";

export default function HomePage() {
  return (
    <div className="bg-[#d9d9d9]">
      <HeroSection />
      <RowBanner />
      <BannerHover />
      <BannerSection />
      <MovingImages />
      <Faq_Section />
      <NewsLetter />
      <BottomBar />
    </div>
  );
}
