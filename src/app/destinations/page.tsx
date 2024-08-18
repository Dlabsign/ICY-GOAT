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

interface Destination {
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

interface Negara {
  nama: string;
  kode: string;
  destinations: Destination[]; // Tambahkan ini
}

export default function DestinationPage() {
  const [negaraTerpilih, setNegaraTerpilih] = useState<Negara | null>(null);

  const handleNegaraChange = (negara: Negara) => {
    setNegaraTerpilih(negara);
  };

  return (
    <div>
      <Navbar />
      <HeroDestination />
      <WorldMapSection onNegaraSelect={handleNegaraChange} />
      <VideoSection negaraTerpilih={negaraTerpilih} />
      <AboutDestination negaraTerpilih={negaraTerpilih} />
      <PopularSection negaraTerpilih={negaraTerpilih ?? undefined} />
      <NewsLetter />
      <BottomBar />
    </div>
  );
}
