import Link from "next/link";
import Image from "next/image";

import Counter from "@/app/_ui/Counter";
import Button from "@/app/_ui/Button";
import { useCart } from "@/app/_contexts/CartContext";
import formatProductName from "@/app/_libs/helpers";

export default function CartProducts() {
  const {
    addedProducts,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleDeleteProducts,
    TotalProductPrice,
    handleToggleCart,
  } = useCart();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h4 className="text-lg tracking-[1.29px] font-bold uppercase">
          cart ({addedProducts.length})
        </h4>
        <button
          className="text-[0.9375rem] text-gray-700 underline leading-[25px] font-medium cursor-pointer transition-all duration-300 hover:text-brand-orange"
          onClick={handleDeleteProducts}
        >
          Remove all
        </button>
      </div>
      <ul className="flex flex-col max-h-[200px] overflow-y-scroll gap-4 my-6">
        {addedProducts.map((product) => (
          <li key={product.id} className="flex justify-between items-center">
            <div className="flex gap-4">
              <Image
                src={product.image.desktop}
                width={64}
                height={64}
                alt="thumbnail"
                className="rounded-lg"
              />
              <div>
                <h3 className="text-[0.9735rem] leading-[25px] font-bold uppercase">
                  {formatProductName(product.name)}
                </h3>
                <p className="text-sm leading-[25px] text-gray-700 font-bold">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </div>
            <Counter
              handleIncrement={() => handleIncreaseQuantity(product.id)}
              handleDecrement={() => handleDecreaseQuantity(product.id)}
              spacing="w-24 h-8"
            >
              {product.quantity}
            </Counter>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-[0.9375rem] text-gray-700 leading-[25px] font-medium">
          Total
        </h4>
        <p className="text-lg font-bold">
          ${TotalProductPrice.toLocaleString()}
        </p>
      </div>
      <Link href="/checkout">
        <Button width="full" action={handleToggleCart}>
          checkout
        </Button>
      </Link>
    </div>
  );
}
