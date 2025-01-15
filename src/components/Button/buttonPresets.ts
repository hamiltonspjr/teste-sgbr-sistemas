import { ButtonPreset } from "./Button";

interface ButtonUI {
  container: string;
  content: string;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: "bg-green-500",
      content: "text-white",
    },
    disabled: {
      container: "bg-gray-200",
      content: "text-gray-400",
    },
  },
};
