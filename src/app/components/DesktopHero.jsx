import Image from "next/image";
import React from "react";
import desktopHero from "../../../public/desktopHero.jpg";

const DesktopHero = () => {
  return (
    <div className="w-full mx-auto overflow-hidden bg-white">
      <div className="relative h-screen max-h-[1020px]">
        <Image
          alt="hero image"
          src={desktopHero}
          quality={80}
          priority={true}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          loading="eager"
        />
      </div>

      <div className="bg-[#F5E9DE]">
        <div className="py-10 px-8 xl:px-24   max-w-[1920px] mx-auto">
          <h1 className=" border-[0.5px] pb-4 border-b-[#A01010]  text-[#A01010] font-medium  uppercase text-[24px] leading-[34.68px]">
            9-10 Nov. 2024 | JW Marriott, Bengaluru
          </h1>

          <h1 className="mb-2 mt-8 uppercase  font-semibold text-[38px] leading-[54.91px] ">
            Exclusive Event Offering
          </h1>

          <div className="text-[22px] text-left leading-[32.2px] font-medium flex justify-between">
            <ul>
              <li>• 4% DLD Waiver</li>
              <li>• Zero service charges for 2 Years</li>
              <li>• Fully Furnished Apartments near Wynn Resort</li>
            </ul>
            <ul>
              <li>• Interest Free payment Plan</li>
              <li>• Free 2 Days Dubai Trip</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;
