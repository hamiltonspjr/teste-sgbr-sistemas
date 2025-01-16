import React from "react";
import { KeyboardAvoidingView, Platform, View, ViewStyle } from "react-native";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";
import {
  ScrollViewContainer,
  ViewContainer,
} from "./components/ScreenContainer";
import { ScreenHeader } from "./components/ScreenHeader";

export interface ScreenProps extends ViewStyle {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,

  ...viewStyleProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      className="flex flex-1"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container className="bg-white">
        <View
          className="px-6"
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom,
            },
          ]}
          {...viewStyleProps}
        >
          <ScreenHeader canGoBack={canGoBack} />
          {children}
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}
