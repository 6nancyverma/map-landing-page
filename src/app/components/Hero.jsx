import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full mx-auto overflow-hidden bg-white">
      <div className="relative  w-full h-[400px]">
        <Image
          src="/hero.jpg"
          alt="Event Location"
          priority={true}
          sizes="(max-width: 768px) 100vw"
          fill={true}
          className="object-cover"
        />
      </div>

      <div className="p-4 px-6 mx-auto">
        <h1 className="text-[30px] leading-[40px] font-bold uppercase">
          Biggest Investor’s <br /> meet in BANGALORE
        </h1>
        <h2 className="text-[16px] text-[#A01010] font-medium leading-[23.12px] uppercase mt-2 ">
          9-10 Nov. 2024 <span className="mx-2">|</span> JW Marriott, Bengaluru
        </h2>
      </div>

      <div className="bg-[#F5E9DE]">
        <div className="p-6 max-w-[1920px] mx-auto">
          <h1 className="mb-2 mt-1 uppercase text-[26px] leading-[37.57px]  font-semibold ">
            Exclusive Event Offering
          </h1>

          <div className=" text-[15px] text-left leading-[20.2px] font-medium ">
            <ul>
              <li>• Interest Free payment Plan</li>
              <li>• Free 2 Days Dubai Trip</li>
              <li>• 4% DLD Waiver</li>
              <li>• Zero service charges for 2 Years</li>
              <li>• Fully Furnished Apartments near Wynn Resort</li>
            </ul>
          </div>

          <div className="flex justify-center pt-4 ">
            <span>
              <svg
                width="35"
                height="17"
                viewBox="0 0 35 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7681 16.307C16.9478 16.4692 17.1825 16.5486 17.4171 16.5486C17.65 16.5486 17.8846 16.4692 18.0643 16.307L34.5643 1.41211C34.9218 1.08939 34.9218 0.564763 34.5643 0.242041C34.2068 -0.0806804 33.6256 -0.0806804 33.2681 0.242041L17.4171 14.551L1.56429 0.242041C1.20679 -0.0806804 0.625625 -0.0806804 0.268125 0.242041C-0.089375 0.564763 -0.089375 1.08939 0.268125 1.41211L16.7681 16.307Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
