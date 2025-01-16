import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

import { useBrandList } from "../../../domain/Brand/useCases/useBrandList";
import { useAuthCredentials } from "../../../services/authCredentials/useAuthCredentials";
import { Brand } from "../../../domain/Brand/brandTypes";
import { Card } from "../../../components/Card/Card";
import { useScrollToTop } from "@react-navigation/native";
import { Screen } from "../../../components/Screen/Screen";
import { HomeHeader } from "./components/HomeHeader";
import { HomeEmpty } from "./components/HomeEmpty";
import { Text } from "../../../components/Text/Text";

export function HomeScreen() {
  const { user, removeCredentials } = useAuthCredentials();
  const { list, isError, isLoading, refresh } = useBrandList();

  function goToModelScreen() {
    // TODO: implementar
  }

  function renderItem({ item }: ListRenderItemInfo<Brand>) {
    return <Card name={item.name} onPress={goToModelScreen} />;
  }
  const flatListRef = React.useRef<FlatList<Brand>>(null);
  useScrollToTop(flatListRef);

  return (
    <Screen>
      <FlatList
        data={list}
        ref={flatListRef}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
        refreshing={isLoading}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        contentContainerStyle={{ flex: list.length === 0 ? 1 : undefined }}
        ListHeaderComponent={
          <View className="justify-center">
            <HomeHeader username={user?.name} signOut={removeCredentials} />
            <Text className="mb-6 text-center" preset="paragraphMedium">
              Clique em uma marca para conhecer os carros dela
            </Text>
          </View>
        }
        ListEmptyComponent={
          <HomeEmpty loading={isLoading} error={isError} refetch={refresh} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
