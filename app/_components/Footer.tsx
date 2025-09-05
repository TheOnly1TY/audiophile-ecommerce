import Logo from "@/app/_ui/Logo";
import Navigation from "@/app/_components/Navigation";

export default function Footer() {
  const date = new Date();
  const getYear = date.getFullYear();
  return (
    <footer className="bg-neutral-charcoal mt-36 lg:px-6">
      <div className="max-w-[1110px] mx-auto px-6 md:px-0 lg:mx-auto md:mx-10 py-14 md:py-16">
        <div className="flex flex-col items-center md:items-start gap-y-8 md:gap-y-6 lg:flex-row lg:justify-between lg:items-center">
          <Logo animation={false} priority={false} />
          <Navigation animation={false} isHidden={false} />
        </div>
        <p className="text-[0.9375rem] text-white/50 leading-[25px] font-medium lg:max-w-[540px] text-center md:text-left mt-6 mb-12">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-y-0 md:pt-6 lg:pt-0">
          <p className="text-[0.9375rem] text-white/50 leading-[25px] font-medium">
            Copyright {getYear}. All Rights Reserved
          </p>
          <div className="flex lg:-mt-36 gap-3">
            {/* LINK TO FACEBOOK PAGE (ICON) */}

            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                fill="#FFF"
                fillRule="nonzero"
                className="hover:fill-brand-orange transition-all duration-300 ease-in-out cursor-pointer"
              />
            </svg>

            {/* LINK TO X(TWITTER) PAGE (ICON) */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                className="hover:fill-brand-orange transition-all duration-300 ease-in-out cursor-pointer"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path>
                </g>
              </g>
            </svg>

            {/* LINK TO INSTAGRAM PAGE (ICON) */}

            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                fill="#FFF"
                fillRule="nonzero"
                className="hover:fill-brand-orange transition-all duration-300 ease-in-out cursor-pointer"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
