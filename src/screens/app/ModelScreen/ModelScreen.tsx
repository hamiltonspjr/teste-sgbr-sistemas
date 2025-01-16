import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  View,
} from "react-native";
import { Screen } from "../../../components/Screen/Screen";
import { AppScreenProps } from "../../../routes/navigationTypes";
import { useCarList } from "../../../domain/ListCar/useCases/useCarList";

import { CarType } from "../../../domain/ListCar/carListTypes";
import { useScrollToTop } from "@react-navigation/native";
import { Card } from "../../../components/Card/Card";
import { ModelEmpty } from "./components/ModelEmpty";
import { Text } from "../../../components/Text/Text";

export function ModelScreen({ route }: AppScreenProps<"ModelScreen">) {
  const { list, isError, isLoading, refresh } = useCarList(
    route.params.idBrand
  );
  function renderItem({ item }: ListRenderItemInfo<CarType>) {
    return <Card name={item.name} />;
  }

  const flatListRef = React.useRef<FlatList<CarType>>(null);
  useScrollToTop(flatListRef);
  return (
    <Screen canGoBack>
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
          <View>
            <Text className="mb-6 text-center" preset="paragraphMedium">
              Lista de modelos da marca selecionada
            </Text>
          </View>
        }
        ListEmptyComponent={
          <ModelEmpty refetch={refresh} error={isError} loading={isLoading} />
        }
      />
    </Screen>
  );
}
