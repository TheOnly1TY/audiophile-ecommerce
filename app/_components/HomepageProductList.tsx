import ZX9Speaker_Desktop from "@/public/home/desktop/image-speaker-zx9.png";
import ZX9Speaker_Tablet from "@/public/home/tablet/image-speaker-zx9.png";
import ZX9Speaker_Mobile from "@/public/home/mobile/image-speaker-zx9.png";
import EarPhones_Desktop from "@/public/home/desktop/image-earphones-yx1.jpg";
import EarPhones_Tablet from "@/public/home/tablet/image-earphones-yx1.jpg";
import EarPhones_Mobile from "@/public/home/mobile/image-earphones-yx1.jpg";
import ZX7Speaker_Tablet from "@/public/home/tablet/image-speaker-zx7.jpg";
import ZX7Speaker_Mobile from "@/public/home/mobile/image-speaker-zx7.jpg";
import ZX7Speaker_Desktop from "@/public/home/desktop/image-speaker-zx7.jpg";

import Image from "next/image";
import Button from "@/app/_ui/Button";

export default function HomepageProductList() {
  return (
    <section className="flex flex-col gap-y-6 lg:gap-y-8 max-w-[1110px] mx-auto md:mx-10 lg:mx-auto px-6 md:px-0 my-36">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-x-32 lg:h-[35rem] bg-[url(/home/desktop/pattern-circles.svg)] bg-no-repeat bg-bottom bg-brand-orange rounded-lg overflow-hidden p-8">
        <div className="mb-12 lg:transform lg:translate-y-12 mt-6 lg:mb-0 lg:mt-0">
          <picture>
            <source media="(max-width: 767px)" srcSet={ZX9Speaker_Mobile.src} />
            <source
              media="(max-width: 1023px)"
              srcSet={ZX9Speaker_Tablet.src}
            />
            <Image
              src={ZX9Speaker_Desktop}
              className="w-[172.25px] md:w-[197.21px] lg:w-[410.23px]  md:mb-8 mx-auto rounded-lg"
              alt="speaker-zx9 bg"
            />
          </picture>
        </div>

        <div className="max-w-[349px] lg:transform lg:translate-y-12 flex justify-center flex-col items-center text-center lg:text-left lg:items-start gap-y-6 mb-6">
          <h2 className="text-4xl leading-10 tracking-[1.29px] md:text-[3.5rem] md:leading-[3.625rem] md:tracking-[2px] text-white uppercase font-bold">
            zx9 speaker
          </h2>
          <p className="text-[0.9375rem] leading-[25px] text-neutral-ivory font-medium">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button variant="tertiary">see product</Button>
        </div>
      </div>
      <div className="relative">
        <picture>
          <source media="(max-width: 767px)" srcSet={ZX7Speaker_Mobile.src} />
          <source media="(max-width: 1023px)" srcSet={ZX7Speaker_Tablet.src} />
          <Image
            src={ZX7Speaker_Desktop}
            className="rounded-lg"
            alt="speaker-zx7 bg"
          />
        </picture>

        <div className="absolute top-1/2 left-1/3 md:left-1/4 lg:left-1/6 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-y-8 ml-2 md:ml-0">
          <h2 className="text-[1.75rem] text-black font-bold tracking-[2px] uppercase">
            zx7 speaker
          </h2>
          <Button variant="secondary">see product</Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-[11px] md:h-[320px] lg:gap-6">
        <picture className="w-full h-full">
          <source media="(max-width: 767px)" srcSet={EarPhones_Mobile.src} />
          <source media="(max-width: 1023px)" srcSet={EarPhones_Tablet.src} />
          <Image
            src={EarPhones_Desktop}
            alt="earphones"
            className="w-full lg:w-[540px] h-[200px] md:h-[320px] object-cover rounded-lg"
          />
        </picture>
        <div className="flex justify-center gap-y-8 w-full min-h-[200px] md:h-auto pl-4 lg:pl-24 flex-col bg-neutral-gray rounded-lg">
          <h2 className="text-[1.75rem] text-black font-bold tracking-[2px] uppercase">
            yx1 earphones
          </h2>
          <Button variant="secondary">see product</Button>
        </div>
      </div>
    </section>
  );
}
