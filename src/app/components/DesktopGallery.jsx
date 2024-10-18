"use client";
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

const DesktopGallery = () => {
  const visibleImages = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
  ];

  return (
    <section
      id="gallery"
      className="w-full text-center bg-[#F5F5F5] pt-16 pb-20 "
    >
      <div className="relative w-full max-w-[1920px] mx-auto">
        <h1 className="mb-6 text-[26px] leading-[37.57px]  font-semibold lg:text-[38px] lg:leading-[54.91px]">
          LAST EVENT GLIMPSE
        </h1>
        <div className="w-full">
          <Marquee speed={100} gradient={false} pauseOnHover={true}>
            {visibleImages.map((item) => (
              <div key={item.id} className="mx-1">
                <Image
                  src={item.src}
                  alt={`gallery ${item.id}`}
                  width={290}
                  height={186}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default DesktopGallery;
