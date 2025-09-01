// import Image from "next/image";

// import AboutImage_Desktop from "@/public/shared/desktop/image-best-gear.jpg";
// import AboutImage_Tablet from "@/public/shared/tablet/image-best-gear.jpg";
// import AboutImage_Mobile from "@/public/shared/mobile/image-best-gear.jpg";

export default function About() {
  return (
    <section className="flex flex-col-reverse gap-10 md:gap-16 lg:flex-row justify-between items-center max-w-[1110px] lg:h-[36.75rem] mx-auto px-6 md:mx-10 lg:mx-auto md:px-0">
      <div className="flex flex-col text-center lg:text-left gap-y-8 md:max-w-[573px] lg:max-w-[445px]">
        <h2 className="text-[1.75rem] md:text-[2.5rem] leading-[2.75rem] tracking-[1px] md:tracking-[1.43px] uppercase font-bold">
          Bringing you the best{" "}
          <span className="text-brand-orange">audio </span>
          gear
        </h2>
        <p className="text-[0.9375rem] leading-[25px] text-black/50 font-medium">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/shared/mobile/image-best-gear.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/shared/tablet/image-best-gear.jpg"
        />

        <img
          src="/shared/desktop/image-best-gear.jpg"
          className="rounded-lg w-full"
          alt="about"
        />
      </picture>
    </section>
  );
}
