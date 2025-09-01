import Button from "@/app/_ui/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-start">
      <div className="absolute inset-0 w-full h-full">
        {/* BACKGROUND HERO BANNER */}
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/home/mobile/image-header.jpg"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/home/tablet/image-header.jpg"
          />
          <img
            src="/home/desktop/image-hero.jpg"
            alt="hero image"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* HERO CONTENT */}
      <div
        className="relative w-full h-full max-w-[1110px] mx-auto
                flex justify-center lg:justify-between items-center
                px-6 lg:px-0 mt-10 md:mt-0 lg:mt-20 z-1"
      >
        <div
          className="flex justify-center items-center lg:items-start flex-col lg:justify-start text-center lg:text-left
                    gap-y-6 max-w-[24.875rem] lg:mx-0"
        >
          <h3 className="text-[0.875rem] text-white tracking-[10px] font-normal uppercase">
            New product
          </h3>
          <h1 className="text-4xl md:text-[3.5rem] text-white tracking-[1.29px] md:tracking-[2px] leading-10 md:leading-[3.625rem] font-bold uppercase">
            XX99 Mark II Headphones
          </h1>
          <p className="text-[0.9375rem] text-white leading-[25px] font-medium max-w-[20.5rem] md:max-w-[21.8125rem]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="headphones/xx99-mark-two-headphones">
            <Button variant="primary">See product</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
