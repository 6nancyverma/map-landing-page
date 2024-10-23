"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import img1 from "../../../public/desktopGallery/img1.jpg";
import img2 from "../../../public/desktopGallery/img2.jpg";
import img3 from "../../../public/desktopGallery/img3.jpg";
import img4 from "../../../public/desktopGallery/img4.jpg";
import img5 from "../../../public/desktopGallery/img5.jpg";
import img6 from "../../../public/desktopGallery/img6.jpg";
import img7 from "../../../public/desktopGallery/img7.jpg";
import img8 from "../../../public/desktopGallery/img8.jpg";
import img9 from "../../../public/desktopGallery/img9.jpg";

function Gallery() {
  const visibleImages = [
    { id: 1, alt: " gallery image", src: img1 },
    { id: 2, alt: " gallery image", src: img2 },
    { id: 3, alt: " gallery image", src: img3 },
    { id: 4, alt: " gallery image", src: img4 },
    { id: 5, alt: " gallery image", src: img5 },
    { id: 6, alt: " gallery image", src: img6 },
    { id: 7, alt: " gallery image", src: img7 },
    { id: 8, alt: " gallery image", src: img8 },
    { id: 9, alt: " gallery image", src: img9 },
  ];
  return (
    <section
      id="gallery"
      className="w-full text-center bg-[#F5F5F5] pt-8 pb-10"
    >
      <div className="relative m-auto">
        <h1 className="mb-4 text-[26px] leading-[37.57px]  font-semibold lg:text-[38px] lg:leading-[54.91px]">
          LAST EVENT GLIMPSE
        </h1>
        <div className="w-full">
          <Marquee speed={100} gradient={false} pauseOnHover={true}>
            {visibleImages.map((item) => (
              <div key={item.id} className="mx-1">
                <Image
                  src={item.src}
                  alt={`gallery ${item.id}`}
                  width={237}
                  height={152}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
