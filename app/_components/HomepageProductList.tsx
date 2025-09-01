// import ZX9Speaker_Desktop from "@/public/home/desktop/image-speaker-zx9.png";
// import ZX9Speaker_Tablet from "@/public/home/tablet/image-speaker-zx9.png";
// import ZX9Speaker_Mobile from "@/public/home/mobile/image-speaker-zx9.png";
// import EarPhones_Desktop from "@/public/home/desktop/image-earphones-yx1.jpg";
// import EarPhones_Tablet from "@/public/home/tablet/image-earphones-yx1.jpg";
// import EarPhones_Mobile from "@/public/home/mobile/image-earphones-yx1.jpg";
// import ZX7Speaker_Tablet from "@/public/home/tablet/image-speaker-zx7.jpg";
// import ZX7Speaker_Mobile from "@/public/home/mobile/image-speaker-zx7.jpg";
// import ZX7Speaker_Desktop from "@/public/home/desktop/image-speaker-zx7.jpg";

// import Image from "next/image";
import Button from "@/app/_ui/Button";
import Link from "next/link";

export default function HomepageProductList() {
  return (
    <section className="flex flex-col gap-y-6 lg:gap-y-8 max-w-[1110px] mx-auto md:mx-10 lg:mx-auto px-6 md:px-0 my-36">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-x-32 lg:h-[35rem] bg-[url(/home/desktop/pattern-circles.svg)] bg-no-repeat bg-bottom bg-brand-orange rounded-lg overflow-hidden p-8">
        <div className="mb-12 lg:transform lg:translate-y-12 mt-6 lg:mb-0 lg:mt-0">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/home/mobile/image-speaker-zx9.png"
            />
            <source
              media="(max-width: 1023px)"
              srcSet="/home/tablet/image-speaker-zx9.png"
            />
            <img
              src="/home/desktop/image-speaker-zx9.png"
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
          <Link href="speakers/zx9-speaker">
            <Button variant="tertiary">see product</Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/home/mobile/image-speaker-zx7.jpg"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/home/tablet/image-speaker-zx7.jpg"
          />
          <img
            src="/home/desktop/image-speaker-zx7.jpg"
            className="w-full rounded-lg"
            alt="speaker-zx7 bg"
          />
        </picture>

        <div className="absolute top-1/2 left-1/3 md:left-1/5 lg:left-1/6 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-y-8 ml-2 md:ml-0">
          <h2 className="text-[1.75rem] text-black font-bold tracking-[2px] uppercase">
            zx7 speaker
          </h2>
          <Link href="speakers/zx7-speaker">
            <Button variant="secondary">see product</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-[11px] md:h-[320px] lg:gap-6">
        <picture className="w-full h-full">
          <source
            media="(max-width: 767px)"
            srcSet="/home/mobile/image-earphones-yx1.jpg"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/home/tablet/image-earphones-yx1.jpg"
          />
          <img
            src="/home/desktop/image-earphones-yx1.jpg"
            alt="earphones"
            className="w-full lg:w-[540px] h-[200px] md:h-[320px] object-cover rounded-lg"
          />
        </picture>
        {/* <div>
          <div className="hidden rounded-lg lg:block ">
            <Image
              src="/home/desktop/image-earphones-yx1.jpg"
              width={540}
              height={320}
              alt=""
            />
          </div>
          <div className="hidden rounded-lg md:block lg:hidden max-w-full">
            <Image
              src="/home/tablet/image-earphones-yx1.jpg"
              width={1023}
              height={320}
              alt=""
            />
          </div>
          <div className="full rounded-lg block md:hidden ">
            <Image
              src="/home/mobile/image-earphones-yx1.jpg"
              width={767}
              height={200}
              alt=""
            />
          </div>
        </div> */}
        <div className="flex justify-center gap-y-8 w-full h-[200px] md:h-auto pl-4 lg:pl-24 flex-col bg-neutral-gray rounded-lg">
          <h2 className="text-[1.75rem] text-black font-bold tracking-[2px] uppercase">
            yx1 earphones
          </h2>
          <Link href="earphones/yx1-earphones">
            <Button variant="secondary">see product</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
