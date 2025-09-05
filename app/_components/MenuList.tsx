import { useCart } from "@/app/_contexts/CartContext";
import CategoryList from "@/app/_components/CategoryList";

export default function MenuList() {
  const { isNavOpen } = useCart();
  return (
    <>
      <div
        className={`absolute w-full top-[90px] bg-white
            grid grid-cols-1 md:grid-cols-3
             h-[calc(100vh_-90px)] md:h-auto
            overflow-y-scroll md:overflow-y-auto
            py-20 gap-y-16 md:gap-x-[10px] z-50 p-6 rounded-b-lg ${
              isNavOpen ? "left-0" : "-left-full"
            } transition-all duration-300 ease-in-out lg:hidden`}
      >
        <CategoryList />
      </div>
    </>
  );
}
