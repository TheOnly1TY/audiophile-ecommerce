import Image from "next/image";
import empty_cart from "@/public/cart/empty-cart.png";

function EmptyCart({ children }) {
  return (
    <div className="flex flex-col justify-center  items-center">
      <Image src={empty_cart} width={100} height={100} alt="empty-cart" />
      <h3 className="text-lg text-neutral-charcoal font-bold">
        Your cart is empty!
      </h3>
      <p className="text-[0.9375rem] text-neutral-charcoal leading-[25px] font-medium text-center mb-2">
        Browse our categories and discover our best deals!
      </p>
      {children}
    </div>
  );
}

export default EmptyCart;
