"use client";

import CashOnDeliveryMessage from "@/app/_ui/CashOnDeliveryMessage";
import EMoneyForm from "@/app/_components/EMoneyForm";
import { useCart } from "@/app/_contexts/CartContext";
import { useCheckoutForm } from "../_contexts/FormContext";

export default function CheckoutForm() {
  const { addedProducts } = useCart();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    onSubmit,
  } = useCheckoutForm();
  const isEmptyCart = addedProducts.length === 0;

  const paymentMethod = watch("paymentMethod");
  return (
    <section className="w-full bg-white rounded-lg p-[1.46875rem] md:p-12">
      <h2 className="text-[2rem] leading-9 tracking-[1.14px] uppercase font-bold">
        Checkout
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 md:mt-12">
          <h3 className="text-[0.8125rem] text-brand-orange leading-[25px] tracking-[0.93px] font-bold uppercase mb-4">
            billing details
          </h3>
          <div className="grid md:grid-cols-2 gap-x-4">
            <div>
              <label htmlFor="name" className="styled-label justify-between">
                Name{" "}
                {errors.name && (
                  <span className="text-xs text-error-red">
                    {errors.name.message}
                  </span>
                )}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", { required: "This field is required" })}
                disabled={isEmptyCart}
                placeholder="Alexei Ward"
                className={`styled-input lg:max-w-[19.3125rem] ${
                  errors.name ? "border-error-red" : "focus:border-brand-orange"
                }`}
              />
            </div>
            <div>
              <label htmlFor="email" className="styled-label justify-between">
                Email Address
                {errors.email && (
                  <span className="text-xs text-error-red">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "invalid email",
                  },
                })}
                disabled={isEmptyCart}
                placeholder="alexei@mail.com"
                className={`styled-input lg:max-w-[19.3125rem] ${
                  errors.email
                    ? "border-error-red"
                    : "focus:border-brand-orange"
                }`}
              />
            </div>
            <div>
              <label htmlFor="tel" className="styled-label justify-between">
                Phone Number
                {errors.tel && (
                  <span className="text-xs text-error-red">
                    {errors.tel.message}
                  </span>
                )}
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                {...register("tel", {
                  required: "This field is required",
                  pattern: {
                    value: /^\+?\d[\d-]*$/,
                    message: "Enter a valid Phone Number",
                  },
                })}
                disabled={isEmptyCart}
                placeholder="+1 202-555-0136"
                className={`styled-input lg:max-w-[19.3125rem] ${
                  errors.tel ? "border-error-red" : "focus:border-brand-orange"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-12">
          <h3 className="text-[0.8125rem] text-brand-orange leading-[25px] tracking-[0.93px] font-bold uppercase mb-4">
            shipping info
          </h3>

          <label htmlFor="address" className="styled-label justify-between">
            Address
            {errors.address && (
              <span className="text-xs text-error-red">
                {errors.address.message}
              </span>
            )}
          </label>
          <input
            type="text"
            name="address"
            id="address"
            {...register("address", { required: "This field is required" })}
            disabled={isEmptyCart}
            placeholder="1137 Williams Avenue"
            className={`styled-input  ${
              errors.address ? "border-error-red" : "focus:border-brand-orange"
            }`}
          />
          <div className="grid md:grid-cols-2 gap-x-4">
            <div>
              <label htmlFor="address" className="styled-label justify-between">
                Zip Code
                {errors.zipcode && (
                  <span className="text-xs text-error-red">
                    {errors.zipcode.message}
                  </span>
                )}
              </label>
              <input
                type="number"
                name="zipcode"
                id="zipcode"
                {...register("zipcode", { required: "This field is required" })}
                disabled={isEmptyCart}
                placeholder="10001"
                className={`styled-input lg:max-w-[19.3125rem] ${
                  errors.zipcode
                    ? "border-error-red"
                    : "focus:border-brand-orange"
                }`}
              />
            </div>
            <div>
              <label htmlFor="address" className="styled-label justify-between">
                City
                {errors.city && (
                  <span className="text-xs text-error-red">
                    {errors.city.message}
                  </span>
                )}
              </label>
              <input
                type="text"
                name="city"
                id="city"
                {...register("city", { required: "This field is required" })}
                disabled={isEmptyCart}
                placeholder="New York"
                className={`styled-input lg:max-w-[19.3125rem] ${
                  errors.city ? "border-error-red" : "focus:border-brand-orange"
                }`}
              />
            </div>
            <div>
              <label htmlFor="address" className="styled-label justify-between">
                Country
                {errors.country && (
                  <span className="text-xs text-error-red">
                    {errors.country.message}
                  </span>
                )}
              </label>
              <input
                type="text"
                name="country"
                id="country"
                {...register("country", { required: "This field is required" })}
                disabled={isEmptyCart}
                placeholder="United States"
                className={`styled-input lg:max-w-[19.3125rem] ${
                  errors.country
                    ? "border-error-red"
                    : "focus:border-brand-orange"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-12">
          <h3 className="text-[0.8125rem] text-brand-orange leading-[25px] tracking-[0.93px] font-bold uppercase mb-4">
            payment info
          </h3>
          <div className="flex flex-col md:flex-row md:justify-between">
            <label htmlFor="paymentMethod" className="styled-label gap-x-16">
              Payment Method
              {errors.paymentMethod && (
                <span className="text-xs text-error-red">
                  {errors.paymentMethod.message}
                </span>
              )}
            </label>
            <div className="flex flex-col gap-4">
              <div
                className={`inline-flex items-center gap-4 w-full md:w-[309px] h-14 border-1 rounded-lg px-4 has-checked:border-brand-orange ${
                  isEmptyCart
                    ? "bg-neutral-gray cursor-not-allowed"
                    : "hover:border-brand-orange"
                } ${
                  errors.paymentMethod ? "border-error-red" : "border-[#cfcfcf]"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="e-Money"
                  {...register("paymentMethod", {
                    required: "Select 1 payment method",
                  })}
                  disabled={isEmptyCart}
                  className="w-5 h-5 accent-brand-orange"
                />
                <p className="text-sm font-bold tracking-[-0.25px]">e-Money</p>
              </div>
              <div
                className={`inline-flex items-center gap-4 w-full md:w-[309px] h-14 border-1 border-[#cfcfcf] rounded-lg px-4 has-checked:border-brand-orange ${
                  isEmptyCart
                    ? "bg-neutral-gray cursor-not-allowed"
                    : "hover:border-brand-orange"
                } ${
                  errors.paymentMethod ? "border-error-red" : "border-[#cfcfcf]"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash-on-delivery"
                  {...register("paymentMethod", {
                    required: "Select 1 payment method",
                  })}
                  disabled={isEmptyCart}
                  className="w-5 h-5 accent-brand-orange"
                  id="paymentMethod"
                />
                <p className="text-sm font-bold tracking-[-0.25px]">
                  Cash on Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
        {paymentMethod === "cash-on-delivery" && <CashOnDeliveryMessage />}
        {paymentMethod === "e-Money" && (
          <EMoneyForm isEmptyCart={isEmptyCart} />
        )}
      </form>
    </section>
  );
}
