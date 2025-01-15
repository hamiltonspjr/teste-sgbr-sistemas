import React, { useRef } from "react";

import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { $fontFamily, $fontSizes, Text } from "../Text/Text";
import { colors } from "../../styles/colors";

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactNode;
  className?: string;
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  className,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <View className={className}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" className="mb-1">
          {label}
        </Text>
        <View
          className={`flex-row ${errorMessage ? "border-2" : "border"} p-4 ${
            errorMessage ? "border-red-500" : "border-gray-200"
          } rounded-xl`}
        >
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray[400]}
            className={`p-0 grow shrink ${[
              $fontFamily.regular,
              $fontSizes.paragraphMedium,
            ]}`}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <View className="justify-center ml-4">{RightComponent}</View>
          )}
        </View>
        {errorMessage && (
          <Text preset="paragraphSmall" bold className="text-red-500">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
