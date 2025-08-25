import { ButtonProps } from "@/app/types/Types";

export default function Button({
  children,
  variant = "primary",
  action,
}: ButtonProps) {
  return (
    <button
      onClick={action}
      className={`w-40 h-12 
        ${
          variant === "primary" &&
          " bg-brand-orange text-white hover:bg-brand-peach"
        }
        ${
          variant === "secondary" &&
          "bg-transparent border border-black text-black hover:bg-black hover:text-white"
        }
        ${variant === "tertiary" && "bg-black text-white hover:bg-[#4C4C4C]"}

        text-[0.8125rem] tracking-[1px] font-bold uppercase transition-all duration-300 ease-in-out cursor-pointer`}
    >
      {children}
    </button>
  );
}
