import EmptyCart from "@/app/_components/EmptyCart";

export default function Cart({ onCartOpen }: { onCartOpen: () => void }) {
  return (
    <div className="relative max-w-[69.375rem] mx-auto lg:mx-auto flex flex-col items-center md:items-end md:mx-10">
      <div className="fixed top-[7.5rem] md:w-[377px] flex flex-col bg-white z-50 shadow-lg rounded-lg p-6 mx-6 md:mx-0">
        <EmptyCart onCartOpen={onCartOpen} />
      </div>
    </div>
  );
}
