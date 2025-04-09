import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <Stack screenOptions={{ headerShown: false}} />
      </SafeAreaView>
    </SafeAreaProvider>
  );   
}
