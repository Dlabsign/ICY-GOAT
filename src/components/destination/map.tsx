"use client";

import { useState, useEffect } from "react";
import { MapModel, svgContent } from "database/db_home";
import { Negara } from "src/types/interfaces"; // Pastikan Anda mengimpor Negara dari tempat yang benar
import "../../app/globals.css";

interface WorldMapSectionProps {
  onNegaraSelect: (country: Negara) => void;
}

export default function WorldMapSection({
  onNegaraSelect,
}: WorldMapSectionProps) {
  const [selectedCountry, setSelectedCountry] = useState<Negara | null>(null);

  useEffect(() => {
    if (selectedCountry) {
      onNegaraSelect(selectedCountry);
    }
  }, [selectedCountry, onNegaraSelect]);

  const handleNegaraClick = (country: Negara) => {
    setSelectedCountry(country);
  };

  return (
    <div className="p-6 sm:p-10 md:p-20 bg-[#f5f1f1] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-[50px]">
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-[50px] w-full">
        <div className="text-center text-[#3d3d3d] text-3xl sm:text-4xl md:text-5xl font-light font-['Recline'] leading-tight sm:leading-[50px] md:leading-[62.40px] tracking-widest">
          Pilih Destinasi Yang Kamu Tuju
        </div>
        <div
          className="hidden sm:block relative worldmap"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </div>
      <div className="w-full h-auto flex flex-wrap justify-start gap-6 sm:gap-8 md:gap-0">
        {Object.keys(MapModel).map((regionCode) => (
          <div
            key={regionCode}
            className="flex flex-col justify-start items-start gap-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <div className="pl-4 sm:pl-6 md:pl-[25px] border-l border-[#546e7a] flex flex-col justify-start items-start">
              <div className="text-[#352e2e] text-lg sm:text-2xl md:text-[32px] font-light font-['Recline'] leading-tight sm:leading-[36px] md:leading-[48.13px]">
                {regionCode}
              </div>
              <div className="flex flex-col justify-start items-start">
                {(MapModel[regionCode as keyof typeof MapModel] || []).map(
                  (country) => (
                    <div
                      key={country.id}
                      className="text-[#352e2e] text-sm font-medium font-['GothamBook'] leading-[30px] cursor-pointer"
                      onClick={() => handleNegaraClick(country)}
                    >
                      <div className="text-[#352e2e] text-lg sm:text-xl font-medium font-['Recline'] hover:text-[#b8b3b3] duration-150 leading-tight">
                        {country.negara}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
