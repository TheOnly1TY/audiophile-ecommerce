export type CartContextType = {
  GRANT_PRICE: number;
  isCartOpen: boolean;
  TotalProductPrice: number;
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addedProducts: AddedProductsType[];
  setAddedProducts: React.Dispatch<React.SetStateAction<AddedProductsType[]>>;
  handleToggleCart: () => void;
  handleAddProduct: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    cartProductData: cartProductDataProps
  ) => void;
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  handleDeleteProducts: () => void;
};

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  width?: number | string;
  children: React.ReactNode;
  action?: () => void;
};

export interface cartProductDataProps {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
}

export interface AddedProductsType extends cartProductDataProps {
  quantity: number;
}

export type CounterProps = {
  spacing?: string;
  children: React.ReactNode;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

export type OverlayProps = {
  isHidden: boolean;
  action: () => void;
  index?: string;
};

export type handleAddProductProps = {
  count: number;
  setCount: () => void;
};

export type Inputs = {
  name: string;
  email: string;
  tel: number;
  address: string;
  zipcode: number;
  city: string;
  country: string;
  eMoneyNumber: number;
  paymentMethod: string;
  eMoneyPin: number;
};
