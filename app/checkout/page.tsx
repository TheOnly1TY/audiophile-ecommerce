import BackButton from "@/app/_ui/BackButton";
import CheckoutForm from "@/app/_components/CheckoutForm";
import Summary from "@/app/_components/Summary";

export const metadata = {
  title: "Checkout",
  description:
    "Secure checkout for Audiophile. Review your cart, enter shipping details, and complete your purchase of premium audio products with confidence.",
};

export default function Checkout() {
  return (
    <section className="page-bg-neutral min-h-screen px-6">
      <div className="max-w-[1110px] mx-auto pt-36 px-6 md:px-0 md:mx-10 lg:mx-auto">
        <BackButton />
        <div className="flex flex-col justify-center items-start lg:flex-row gap-[30px]">
          <CheckoutForm />
          <Summary />
        </div>
      </div>
    </section>
  );
}
