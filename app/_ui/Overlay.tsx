import { OverlayProps } from "../types/Types";

export default function Overlay({ isHidden, action, index }: OverlayProps) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${
        isHidden ? "lg:hidden" : ""
      } z-${index} `}
      role="overlay"
      onClick={action}
    ></div>
  );
}
