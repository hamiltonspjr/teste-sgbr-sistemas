import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useAuthCredentials } from "../services/authCredentials/useAuthCredentials";
import { View } from "react-native";
import { ActivityIndicator } from "../components/ActivityIndicator/ActivityIndicator";

export function Router() {
  const { user, isLoading } = useAuthCredentials();

  if (isLoading) {
    return (
      <View className="flex-1 gb-white justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
