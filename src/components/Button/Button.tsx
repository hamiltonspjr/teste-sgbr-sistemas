import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { buttonPresets } from "./buttonPresets";
import { ActivityIndicator } from "../ActivityIndicator/ActivityIndicator";
import { Text } from "../Text/Text";

export type ButtonPreset = "primary";

export interface ButtonProps extends TouchableOpacityProps, ViewStyle {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  disabled,
  preset = "primary",
  ...props
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? "disabled" : "default"];

  return (
    <TouchableOpacity
      style={{ alignItems: "center" }}
      disabled={disabled || loading}
      className={`h-12 justify-center px-5 rounded-2xl ${buttonPreset.container}`}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphLarge" bold className={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
