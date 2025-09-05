"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import Button from "@/app/_ui/Button";
import useMediaQuery from "@/app/_hooks/useMediaQuery";
export default function HomepageProductList() {
  // media queries
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isTablet = useMediaQuery("(min-width: 701px) and (max-width: 1024px)");

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="lg:px-6">
      <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-[1110px] mx-auto md:mx-10 lg:mx-auto px-6 md:px-0 my-36">
        {/* ZX9 Speaker */}
        <motion.div
          ref={ref1}
          variants={containerVariants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          transition={{ duration: 0.75, ease: "easeIn" }}
          className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-x-32 lg:h-[35rem] bg-[url(/home/desktop/pattern-circles.svg)] bg-no-repeat bg-bottom bg-brand-orange rounded-lg overflow-hidden p-8"
        >
          <div className="mb-12 lg:transform lg:translate-y-12 mt-6 lg:mb-0 lg:mt-0">
            <Image
              src={
                isDesktop
                  ? "/home/desktop/image-speaker-zx9.png"
                  : isTablet
                  ? "/home/tablet/image-speaker-zx9.png"
                  : "/home/mobile/image-speaker-zx9.png"
              }
              alt="speaker-zx9 image illustration"
              width={410}
              height={410}
              className="w-[172.25px] md:w-[197.21px] lg:w-[410.23px] h-auto md:mb-8 mx-auto rounded-lg"
              priority
            />
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
        </motion.div>

        {/* ZX7 Speaker */}
        <motion.div
          ref={ref2}
          variants={containerVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          transition={{ duration: 0.75, ease: "easeIn" }}
          className="relative"
        >
          <Image
            src={
              isDesktop
                ? "/home/desktop/image-speaker-zx7.jpg"
                : isTablet
                ? "/home/tablet/image-speaker-zx7.jpg"
                : "/home/mobile/image-speaker-zx7.jpg"
            }
            alt="speaker-zx7 background"
            width={1110}
            height={320}
            className="w-full rounded-lg h-auto"
          />

          <div className="absolute top-1/2 left-1/3 md:left-1/5 lg:left-1/6 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-y-8 ml-2 md:ml-0">
            <h2 className="text-[1.75rem] text-black font-bold tracking-[2px] uppercase">
              zx7 speaker
            </h2>
            <Link href="speakers/zx7-speaker">
              <Button variant="secondary">see product</Button>
            </Link>
          </div>
        </motion.div>

        {/* Earphones */}
        <motion.div
          ref={ref3}
          variants={containerVariants}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          transition={{ duration: 0.75, ease: "easeIn" }}
          className="flex flex-col md:flex-row gap-6 md:gap-[11px] md:h-[320px] lg:gap-6"
        >
          <div className="w-full h-full">
            <Image
              src={
                isDesktop
                  ? "/home/desktop/image-earphones-yx1.jpg"
                  : isTablet
                  ? "/home/tablet/image-earphones-yx1.jpg"
                  : "/home/mobile/image-earphones-yx1.jpg"
              }
              alt="earphones image illustration"
              width={540}
              height={320}
              className="w-full lg:w-[540px] h-[200px] md:h-[320px] lg:h-auto object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center gap-y-8 w-full h-[200px] md:h-auto pl-4 lg:pl-24 flex-col bg-neutral-gray rounded-lg">
            <h2 className="text-[1.75rem] text-black font-bold tracking-[2px] uppercase">
              yx1 earphones
            </h2>
            <Link href="earphones/yx1-earphones">
              <Button variant="secondary">see product</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
