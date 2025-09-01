"use client";

import Button from "../_ui/Button";
import { useCart } from "@/app/_contexts/CartContext";
import EmptyCart from "./EmptyCart";
import SummaryProducts from "./SummaryProducts";
import Link from "next/link";

export default function Summary() {
  const { addedProducts } = useCart();
  return (
    <div className="lg:max-w-[350px] w-full p-6 md:p-[2.0625rem] bg-white rounded-lg">
      {addedProducts.length === 0 ? (
        <EmptyCart>
          <Link href="/">
            <Button>Start Shopping</Button>
          </Link>
        </EmptyCart>
      ) : (
        <SummaryProducts addedProducts={addedProducts} />
      )}
    </div>
  );
}
