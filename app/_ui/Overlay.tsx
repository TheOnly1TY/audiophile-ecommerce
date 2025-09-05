import { AnimatePresence, motion } from "framer-motion";
import { OverlayProps } from "@/app/_types/Types";

export default function Overlay({ isHidden, action, index }: OverlayProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${
          isHidden ? "lg:hidden" : ""
        } z-${index} `}
        role="overlay"
        onClick={action}
      ></motion.div>
    </AnimatePresence>
  );
}
