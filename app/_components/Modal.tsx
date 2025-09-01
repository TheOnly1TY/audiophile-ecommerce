"use client";

import Image from "next/image";
import Button from "@/app/_ui/Button";
import { useCart } from "@/app/_contexts/CartContext";
import Overlay from "../_ui/Overlay";
import { useCheckoutForm } from "../_contexts/FormContext";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Modal() {
  const { GRANT_PRICE, addedProducts, setAddedProducts } = useCart();
  const { isConfirmationModal, setIsConfirmationModal } = useCheckoutForm();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleConfirmedProducts = () => {
    setAddedProducts([]);
    setIsConfirmationModal(false);
    redirect("/");
  };
  const confirmedProducts = isExpanded
    ? addedProducts.slice(0, 1)
    : addedProducts;
  const remainProductLength =
    addedProducts.length - addedProducts.slice(0, 1).length;
  if (!isConfirmationModal) return;
  return (
    <>
      <div
        className="
        fixed top-1/2 left-1/2 
        w-full max-w-[calc(100%-48px)] md:max-w-[540px]
        transform -translate-x-1/2 -translate-y-1/2 
      bg-white p-8 md:p-12 
        z-60 rounded-lg"
      >
        <Image
          src="/checkout/icon-order-confirmation.svg"
          width={64}
          height={64}
          className="pb-6"
          alt="order confirmation icon"
        />
        <h2 className="text-2xl md:text-[2rem] leading-7 md:leading-9 tracking-[0.86px] md:tracking-[1.14px] max-w-[284px] font-bold uppercase pb-4 md:pb-6">
          Thank you for your order
        </h2>
        <p className="text-[0.9375rem] leading-[25px] font-bold text-black/50 pb-4 md:pb-6">
          You will receive an email confirmation shortly.
        </p>
        <div className="w-full flex flex-col md:flex-row pb-4 md:pb-6">
          <ul className="grid bg-neutral-gray w-full rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg">
            <div className="max-h-[150px] overflow-y-scroll gap-y-6 p-4">
              {confirmedProducts.map((product) => (
                <li key={product.id} className=" flex justify-between">
                  <div className="flex gap-1">
                    <Image
                      src={product.image.desktop}
                      width={64}
                      height={64}
                      alt="thumbnail"
                      className="rounded-lg"
                    />
                    <div>
                      <h4 className="text-[0.9375rem] leading-[25px] font-bold uppercase">
                        xx99 mk ii
                      </h4>
                      <p className="text-sm leading-[25px] font-bold text-black/50">
                        ${product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <span className="text-[0.9375rem] leading-[25px] text-black/50 font-bold ">
                    x{product.quantity}
                  </span>
                </li>
              ))}
            </div>
            {remainProductLength !== 0 && (
              <>
                <div className="h-[1px] bg-black/50 mx-4 md:mx-6"></div>
                <span
                  className="text-xs tracking-[-0.21px] text-center text-black/50 font-bold py-4 cursor-pointer"
                  onClick={() => setIsExpanded((prev) => !prev)}
                >
                  {!isExpanded
                    ? "show less"
                    : `and ${remainProductLength} other item(s)`}
                </span>
              </>
            )}
          </ul>
          <div className="flex flex-col w-full md:w-[75%] justify-end gap-y-2 bg-black p-6 pb-4 md:pb-6 md:rounded-tr-lg rounded-bl-lg md:rounded-bl-none rounded-br-lg">
            <h3 className="text-[0.9375rem] leading-[25px] font-medium text-white/50 uppercase">
              grant total
            </h3>
            <p className="text-lg text-white font-bold">
              ${GRANT_PRICE.toLocaleString()}
            </p>
          </div>
        </div>

        <Button width="full" action={() => handleConfirmedProducts()}>
          back to home
        </Button>
      </div>

      <Overlay index="50" />
    </>
  );
}
