import React from "react";
import {
  Text as TextRN,
  TextProps as TextPropsRN,
  TextStyle,
} from "react-native";

import { fontFamily } from "../../styles/fontFamily";

export interface TextProps extends TextPropsRN {
  preset?: TextVariants;
  bold?: boolean;
  className?: string;
}

export function Text({
  children,
  preset = "paragraphMedium",
  bold,
  className,
  ...textPropsRN
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold);
  return (
    <TextRN
      className={className}
      style={[$fontSizes[preset], { fontFamily }]}
      {...textPropsRN}
    >
      {children}
    </TextRN>
  );
}

type TextVariants =
  | "headingLarge"
  | "paragraphLarge"
  | "paragraphMedium"
  | "paragraphSmall";

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },
};

export const $fontFamily = {
  regular: fontFamily.regular,
  bold: fontFamily.bold,
};

function getFontFamily(preset: TextVariants, bold?: boolean) {
  if (preset === "headingLarge") {
    return $fontFamily.bold;
  }

  switch (true) {
    case bold:
      return $fontFamily.bold;
    default:
      return $fontFamily.regular;
  }
}
