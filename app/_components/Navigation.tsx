"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ isHidden }: { isHidden?: boolean }) {
  const pathName = usePathname();
  const navLinks = [
    { label: "Home" },
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
        <Link href={navitem.href || "/"} key={id}>
          <li
            className={`text-[0.8125rem] tracking-[2px] leading-[25px] font-bold uppercase
          transition-all duration-300 ease-in-out hover:text-brand-orange cursor-pointer ${
            pathName.includes(navitem.href) ? "text-brand-orange" : "text-white"
          }`}
          >
            {navitem.label}
          </li>
        </Link>
      ))}
    </ul>
  );
}
