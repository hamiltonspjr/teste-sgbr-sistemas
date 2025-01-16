import React from "react";
import { ScrollView, View } from "react-native";

interface Props {
  children: React.ReactNode;
  className: string;
}

export function ScrollViewContainer({ children, className }: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      className={`flex-1 ${className}`}
    >
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children, className }: Props) {
  return <View className={`flex-1 ${className}`}>{children}</View>;
}
