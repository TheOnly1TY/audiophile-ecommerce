import { Slide, ToastPosition } from "react-toastify";

export const toastProperties = {
  position: "top-left" as ToastPosition,
  autoClose: 2000,
  closeButton: false,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: "light",
  transition: Slide,
};

export default function formatProductName(word: string): string {
  const name = word.toUpperCase();
  const unwanted = ["HEADPHONES", "SPEAKERS", "EARPHONES"];
  const romanNumerals = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  const words = name.split(" ");

  // Remove unwanted words
  let filtered = words.filter((word) => !unwanted.includes(word));

  // Replace "MARK" with "MK"
  filtered = filtered.map((word) => (word === "MARK" ? "MK" : word));

  // Find roman numeral if present
  const roman = filtered.find((word) => romanNumerals.includes(word));

  // If "MARK" or roman numeral present, return all except unwanted
  if (filtered.includes("MK") || roman) {
    return filtered.join(" ");
  }

  // Otherwise, return the first word
  return filtered[0];
}
