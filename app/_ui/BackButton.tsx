"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };
  return (
    <button
      className="text-[15px] text-gray-700 leading-[25px] font-medium mb-6 md:mb-8 lg:mb-12 transition-all duration-300 ease-in-out hover:text-brand-orange cursor-pointer"
      onClick={navigateBack}
    >
      Go Back
    </button>
  );
}
