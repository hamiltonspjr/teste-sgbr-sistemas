import React from "react";
import { Dimensions, View, ViewStyle } from "react-native";
import { Toast, ToastType } from "../../../services/toast/toastTypes";
import { Icon, IconProps } from "../../Icon/Icon";
import { colors } from "../../../styles/colors";
import { Text } from "../../Text/Text";

const MAX_WIDTH = Dimensions.get("screen").width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({ toast }: Props) {
  const type: ToastType = toast.type || "success";

  return (
    <View
      className="bg-white p-4 flex-row items-center rounded-2xl opacity-95"
      style={[{ maxWidth: MAX_WIDTH }, $shadowProps]}
    >
      <Icon {...mapTypeToIcon[type]} />
      <Text className="shrink ml-4" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </View>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: colors.green[300],
    name: "checkRound",
  },
  error: {
    color: colors.red[500],
    name: "errorRound",
  },
};

const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};
