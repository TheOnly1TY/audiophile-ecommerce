import Image from "next/image";

function EmptyCart({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center  items-center">
      <Image
        src="/cart/empty-cart.png"
        width={80}
        height={80}
        alt="empty-cart"
      />
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
