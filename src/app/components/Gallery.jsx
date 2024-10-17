"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import image1 from "../../../public/gallery1.jpg";
import image2 from "../../../public/gallery2.jpg";
import image3 from "../../../public/gallery3.jpg";
import image4 from "../../../public/gallery4.jpg";
import image5 from "../../../public/gallery5.jpg";
import image6 from "../../../public/gallery6.jpg";
import image7 from "../../../public/gallery7.jpg";
import image8 from "../../../public/gallery8.jpg";
import image9 from "../../../public/gallery9.jpg";

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
        stroke="white"
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
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

function Gallery() {
  const images = [
    {
      id: 1,
      alt: " gallery image",
      src: image1,
    },
    {
      id: 2,
      alt: " gallery image",
      src: image2,
    },
    {
      id: 3,
      alt: " gallery image",
      src: image3,
    },
    {
      id: 4,
      alt: " gallery image",
      src: image4,
    },
    {
      id: 5,
      alt: " gallery image",
      src: image5,
    },
    {
      id: 6,
      alt: " gallery image",
      src: image6,
    },
    {
      id: 7,
      alt: " gallery image",
      src: image7,
    },
    {
      id: 8,
      alt: " gallery image",
      src: image8,
    },
    {
      id: 9,
      alt: " gallery image",
      src: image9,
    },
  ];

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  return (
    <section
      id="gallery"
      className="w-full text-center bg-[#F5F5F5] pt-8 pb-10"
    >
      <div className="relative w-[90%] m-auto">
        <h1 className="mb-4">LAST EVENT GLIMPSE</h1>
        <div ref={sliderRef} className=" keen-slider">
          {images.map((item) => (
            <div key={item.id} className="keen-slider__slide">
              <div className="">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1.02 * 385}
                  height={385}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
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

export default Gallery;
