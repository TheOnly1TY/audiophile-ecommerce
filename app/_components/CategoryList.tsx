"use client";

import Image from "next/image";
import Link from "next/link";

import Right_Icon from "@/public/shared/desktop/icon-arrow-right.svg";
import { useCart } from "@/app/_contexts/CartContext";
// import Headphones_Thumbnail from "@/public/shared/desktop/image-category-thumbnail-headphones.png";
// import Earphones_Thumbnail from "@/public/shared/desktop/image-category-thumbnail-earphones.png";
// import Speakers_Thumbnail from "@/public/shared/desktop/image-category-thumbnail-speakers.png";

const categories = [
  {
    label: "headphones",
    thumbnail: "/shared/desktop/image-category-thumbnail-headphones.png",
    href: "/headphones",
  },
  {
    label: "speakers",
    thumbnail: "/shared/desktop/image-category-thumbnail-speakers.png",
    href: "/speakers",
  },
  {
    label: "earphones",
    thumbnail: "/shared/desktop/image-category-thumbnail-earphones.png",
    href: "/earphones",
  },
];

export default function CategoryList() {
  const { setIsNavOpen } = useCart();
  return (
    <>
      {categories.map((cat) => (
        <div
          key={cat.label}
          className="group relative w-full h-[165px] lg:h-[204px] bg-neutral-gray rounded-sm"
        >
          <Image
            src={cat.thumbnail}
            width={100}
            height={100}
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-1/2 mx-auto mt-10 mb-6"
            alt={cat.label}
          />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-y-4 w-full px-6">
            <h3 className="text-[0.9375rem] lg:text-lg tracking-[1.07px] lg:tracking-[1.29px] text-black font-bold uppercase text-center">
              {cat.label}
            </h3>
            <Link href={cat.href}>
              <button
                className="flex items-center justify-center gap-4 text-[0.8125rem] tracking-[1px] text-black uppercase font-bold group-hover:text-brand-orange transition-all duration-300 ease-in-out cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                shop{" "}
                <span>
                  <Image src={Right_Icon} alt="move to category" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
