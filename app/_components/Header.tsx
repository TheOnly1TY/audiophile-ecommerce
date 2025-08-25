"use client";
import Image from "next/image";

// import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import Logo from "@/app/_ui/Logo";
import Navigation from "@/app/_components/Navigation";
import MenuList from "@/app/_components/MenuList";
import Cart from "@/app/_components/Cart";
import Cart_Icon from "@/public/shared/desktop/icon-cart.svg";
import Overlay from "../_ui/Overlay";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  // WILL MOVE TO CONTEXT SOON
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`fixed w-full z-20 ${isScrolled ? "bg-black" : ""}`}>
        <div
          className={`flex ${
            isScrolled ? "" : "border-[#979797] border-b"
          } max-w-[1110px] mx-auto lg:mx-auto justify-between items-center px-6 py-8 md:mx-10 md:px-0`}
        >
          <div className="flex items-center gap-6 lg:hidden cursor-pointer">
            <div onClick={() => setIsNavOpen((prev) => !prev)}>
              {isNavOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide text-white lucide-x-icon lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide text-white lucide-menu-icon lucide-menu"
                >
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                  <path d="M4 6h16" />
                </svg>
              )}
            </div>
            {/*Tablet-only logo (Hidden on mobile & Tablet) required by design layout */}
            <Logo hidden={"mobile/desktop"} />
          </div>
          {/* Mobile & Desktop logo (hidden on tablet) separate component for a responsive design  */}
          <Logo hidden={"tablet"} />

          <Navigation isHidden={true} />

          {/* CART ICON */}
          <div
            className="cursor-pointer z-10"
            onClick={() => setIsCartOpen((prev) => !prev)}
          >
            <Image src={Cart_Icon} width={23.33} height={20} alt="cart" />
          </div>
        </div>

        {/* CART MODAL */}

        {/* RENDER COMPONENT IS STILL TEMPORARY DUE TO ANIMATION THAT WOULD BE ADDED  */}
        {isCartOpen && (
          <div>
            <Cart onCartOpen={setIsCartOpen} />
            <Overlay
              isHidden={false}
              action={() => setIsCartOpen((prev) => !prev)}
            />
          </div>
        )}
      </header>

      {/* MOBILE NAVIGATION */}
      <div className="fixed w-full z-10">
        <MenuList isNavOpen={isNavOpen} />
        {isNavOpen && (
          <Overlay
            isHidden={true}
            action={() => setIsNavOpen((prev) => !prev)}
          />
        )}
      </div>
    </>
  );
}
