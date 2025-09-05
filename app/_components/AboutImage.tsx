"use client";

import Image from "next/image";

import useMediaQuery from "@/app/_hooks/useMediaQuery";

export default function AboutImage() {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isTablet = useMediaQuery("(min-width: 701px) and (max-width: 1024px)");

  const img = isDesktop
    ? { src: "/shared/desktop/image-best-gear.jpg", w: 540, h: 588 }
    : isTablet
    ? { src: "/shared/tablet/image-best-gear.jpg", w: 689, h: 300 }
    : { src: "/shared/mobile/image-best-gear.jpg", w: 654, h: 600 };

  return (
    <div className="w-full">
      <Image
        src={img.src}
        alt="Person wearing headphones at Audiophile store"
        width={img.w}
        height={img.h}
        className="rounded-lg w-full"
      />
    </div>
  );
}
