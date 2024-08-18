import AboutHeroSection from "@/components/aboutus/about_hero_sec";
import AboutDescription from "@/components/aboutus/aboutcomp";
import AirlineComp from "@/components/aboutus/airline";
import OurTeamComponent from "@/components/aboutus/our_team";
import BottomBar from "@/components/layouts/bottombar";
import Navbar from "@/components/layouts/navbar";
import NewsLetter from "@/components/layouts/newsletter";
export default function AboutPage() {
  return (
    <div className="bg-[#dfdfdf]">
      <div className="relative z-20">
        <Navbar />
      </div>
      <AboutHeroSection />
      <AirlineComp />
      <AboutDescription />
      <OurTeamComponent />
      <NewsLetter />
      <BottomBar />
    </div>
  );
}
