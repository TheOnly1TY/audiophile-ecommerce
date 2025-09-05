import { AnimatePresence, motion } from "framer-motion";

import EmptyCart from "@/app/_components/EmptyCart";
import { useCart } from "@/app/_contexts/CartContext";
import CartProducts from "@/app/_components/CartProducts";
import Button from "@/app/_ui/Button";

export default function Cart() {
  const { addedProducts, handleToggleCart } = useCart();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative max-w-[69.375rem] mx-auto lg:mx-auto flex flex-col items-center md:items-end md:mx-10 z-50"
      >
        <div className="w-[320px] fixed top-[7.5rem] md:w-[377px] flex flex-col bg-white shadow-lg rounded-lg p-6 mx-6 md:mx-0">
          {addedProducts.length === 0 ? (
            <EmptyCart>
              <Button action={handleToggleCart}>Start Shopping</Button>
            </EmptyCart>
          ) : (
            <CartProducts />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
