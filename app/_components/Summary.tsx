"use client";

import Link from "next/link";

import Button from "@/app/_ui/Button";
import { useCart } from "@/app/_contexts/CartContext";
import EmptyCart from "@/app/_components/EmptyCart";
import SummaryProducts from "@/app/_components/SummaryProducts";

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
