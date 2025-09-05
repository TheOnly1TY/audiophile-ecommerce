import Image from "next/image";

export default function CashOnDeliveryMessage() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
      <Image
        src="/checkout/icon-cash-on-delivery.svg"
        width={48}
        height={48}
        alt="cash on delivery"
      />
      <p className="text-[0.9365rem] leading-[25px] text-gray-700 font-medium">
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
}
