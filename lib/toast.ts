import { toast } from "react-hot-toast";

export function successToast({ message }: { message: string }) {
  return toast.success(message, {
    position: "top-center",
    style: {
      background: "pink",
      color: "white",
      fontWeight: "bold",
    },

    icon: "👏",
  });
}

export function warningToast({ message }: { message: string }) {
  return toast.success(message, {
    position: "top-center",
    style: {
      background: "#ffde21",
      color: "white",
      fontWeight: "bold",
    },

    icon: "👏",
  });
}
