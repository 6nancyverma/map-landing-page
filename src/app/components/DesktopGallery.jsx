"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import img1 from "../../../public/desktopGallery/img1.jpg";
import img2 from "../../../public/desktopGallery/img2.jpg";
import img3 from "../../../public/desktopGallery/img3.jpg";
import img4 from "../../../public/desktopGallery/img4.jpg";
import img5 from "../../../public/desktopGallery/img5.jpg";
import img6 from "../../../public/desktopGallery/img6.jpg";
import img7 from "../../../public/desktopGallery/img7.jpg";
import img8 from "../../../public/desktopGallery/img8.jpg";
import img9 from "../../../public/desktopGallery/img9.jpg";

// import "keen-slider/keen-slider.min.css";

const PrevArrow = ({ onClick }) => (
  <div className="arrows prev-arrow bg-[#E8D8CB]" onClick={onClick}>
    <svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 0.5L1.07068 5.74423C0.531665 6.12471 0.502356 6.91371 1.01165 7.33313L8.5 13.5"
        stroke="black"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="arrows next-arrow bg-[#A67A46]" onClick={onClick}>
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0.5L8.42932 5.74423C8.96833 6.12471 8.99764 6.91371 8.48835 7.33313L1 13.5"
        stroke="black"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

function DesktopGallery() {
  const Desktopimages = [
    {
      id: 1,
      alt: " gallery image",
      src: img1,
    },
    {
      id: 2,
      alt: " gallery image",
      src: img2,
    },
    {
      id: 3,
      alt: " gallery image",
      src: img3,
    },
    {
      id: 4,
      alt: " gallery image",
      src: img4,
    },
    {
      id: 5,
      alt: " gallery image",
      src: img5,
    },
    {
      id: 6,
      alt: " gallery image",
      src: img6,
    },
    {
      id: 7,
      alt: " gallery image",
      src: img7,
    },
    {
      id: 8,
      alt: " gallery image",
      src: img8,
    },
    {
      id: 9,
      alt: " gallery image",
      src: img9,
    },
  ];

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  return (
    <section
      id="gallery"
      className="w-full text-center bg-[#F5F5F5] pt-8 pb-10 "
    >
      <div className="relative w-[60%] max-w-[1920px] mx-auto">
        <h1 className="mb-4 text-[26px] leading-[37.57px]  font-semibold lg:text-[38px] lg:leading-[54.91px]">
          LAST EVENT GLIMPSE
        </h1>
        <div ref={sliderRef} className=" keen-slider">
          {Desktopimages.map((item) => (
            <div key={item.id} className="keen-slider__slide ">
              <div className="">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1.77 * 700}
                  height={700}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1920px) 60vw, 33vw"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
        <PrevArrow onClick={() => slider.current?.prev()} />
        <NextArrow onClick={() => slider.current?.next()} />
      </div>
    </section>
  );
}

export default DesktopGallery;
