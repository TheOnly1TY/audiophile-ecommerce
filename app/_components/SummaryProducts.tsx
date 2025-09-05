"use client";

import Image from "next/image";

import Button from "@/app/_ui/Button";
import { useCart } from "@/app/_contexts/CartContext";
import SpinnerMini from "@/app/_ui/SpinnerMini";
import { useCheckoutForm } from "@/app/_contexts/FormContext";
import { AddedProductsType } from "@/app/_types/Types";
import { SHIPPING_FEE, VAT_FEE } from "@/app/_constants/pricing";
import formatProductName from "@/app/_libs/helpers";

export default function SummaryProducts({
  addedProducts,
}: {
  addedProducts: AddedProductsType[];
}) {
  const { TotalProductPrice, GRANT_PRICE } = useCart();
  const { isLoading } = useCheckoutForm();
  return (
    <div>
      {" "}
      <h3 className="text-lg tracking-[1.29px] uppercase font-bold">summary</h3>
      <ul className="flex flex-col gap-4 my-8 max-h-[250px] overflow-y-scroll">
        {addedProducts.map((product) => (
          <li key={product.id} className="flex justify-between">
            <div className="flex gap-6">
              <Image
                src={product.image.desktop}
                width={64}
                height={64}
                alt="thumbnail"
                className="rounded-lg"
              />
              <div>
                <h4 className="text-[0.9375rem] leading-[25px] font-bold uppercase">
                  {formatProductName(product.name)}
                </h4>
                <p className="text-sm leading-[25px] font-bold text-gray-700">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </div>
            <span className="text-[0.9375rem] leading-[25px] text-black/gray-7text-gray-700 font-bold ">
              x{product.quantity}
            </span>
          </li>
        ))}
      </ul>
      <p className="flex justify-between text-[0.9375rem] leading-[24px] font-medium uppercase text-gray-700">
        total{" "}
        <span className="text-lg leading-normal font-bold text-black">
          ${TotalProductPrice.toLocaleString()}
        </span>
      </p>
      <p className="flex justify-between text-[0.9375rem] leading-[24px] font-medium uppercase text-gray-700">
        shipping{" "}
        <span className="text-lg leading-normal font-bold text-black">
          ${SHIPPING_FEE}
        </span>
      </p>
      <p className="flex justify-between text-[0.9375rem] leading-[24px] font-medium uppercase text-gray-700 mb-6">
        vat (included){" "}
        <span className="text-lg leading-normal font-bold text-black">
          ${VAT_FEE.toLocaleString()}
        </span>
      </p>
      <p className="flex justify-between text-[0.9375rem] leading-[24px] font-medium uppercase text-gray-700 mb-6">
        grant{" "}
        <span className="text-lg leading-normal font-bold text-brand-orange">
          ${GRANT_PRICE.toLocaleString()}
        </span>
      </p>
      <Button width="full" type="submit" form="checkout-form">
        {isLoading ? <SpinnerMini /> : "continue"}
      </Button>
    </div>
  );
}
