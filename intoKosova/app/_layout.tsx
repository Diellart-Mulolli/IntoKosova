// app/_layout.tsx
import { Stack } from "expo-router";
import { ThemeProvider, useThemeManager } from "../contexts/ThemeContext";
import {
  ThemeProvider as NavigationThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <MainNavigation />
    </ThemeProvider>
  );
}

function MainNavigation() {
  const { colorScheme } = useThemeManager();

  const navigationTheme = {
    ...(colorScheme === "dark" ? DarkTheme : DefaultTheme),
    colors: {
      ...(colorScheme === "dark" ? DarkTheme.colors : DefaultTheme.colors),
      background: colorScheme === "dark" ? "#000" : "#fff",
      card: colorScheme === "dark" ? "#111" : "#fff",
      text: colorScheme === "dark" ? "#fff" : "#000",
      primary: colorScheme === "dark" ? "#1E90FF" : "#007AFF",
      border: colorScheme === "dark" ? "#222" : "#ccc",
    },
  };

  return (
    <NavigationThemeProvider value={navigationTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </NavigationThemeProvider>
  );
}
