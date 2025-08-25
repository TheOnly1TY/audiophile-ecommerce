"use client";

export default function Navigation({ isHidden }: { isHidden?: boolean }) {
  const navLinks = [
    { label: "Home" },
    { label: "Headphones" },
    { label: "Speakers" },
    { label: "Earphones" },
  ];

  return (
    <ul
      className={`${
        isHidden ? "hidden" : "flex flex-col items-center md:flex-row"
      } lg:flex gap-8 lg:gap-x-8`}
    >
      {navLinks.map((navitem, id) => (
        <li
          className="text-[0.8125rem] text-white tracking-[2px] leading-[25px] font-bold uppercase
           transition-all duration-300 ease-in-out hover:text-brand-orange cursor-pointer"
          key={id}
        >
          {navitem.label}
        </li>
      ))}
    </ul>
  );
}
