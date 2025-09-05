"use client";

import About from "@/app/_components/About";
import HeroSection from "@/app/_components/HeroSection";
import CategoryList from "@/app/_components/CategoryList";
import HomepageProductList from "@/app/_components/HomepageProductList";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div>
      <HeroSection />
      <section className="lg:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[1110px] grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-[10px] lg:gap-x-[1.895rem] px-6 md:px-0 my-36 md:mx-10 mx-auto lg:mx-auto"
        >
          <CategoryList />
        </motion.div>
      </section>
      <HomepageProductList />
      <div className="px-6">
        <About />
      </div>
    </div>
  );
}
