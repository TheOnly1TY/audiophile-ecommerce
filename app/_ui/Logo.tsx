import Image from "next/image";
import logo from "@/public/shared/desktop/logo.svg";

export default function Logo({ hidden }: { hidden: string }) {
  return (
    <div
      className={`${hidden === "tablet" && "md:hidden lg:block"} ${
        hidden === "mobile/desktop" && "hidden md:block lg:hidden"
      }`}
    >
      <Image src={logo} width={143} height={25} alt="logo" />
    </div>
  );
}
