import React from "react";
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from "react-native";

interface Props extends ActivityIndicatorProps {
  className?: string;
}

export function ActivityIndicator({ className, ...props }: Props) {
  return <RNActivityIndicator className={className} {...props} />;
}
