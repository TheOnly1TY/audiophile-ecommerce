import About from "@/app/_components/About";
import HeroSection from "@/app/_components/HeroSection";
import CategoryList from "@/app/_components/CategoryList";
import HomepageProductList from "@/app/_components/HomepageProductList";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="max-w-[1110px] grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-[10px] lg:gap-x-[1.895rem] px-6 md:px-0 my-36 md:mx-10 mx-auto lg:mx-auto">
        <CategoryList />
      </section>
      <HomepageProductList />
      <About />
    </main>
  );
}
