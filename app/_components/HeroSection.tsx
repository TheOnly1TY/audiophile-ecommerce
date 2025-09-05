"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import Button from "@/app/_ui/Button";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-start">
      {/* BACKGROUND HERO BANNER */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop */}
        <Image
          src="/home/desktop/image-hero.jpg"
          alt="hero image desktop"
          fill
          priority
          className="hidden lg:block w-full h-full object-cover"
        />

        {/* Tablet */}
        <Image
          src="/home/tablet/image-header.jpg"
          alt="hero image tablet"
          fill
          priority
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />

        {/* Mobile */}
        <Image
          src="/home/mobile/image-header.jpg"
          alt="hero image mobile"
          fill
          priority
          className="block md:hidden w-full h-full object-cover"
        />
      </div>

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
        className="relative w-full h-full max-w-[1160px] mx-auto
      flex justify-center lg:justify-between items-center
      px-6 lg:px-0 mt-10 md:mt-0 lg:mt-20 z-10"
      >
        <div className="lg:mx-6">
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
      </motion.div>
    </section>
  );
}
