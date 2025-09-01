import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductsBySlug } from "@/app/_libs/data-service";
import CategoryList from "@/app/_components/CategoryList";
import BackButton from "@/app/_ui/BackButton";
import About from "@/app/_components/About";
import Button from "@/app/_ui/Button";
import ProductCartControls from "@/app/_ui/ProductCartControls";

export async function generateMetadata({ params }) {
  const { categoryId } = await params;
  const product = await getProductsBySlug(categoryId);
  const productName = product.name;

  return { title: productName };
}

export default async function page({ params }) {
  const { categoryId } = await params;
  const product = await getProductsBySlug(categoryId);
  // if (!product) throw new Error("Product Not Found");
  if (!product) {
    notFound();
  }
  const {
    id,
    name,
    image,
    new: isProductNew,
    price,
    description,
    features: productFeatures,
    includes: additionalItems,
    gallery,
    others: recommendedProducts,
  } = product;

  const cartProductData = { id, name, image, price };

  return (
    <>
      <section className="max-w-[1110px] mx-auto">
        <div className=" pt-28 lg:pt-36 px-6 md:px-0 md:mx-10 lg:mx-0">
          <BackButton />
          <div className="flex flex-col md:flex-row justify-between items-center md:gap-[69px] lg:gap-0 mb-24 lg:mb-36">
            <div>
              <picture>
                <source media="(max-width: 767px)" srcSet={image.mobile} />
                <source media="(max-width: 1023px)" srcSet={image.tablet} />
                <img
                  src={image.desktop}
                  alt="product"
                  className="lg:max-w-[540px] lg:max-h-[560px] rounded-lg"
                />
              </picture>
            </div>
            <div className="md:max-w-[339.5px] lg:max-w-[445.5px]">
              {isProductNew && (
                <h5 className="text-sm text-brand-orange tracking-[10px] uppercase mt-8">
                  new product
                </h5>
              )}
              <h1 className="text-[2.5rem] leading-[44px] tracking-[1.43px] font-bold uppercase mt-8 md:mt-4">
                {name}
              </h1>
              <p className="text-[15px] leading-[25px] text-black/50 font-medium my-8 md:mt-8 md:mb-6 lg:my-8">
                {description}
              </p>
              <p className="text-sm text-black tracking-[1.29px] font-bold mb-8">
                ${price.toLocaleString()}
              </p>
              <ProductCartControls cartProductData={cartProductData} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mb-24 lg:mb-36">
            <div className="lg:max-w-[635px] mb-24 lg:mb-0">
              <h2 className="text-[2rem] leading-9 tracking-[1.14px] text-black font-bold uppercase mb-6 md:mb-8">
                features
              </h2>
              <p className="text-[15px] leading-[25px] text-black/50 font-medium">
                {productFeatures.split("\n\n").map((feature, id) => (
                  <span key={id} className="list-none">
                    {feature}
                    <br />
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <aside className="flex flex-col md:flex-row justify-start md:justify-between lg:justify-start lg:gap-x-0 lg:flex-col">
              <h2 className="text-[2rem] leading-9 tracking-[1.14px] text-black font-bold uppercase mb-6 md:mb-0 lg:mb-8">
                in the box
              </h2>
              <ul className="flex flex-col gap-2">
                {additionalItems.map((item, id) => (
                  <li
                    key={id}
                    className="text-[15px] leading-[25px] text-black/50 font-medium pr-4"
                  >
                    <span className="text-brand-orange pr-4">
                      {item.quantity}x
                    </span>
                    {item.item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          <section className="flex flex-col md:flex-row justify-center lg:justify-between items-center gap-y-[20px] md:gap-x-[18px] lg:gap-y-0 mb-24 lg:mb-36">
            <div className="flex flex-col gap-y-[20px] lg:gap-y-[32px]">
              <img
                src={gallery.first.tablet}
                alt="first gallery"
                className="rounded-lg"
              />
              <img
                src={gallery.second.tablet}
                alt="second gallery"
                className="rounded-lg"
              />
            </div>
            <div>
              <img
                src={gallery.third.tablet}
                alt="third gallery"
                className="rounded-lg"
              />
            </div>
          </section>
          <section>
            <h2 className="text-[2rem] leading-9 tracking-[1.14px] text-black text-center font-bold uppercase mb-10 md:mb-14 lg:mb-16">
              you may also like
            </h2>
            <ul className="flex flex-col md:flex-row justify-between items-center gap-y-14 md:gap-x-[11px]">
              {recommendedProducts.map((product, id) => (
                <li key={id} className="flex flex-col items-center gap-y-8">
                  <img
                    src={product.image.desktop}
                    className="w-full lg:max-w-[350px] rounded-lg"
                  />

                  <h3 className="text-2xl text-black tracking-[1.71px] font-bold">
                    {product.name}
                  </h3>
                  <Link href={`${product.slug}`}>
                    <Button>See Product</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <section className="max-w-[1110px] grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-[10px] lg:gap-x-[1.895rem] px-6 md:px-0 my-36 md:mx-10 mx-auto lg:mx-auto">
          <CategoryList />
        </section>
        <About />
      </section>
    </>
  );
}
