"use client";

import HeroDestination from "@/components/destination/destination_hero_sec";
import BottomBar from "@/components/layouts/bottombar";
import Navbar from "@/components/layouts/navbar";
import NewsLetter from "@/components/layouts/newsletter";
import WorldMapSection from "@/components/destination/map";
import VideoSection from "@/components/destination/video_section";
import AboutDestination from "@/components/destination/row-about";
import PopularSection from "@/components/destination/popular";
import { useState } from "react";

export default function DestinationPage() {
  const [negaraTerpilih, setNegaraTerpilih] = useState(null);

  const handleNegaraChange = (negara) => {
    setNegaraTerpilih(negara);
  };

  return (
    <div>
      <Navbar />
      <HeroDestination />
      <WorldMapSection onNegaraSelect={handleNegaraChange} />
      <VideoSection negaraTerpilih={negaraTerpilih} />
      <AboutDestination negaraTerpilih={negaraTerpilih} />
      <PopularSection negaraTerpilih={negaraTerpilih} />

      <NewsLetter />
      <BottomBar />
    </div>
  );
}
