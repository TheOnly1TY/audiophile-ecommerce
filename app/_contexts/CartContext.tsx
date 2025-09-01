"use client";
import { createContext, useContext, useState } from "react";
import {
  AddedProductsType,
  CartContextType,
  cartProductDataProps,
} from "@/app/types/Types";
import { toast } from "react-toastify";
import { toastProperties } from "../_libs/helpers";
import { SHIPPING_FEE } from "../_constants/pricing";

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [addedProducts, setAddedProducts] = useState<AddedProductsType[]>([]);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const TotalProductPrice = addedProducts.reduce(
    (acc, cur) => cur.price * cur.quantity + acc,
    0
  );

  const GRANT_PRICE = TotalProductPrice + SHIPPING_FEE;

  const handleToggleCart = () => setIsCartOpen((prev) => !prev);

  const handleDeleteProducts = () => setAddedProducts([]);

  const handleAddProduct = (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    cartProductData: cartProductDataProps
  ) => {
    const existingProducts = addedProducts.find(
      (product) => product.id === cartProductData.id
    );

    if (existingProducts) {
      // 1. Update Product Action
      setAddedProducts((prev) =>
        prev.map((product) =>
          product.id === existingProducts.id
            ? { ...product, quantity: Number(product.quantity + count) }
            : product
        )
      );
      // 2. Reset State
      setCount(1);

      // 3. Notify
      toast.success(
        `Product ${existingProducts.name.split(" ")[0]} quantity updated!`,
        toastProperties
      );
    } else {
      // 1. Add Product Action
      setAddedProducts([
        ...addedProducts,
        { ...cartProductData, quantity: Number(count) },
      ]);

      // 2. Reset state
      setCount(1);

      // 3. Notify
      toast.success(
        `Product ${cartProductData.name.split(" ")[0]} is Added!`,
        toastProperties
      );
    }
  };

  const handleDecreaseQuantity = (id: number) => {
    const getProduct = addedProducts.find((product) => product.id === id);

    if (getProduct?.quantity === 1) {
      setAddedProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
      toast.success(
        `Product ${getProduct.name.split(" ")[0]} deleted`,
        toastProperties
      );
    } else {
      setAddedProducts((prevProduct) =>
        prevProduct.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  const handleIncreaseQuantity = (id: number) => {
    setAddedProducts((prevProduct) =>
      prevProduct.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        GRANT_PRICE,
        TotalProductPrice,
        isCartOpen,
        isNavOpen,
        setIsNavOpen,
        handleToggleCart,
        addedProducts,
        setAddedProducts,
        handleAddProduct,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleDeleteProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext must be within the CartProvider");
  return context;
}

export { CartProvider, useCart };
