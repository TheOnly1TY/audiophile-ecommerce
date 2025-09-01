import { Slide } from "react-toastify";

export const toastProperties: ToastTransitionProps = {
  position: "top-left",
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
