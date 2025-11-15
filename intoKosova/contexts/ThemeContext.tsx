import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme as useDeviceColorScheme } from "react-native";

type ThemeType = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colorScheme: "light" | "dark";
  colors: {
    text: string;
    textSecondary: string;
    background: string;
    card: string;
    primary: string;
    accent: string;
    highlight: string;
  };
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({ children }: any) => {
  const deviceScheme = useDeviceColorScheme();
  const [theme, setThemeState] = useState<ThemeType>("system");

  const setTheme = async (t: ThemeType) => {
    setThemeState(t);
    await AsyncStorage.setItem("APP_THEME", t);
  };

  useEffect(() => {
    AsyncStorage.getItem("APP_THEME").then((savedTheme) => {
      if (savedTheme) setThemeState(savedTheme as ThemeType);
    });
  }, []);

  const colorScheme: "light" | "dark" =
    theme === "system" ? deviceScheme : theme;

  // Ngjyrat globale për gjithë aplikacionin
  const colors = {
    text: colorScheme === "dark" ? "#fff" : "#000",
    textSecondary: colorScheme === "dark" ? "#aaa" : "#555",
    background: colorScheme === "dark" ? "#000" : "#fff",
    card: colorScheme === "dark" ? "#111" : "#fff",
    primary: colorScheme === "dark" ? "#1E90FF" : "#007AFF",
    accent: colorScheme === "dark" ? "#FF6347" : "#FF4500",
    highlight: colorScheme === "dark" ? "#FFD700" : "#FFA500",
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorScheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeManager = () => useContext(ThemeContext)!;
