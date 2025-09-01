import { useCheckoutForm } from "../_contexts/FormContext";

export default function EMoneyForm({ isEmptyCart }: { isEmptyCart: boolean }) {
  const {
    register,

    watch,

    formState: { errors },
  } = useCheckoutForm();

  const paymentMethod = watch("paymentMethod");

  if (paymentMethod === "cash-on-delivery") return;
  return (
    <div className="grid md:grid-cols-2 md:gap-6 mt-8">
      <div>
        <label htmlFor="emoney-number" className="styled-label justify-between">
          e-Money Number
          {errors.eMoneyNumber && (
            <span className="text-xs text-error-red">
              {errors.eMoneyNumber.message}
            </span>
          )}
        </label>
        <input
          type="number"
          name="eMoneyNumber"
          {...register("eMoneyNumber", {
            required: "This field is required",
          })}
          disabled={isEmptyCart}
          id="eMoneyNumber"
          placeholder="238521993"
          className={`styled-input lg:max-w-[19.3125rem] ${
            errors.eMoneyNumber
              ? "border-error-red"
              : "focus:border-brand-orange"
          }`}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="emoney-pin" className="styled-label justify-between">
          e-Money Pin
          {errors.eMoneyPin && (
            <span className="text-xs text-error-red">
              {errors.eMoneyPin.message}
            </span>
          )}
        </label>
        <input
          type="number"
          name="eMoneyPin"
          id="eMoneyPin"
          {...register("eMoneyPin", {
            required: "This field is required",
          })}
          disabled={isEmptyCart}
          placeholder="6891"
          className={`styled-input lg:max-w-[19.3125rem] ${
            errors.eMoneyPin ? "border-error-red" : "focus:border-brand-orange"
          }`}
        />
      </div>
    </div>
  );
}
