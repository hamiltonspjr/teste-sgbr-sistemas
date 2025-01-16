import React from "react";
import { ScreenProps } from "../Screen";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "../../Icon/Icon";
import { colors } from "../../../styles/colors";
import { Text } from "../../Text/Text";

type Props = Pick<ScreenProps, "canGoBack">;

const ICON_SIZE = 20;

export function ScreenHeader({ canGoBack }: Props) {
  const navigation = useNavigation();

  return (
    <View className="flex-row mb-6 justify-between items-center">
      {canGoBack && (
        <TouchableOpacity
          onPress={navigation.goBack}
          className="flex-row items-center"
        >
          <Icon size={ICON_SIZE} name="arrowLeft" color={colors.green[500]} />
          <Text preset="paragraphMedium" className="ml-2">
            Voltar
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
