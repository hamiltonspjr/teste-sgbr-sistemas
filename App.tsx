import "./src/styles/global.css";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Router } from "./src/routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initializeStorage } from "./src/services/storage/storage";
import { asyncStorage } from "./src/services/storage/implementation/asyncStorage";
import { AuthCredentialsProvider } from "./src/services/authCredentials/Providers/AuthCredentialsProvider";
import { ToastProvider } from "./src/services/toast/Providers/ToastProvider";
import { Toast } from "./src/components/Toast/Toast";

const queryClient = new QueryClient();

initializeStorage(asyncStorage);

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ToastProvider>
            <Router />
            <Toast />
          </ToastProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}
