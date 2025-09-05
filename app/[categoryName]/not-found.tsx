import Image from "next/image";
import Link from "next/link";
import Button from "../_ui/Button";

export default function notFound() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center mt-20 mx-6 md:mx-10 lg:mx-0">
      <Image
        src="/shared/desktop/error.png"
        alt="404 Not Found"
        width={400}
        height={250}
        className="mb-4"
      />
      <h2 className="text-3xl md:text-[3.5rem] leading-10 md:leading-[3.625rem] font-bold uppercase">
        page not found!
      </h2>
      <h3 className="text-[0.9375rem] leading-[25px] text-gray-700 mb-8">
        Don&apos;t worry, sometime it happens even for best of us
      </h3>
      <Link href="/">
        <Button>back to homepage</Button>
      </Link>
    </section>
  );
}
