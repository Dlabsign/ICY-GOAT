"use client";

import { usePathname } from "next/navigation";
import HomePage from "./home/page";
import ContactPage from "./contact/page";
import DestinationPage from "./destinations/page";
import ServicePage from "./services/page";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="bg-black">
      {pathname === "/" && <HomePage />}
      {pathname === "/contact" && <ContactPage />}
      {pathname === "/destinations" && <DestinationPage />}
      {pathname === "/services" && <ServicePage/>}
    </div>
  );
}
