import CategoryList from "./CategoryList";

export default function MenuList({ isNavOpen }: { isNavOpen: boolean }) {
  return (
    <>
      <div
        className={`absolute top-[90px] bg-white
            grid grid-cols-1 md:grid-cols-3
            w-full h-[calc(100vh_-90px)] md:h-auto
            overflow-y-scroll md:overflow-y-auto
            py-20 gap-y-16 md:gap-x-[10px] z-10 p-6 rounded-b-lg ${
              isNavOpen ? "left-0" : "-left-full"
            } transition-all duration-300 ease-in-out lg:hidden`}
      >
        <CategoryList />
      </div>
    </>
  );
}
