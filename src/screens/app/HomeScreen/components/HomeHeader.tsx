import React from "react";
import { useAppSafeArea } from "../../../../hooks/useAppSafeArea";
import { View } from "react-native";
import { Text } from "../../../../components/Text/Text";
import { Button } from "../../../../components/Button/Button";

interface Props {
  username: string | undefined;
  signOut: () => void;
}

export function HomeHeader({ username, signOut }: Props) {
  const { top } = useAppSafeArea();

  return (
    <View
      className="flex-row justify-between items-center px-6 pb-6"
      style={{ paddingTop: top }}
    >
      <Text preset="paragraphMedium" bold>
        {username}
      </Text>
      <Button title="deslogar" onPress={signOut} />
    </View>
  );
}
