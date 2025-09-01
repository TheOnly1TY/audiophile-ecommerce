import EmptyCart from "@/app/_components/EmptyCart";

import { useCart } from "../_contexts/CartContext";
import CartProducts from "./CartProducts";
import Button from "../_ui/Button";

export default function Cart() {
  const { addedProducts, handleToggleCart } = useCart();
  return (
    <div className="relative max-w-[69.375rem] mx-auto lg:mx-auto flex flex-col items-center md:items-end md:mx-10">
      <div className="w-full fixed top-[7.5rem] md:w-[377px] flex flex-col bg-white z-50 shadow-lg rounded-lg p-6 mx-6 md:mx-0">
        {addedProducts.length === 0 ? (
          <EmptyCart>
            <Button action={handleToggleCart}>Start Shopping</Button>
          </EmptyCart>
        ) : (
          <CartProducts />
        )}
      </div>
    </div>
  );
}
