import About from "@/app/_components/About";
import CategoryList from "@/app/_components/CategoryList";

import Button from "@/app/_ui/Button";
// import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/app/_libs/data-service";
import Link from "next/link";

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
                <h3 className="text-sm text-brand-orange tracking-[10px] uppercase mb-6 md:mb-4">
                  new product
                </h3>
              )}
              <h2 className="text-[2.5rem] leading-[44px] tracking-[1.43px] font-bold uppercase">
                {categoryProduct.name}
              </h2>

              <p className="text-[15px] leading-[25px] text-black/50 font-medium my-6 md:mt-8 md:mb-6 lg:my-8">
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
            {/* className="relative w-full lg:h-[560px] md:h-[352px]" */}

            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={categoryProduct.categoryImage.mobile}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={categoryProduct.categoryImage.tablet}
              />
              <img
                src={categoryProduct.categoryImage.desktop}
                alt="product"
                className="lg:max-w-[540px] pb-12 md:pb-[52px] lg:mb-0"
              />
            </picture>
          </li>
        ))}
      </ul>
      <section className="max-w-[1110px] grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-[10px] lg:gap-x-[1.895rem] px-6 md:px-0 my-36 md:mx-10 mx-auto lg:mx-auto">
        <CategoryList />
      </section>
      <About />
    </main>
  );
}
