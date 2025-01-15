import React from "react";
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon";
import { EyeOnIcon } from "../../assets/icons/EyeOnIcon";
import { EyeOffIcon } from "../../assets/icons/EyeOffIcon";
import { Pressable } from "react-native";

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
  onPress?: () => void;
}

export function Icon({ name, color = "text-black", size, onPress }: IconProps) {
  const SVGIcon = iconRegistry[name];
  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={color} size={size} />
      </Pressable>
    );
  }
  return <SVGIcon color={color} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};
type IconType = typeof iconRegistry;
type IconName = keyof IconType;
