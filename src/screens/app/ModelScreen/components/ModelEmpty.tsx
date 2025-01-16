import React from "react";
import { Text } from "../../../../components/Text/Text";
import { ActivityIndicator } from "../../../../components/ActivityIndicator/ActivityIndicator";
import { Button } from "../../../../components/Button/Button";
import { View } from "react-native";

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function ModelEmpty({ loading, error, refetch }: Props) {
  let component = null;
  if (loading) {
    component = <ActivityIndicator />;
  }

  if (error) {
    component = (
      <>
        <Text preset="paragraphMedium" bold className="m-4">
          Não foi possível carregar os dados 😥
        </Text>
        <Button title="recarregar" onPress={refetch} />
      </>
    );
  }

  return (
    <View className="flex-1 items-center justify-center">{component}</View>
  );
}
