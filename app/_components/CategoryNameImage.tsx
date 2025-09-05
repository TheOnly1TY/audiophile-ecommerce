"use client";
import Image from "next/image";
import useMediaQuery from "@/app/_hooks/useMediaQuery";

export default function CategoryNameImage({
  categoryImage,
  id,
}: {
  categoryImage: { mobile: string; tablet: string; desktop: string };
  id: number;
}) {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isTablet = useMediaQuery("(min-width: 701px) and (max-width: 1024px)");
  const productImage = isDesktop
    ? categoryImage.desktop
    : isTablet
    ? categoryImage.tablet
    : categoryImage.mobile;

  // ✅ provide width/height depending on device (to help Next.js optimize)
  const { width, height } = isDesktop
    ? { width: 540, height: 560 }
    : isTablet
    ? { width: 689, height: 352 }
    : { width: 654, height: 600 };

  return (
    <div className="w-full lg:max-w-[540px] pb-12 md:pb-[52px] lg:mb-0">
      <Image
        src={productImage}
        alt={` product`}
        width={width}
        height={height}
        className="rounded-lg w-full"
        priority={id === 1}
      />
    </div>
  );
}
