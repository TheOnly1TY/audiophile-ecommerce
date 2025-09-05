"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Overlay from "@/app/_ui/Overlay";
import Logo from "@/app/_ui/Logo";
import Navigation from "@/app/_components/Navigation";
import { useCart } from "@/app/_contexts/CartContext";
import MenuList from "@/app/_components/MenuList";
import Cart from "@/app/_components/Cart";
import { useAnimation, motion } from "framer-motion";

export default function Header() {
  const firstControls = useAnimation();
  const secondControls = useAnimation();
  const thirdControls = useAnimation();

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

  useEffect(() => {
    async function sequence() {
      await firstControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      });
      await secondControls.start({
        opacity: 1,
        x: 0,
      });
      await thirdControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 },
      });
    }
    sequence();
  }, [firstControls, secondControls, thirdControls]);

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
                <button className="cursor-pointer">
                  <Image
                    src="/shared/mobile/icon-cancel.svg"
                    width={24}
                    height={24}
                    alt="close menu button"
                  />
                </button>
              ) : (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={firstControls}
                  className="cursor-pointer"
                >
                  <Image
                    src="/shared/mobile/icon-hamburger.svg"
                    width={24}
                    height={24}
                    alt="open menu button"
                  />
                </motion.button>
              )}
            </div>
            {/*Tablet-only logo (Hidden on mobile & Tablet) required by design layout */}
            <Logo
              hidden={"mobile/desktop"}
              priority={false}
              animation={secondControls}
            />
          </div>
          {/* Mobile & Desktop logo (hidden on tablet) separate component for a responsive design  */}
          <Logo hidden={"tablet"} priority={true} animation={firstControls} />
          <Navigation isHidden={true} animation={secondControls} />

          {/* CART ICON */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={thirdControls}
            className="relative cursor-pointer z-10"
            onClick={handleToggleCart}
          >
            <button className="cursor-pointer">
              <Image
                src="/shared/desktop/icon-cart.svg"
                width={23.33}
                height={20}
                className="w-auto h-auto"
                alt="toggle cart button"
              />
            </button>
            {addedProducts.length !== 0 && (
              <div className="absolute -top-3 -right-3 flex justify-center items-center min-w-6 h-6 text-sm font-bold text-white  bg-brand-orange rounded-full">
                {addedProducts.length}
              </div>
            )}
          </motion.div>
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
        <MenuList />
        {isNavOpen && <Overlay isHidden={true} />}
      </div>
    </>
  );
}
