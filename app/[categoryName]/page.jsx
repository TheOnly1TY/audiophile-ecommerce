import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductsByCategory } from "@/app/_libs/data-service";
import Button from "@/app/_ui/Button";
import About from "@/app/_components/About";
import CategoryNameImage from "@/app/_components/CategoryNameImage";
import CategoryList from "@/app/_components/CategoryList";

export async function generateMetadata({ params }) {
  const { categoryName: selectedCategory } = await params;
  const CategoryName = selectedCategory.replace(/^./, (char) =>
    char.toUpperCase()
  );

  return { title: CategoryName };
}
export default async function page({ params }) {
  const { categoryName: selectedCategory } = await params;
  const Data = await getProductsByCategory(selectedCategory);
  if (Data.length === 0) {
    notFound();
  }

  const getCategoryName = Data?.map((item) => item.category);
  const sortedProducts = Data?.reverse();

  return (
    <main>
      <div className="flex bg-black pt-[82px]  items-center justify-center h-[50vh]">
        <h1 className="text-[1.75rem] tracking-[2px] md:text-[2.5rem] md:tracking-[1.43px] md:leading-[44px] text-white font-bold uppercase">
          {getCategoryName[0]}
        </h1>
      </div>
      <div className="lg:px-6">
        <ul className="max-w-[1110px] mx-auto px-6 md:px-0 md:mx-10 lg:mx-auto">
          {sortedProducts?.map((categoryProduct, id) => (
            <li
              key={categoryProduct.id}
              className={`flex flex-col-reverse lg:justify-between ${
                ++id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center mt-36 `}
            >
              <div className="lg:w-[445px] md:w-[572px] text-center lg:text-left">
                {categoryProduct.new && (
                  <h2 className="text-sm text-brand-orange tracking-[10px] uppercase mb-6 md:mb-4">
                    new product
                  </h2>
                )}
                <h3 className="text-[2.5rem] leading-[44px] tracking-[1.43px] font-bold uppercase">
                  {categoryProduct.name}
                </h3>

                <p className="text-[15px] leading-[25px] text-gray-700 font-medium my-6 md:mt-8 md:mb-6 lg:my-8">
                  {categoryProduct.description}
                </p>
                <Link
                  href={`/${categoryProduct.category.toLowerCase()}/${String(
                    categoryProduct.slug
                  )}`}
                >
                  <Button variant="primary">See product</Button>
                </Link>
              </div>
              <CategoryNameImage
                id={id}
                categoryImage={categoryProduct.categoryImage}
              />
            </li>
          ))}
        </ul>
      </div>
      <section className="lg:px-6">
        <div className="max-w-[1110px] grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-[10px] lg:gap-x-[1.895rem] px-6 md:px-0 my-36 md:mx-10 mx-auto lg:mx-auto">
          <CategoryList />
        </div>
        <About />
      </section>
    </main>
  );
}
