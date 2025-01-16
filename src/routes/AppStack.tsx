import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "../screens/app/HomeScreen/HomeScreen";
import { ModelScreen } from "../screens/app/ModelScreen/ModelScreen";

export type AppStackParamList = {
  HomeScreen: undefined;
  ModelScreen: {
    idBrand: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ModelScreen" component={ModelScreen} />
    </Stack.Navigator>
  );
}
