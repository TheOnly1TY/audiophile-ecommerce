"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinksType } from "@/app/_types/Types";

type Controls = ReturnType<typeof useAnimation>;

export default function Navigation({
  isHidden,
  animation = false,
}: {
  animation: Controls | false;
  isHidden?: boolean;
}) {
  const pathName = usePathname();
  const navLinks: navLinksType[] = [
    { label: "Home", href: "/" },
    { label: "Headphones", href: "/headphones" },
    { label: "Speakers", href: "/speakers" },
    { label: "Earphones", href: "/earphones" },
  ];

  return (
    <ul
      className={`${
        isHidden ? "hidden" : "flex flex-col items-center md:flex-row"
      } lg:flex gap-8 lg:gap-x-8`}
    >
      {navLinks.map((navitem, id) => (
        <motion.li
          key={id}
          initial={animation ? { opacity: 0, x: -20 } : false}
          animate={animation}
          transition={{ duration: 0.4, delay: id * 0.2, ease: "easeIn" }}
        >
          <Link
            href={navitem.href || "/"}
            className={`text-[0.8125rem] tracking-[2px] leading-[25px] font-bold uppercase
          transition-all duration-300 ease-in-out hover:text-brand-orange cursor-pointer ${
            pathName === navitem.href ? "text-brand-orange" : "text-white"
          }`}
          >
            {navitem.label}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
