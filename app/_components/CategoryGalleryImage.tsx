"use client";

import Image from "next/image";

import useMediaQuery from "@/app/_hooks/useMediaQuery";
import { GalleryProps } from "@/app/_types/Types";

export default function CategoryGalleryImage({ gallery }: GalleryProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const getSrc = (img: {
    desktop: string;
    tablet: string;
    mobile: string;
  }): string => (isDesktop ? img.desktop : isTablet ? img.tablet : img.mobile);
  return (
    <>
      {/* Left column */}
      <div className="flex flex-col gap-y-[20px] lg:gap-y-[32px] w-full">
        <div className="relative w-full h-[200px] md:h-[280px] lg:h-[300px]">
          <Image
            src={getSrc(gallery.first)}
            alt="first gallery"
            fill
            quality={100}
            sizes="(max-width: 767px) 100vw,
                   (max-width: 1023px) 50vw,
                   280px"
            className="rounded-lg object-cover"
          />
        </div>

        <div className="relative w-full h-[200px] md:h-[280px] lg:h-[300px]">
          <Image
            src={getSrc(gallery.second)}
            alt="second gallery"
            fill
            quality={100}
            sizes="(max-width: 767px) 100vw,
                   (max-width: 1023px) 50vw,
                   280px"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Right column */}
      <div className="relative w-full h-[300px] md:h-[580px] lg:h-[630px]">
        <Image
          src={getSrc(gallery.third)}
          alt="third gallery"
          fill
          quality={100}
          sizes="(max-width: 767px) 100vw,
                 (max-width: 1023px) 50vw,
                 600px"
          className="rounded-lg object-cover"
        />
      </div>
    </>
  );
}
