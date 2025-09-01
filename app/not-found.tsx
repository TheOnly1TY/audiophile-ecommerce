// import type { Metadata } from "next";
// import "./globals.css";
import Link from "next/link";

// // import Button from "./_ui/Button";

// export const metadata: Metadata = {
//   title: "Not Found",
//   description: "The page you are looking for does not exist.",
// };

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col gap-y-6 items-center min-h-screen">
      <h1 className="text-4xl md:text-[3.5rem] text-white tracking-[1.29px] md:tracking-[2px] leading-10 md:leading-[3.625rem] font-bold uppercase">
        Not Found
      </h1>
      <p className="text-[0.935rem] text-white/50">
        The page you are looking for does not exist.
      </p>
      {/* <Button variant="primary"> */}
      <Link href="/">Go back home</Link>
      {/* </Button> */}
    </div>
  );
}
