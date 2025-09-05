"use client";

import { useState } from "react";
import { useCart } from "@/app/_contexts/CartContext";
import Button from "@/app/_ui/Button";
import Counter from "@/app/_ui/Counter";
import { cartProductDataProps } from "@/app/_types/Types";

export default function ProductCartControls({
  cartProductData,
}: {
  cartProductData: cartProductDataProps;
}) {
  const { handleAddProduct } = useCart();
  const [count, setCount] = useState<number>(1);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex gap-x-6">
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      >
        {count}
      </Counter>
      <Button action={() => handleAddProduct(count, setCount, cartProductData)}>
        add to cart
      </Button>
    </div>
  );
}
