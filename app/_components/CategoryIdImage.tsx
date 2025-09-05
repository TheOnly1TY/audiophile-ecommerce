"use client";

import Image from "next/image";
import useMediaQuery from "@/app/_hooks/useMediaQuery";

export default function CategoryIdImage({
  image,
}: {
  image: { mobile: string; tablet: string; desktop: string };
}) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  const src = isDesktop
    ? image.desktop
    : isTablet
    ? image.tablet
    : image.mobile;

  return (
    <div className="relative w-full lg:max-w-[540px] lg:max-h-[560px] h-[300px] md:h-[400px] lg:h-[560px]">
      <Image
        src={src}
        alt="product"
        fill
        sizes="(max-width: 767px) 100vw,
               (max-width: 1023px) 80vw,
               540px"
        className="rounded-lg object-cover"
      />
    </div>
  );
}
