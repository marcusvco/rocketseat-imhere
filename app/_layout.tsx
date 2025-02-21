import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  )
}
