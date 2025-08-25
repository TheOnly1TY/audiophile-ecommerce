import Image from "next/image";

import Right_Icon from "@/public/shared/desktop/icon-arrow-right.svg";
import Headphones_Thumbnail from "@/public/shared/desktop/image-category-thumbnail-headphones.png";
import Earphones_Thumbnail from "@/public/shared/desktop/image-category-thumbnail-earphones.png";
import Speakers_Thumbnail from "@/public/shared/desktop/image-category-thumbnail-speakers.png";

const categories = [
  {
    label: "headphones",
    thumbnail: Headphones_Thumbnail,
  },
  {
    label: "speakers",
    thumbnail: Speakers_Thumbnail,
  },
  {
    label: "earphones",
    thumbnail: Earphones_Thumbnail,
  },
];

export default function CategoryList() {
  return (
    <>
      {categories.map((cat) => (
        <div
          key={cat.label}
          className="group relative w-full h-[165px] lg:h-[204px] bg-neutral-gray rounded-sm"
        >
          <Image
            src={cat.thumbnail}
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-1/2 mx-auto mt-10 mb-6"
            alt={cat.label}
          />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-y-4 w-full px-6">
            <h3 className="text-[0.9375rem] lg:text-lg tracking-[1.07px] lg:tracking-[1.29px] text-black font-bold uppercase text-center">
              {cat.label}
            </h3>
            <p className="flex items-center justify-center gap-4 text-[0.8125rem] tracking-[1px] text-black uppercase font-bold group-hover:text-brand-orange transition-all duration-300 ease-in-out">
              shop{" "}
              <span>
                <Image src={Right_Icon} alt="move to category" />
              </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
