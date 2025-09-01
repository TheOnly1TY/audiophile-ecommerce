"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Cart_Icon from "@/public/shared/desktop/icon-cart.svg";
import Navigation from "@/app/_components/Navigation";
import { useCart } from "@/app/_contexts/CartContext";
import MenuList from "@/app/_components/MenuList";
import Cart from "@/app/_components/Cart";
import Overlay from "../_ui/Overlay";
import Logo from "@/app/_ui/Logo";

export default function Header() {
  // const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathName = usePathname();
  const {
    isCartOpen,
    handleToggleCart,
    isNavOpen,
    setIsNavOpen,
    addedProducts,
  } = useCart();
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
      <header
        className={`fixed w-full z-20 ${pathName !== "/" && "bg-black"}  ${
          isScrolled ? "bg-black" : ""
        } lg:px-6`}
      >
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
            className="relative cursor-pointer z-10"
            onClick={handleToggleCart}
          >
            <Image src={Cart_Icon} width={23.33} height={20} alt="cart" />
            {addedProducts.length !== 0 && (
              <div className="absolute -top-3 -right-3 flex justify-center items-center min-w-6 h-6 text-sm font-bold text-white  bg-brand-orange rounded-full">
                {addedProducts.length}
              </div>
            )}
          </div>
        </div>

        {/* CART MODAL */}

        {/* RENDER COMPONENT IS STILL TEMPORARY DUE TO ANIMATION THAT WOULD BE ADDED  */}
        {isCartOpen && (
          <div>
            <Cart />
            <Overlay isHidden={false} action={handleToggleCart} />
          </div>
        )}
      </header>

      {/* MOBILE NAVIGATION */}
      <div className="fixed w-full z-10">
        <MenuList isNavOpen={isNavOpen} />
        {isNavOpen && <Overlay isHidden={true} action={handleToggleCart} />}
      </div>
    </>
  );
}
