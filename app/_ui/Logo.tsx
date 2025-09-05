"use client";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Controls = ReturnType<typeof useAnimation>;
export default function Logo({
  hidden,
  priority,
  animation,
}: {
  hidden?: string;
  priority: boolean;
  animation: Controls | false;
}) {
  return (
    <Link
      href="/"
      className={`${hidden === "tablet" && "md:hidden lg:block"} ${
        hidden === "mobile/desktop" && "hidden md:block lg:hidden"
      }`}
    >
      <motion.div
        initial={animation !== false ? { opacity: 0, x: -20 } : false}
        animate={animation !== false ? animation : false}
      >
        <Image
          src="/shared/desktop/logo.svg"
          width={143}
          height={25}
          alt="audiophile logo"
          priority={priority}
        />
      </motion.div>
    </Link>
  );
}
