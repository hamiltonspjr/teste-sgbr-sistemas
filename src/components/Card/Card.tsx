import React from "react";
import { Pressable, View, ViewStyle } from "react-native";
import { Text } from "../Text/Text";

interface Props {
  name: string;
  onPress?: () => void;
}

export function Card({ name, onPress }: Props) {
  return (
    <View>
      {onPress ? (
        <Pressable onPress={onPress} className="items-center">
          <View
            className="bg-white rounded-lg p-4 mb-4 w-96 "
            style={$shadowProps}
          >
            <Text preset="paragraphMedium" className="text-green-500" bold>
              {name}
            </Text>
          </View>
        </Pressable>
      ) : (
        <View className="items-center">
          <View
            className="bg-white rounded-lg p-4 mb-4 w-96 "
            style={$shadowProps}
          >
            <Text preset="paragraphMedium" className="text-green-500" bold>
              {name}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};
