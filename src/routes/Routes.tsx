import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export function Router() {
  const authCredentials = false;
  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
