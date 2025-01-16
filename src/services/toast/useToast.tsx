import { ToastService } from "./toastTypes";
import { useToastContext } from "./useToastContext";

export function useToast(): ToastService["toast"] {
  const toast = useToastContext();
  return toast.toast;
}

export function useToastService(): Pick<
  ToastService,
  "hideToast" | "showToast"
> {
  const { showToast, hideToast } = useToastContext();

  return {
    showToast,
    hideToast,
  };
}
