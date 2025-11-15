import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme as useDeviceColorScheme } from "react-native";

type ThemeType = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colorScheme: "light" | "dark";
  colors: {
    light: Palette;
    dark: Palette;
  };
}

interface Palette {
  text: string;
  textSecondary: string;
  background: string;
  card: string;
  primary: string;
  accent: string;
  highlight: string;
  secondary: string;
  lightBlue: string;
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

  // 🔥 Your full palette for both modes
  const lightColors: Palette = {
    text: "#000",
    textSecondary: "#555",
    background: "#fff",
    card: "#f2f2f2",
    primary: "#007AFF",
    accent: "#FF4500",
    highlight: "#FFA500",
    secondary: "#805AD5",
    lightBlue: "#BEE3F8",
  };

  const darkColors: Palette = {
    text: "#fff",
    textSecondary: "#aaa",
    background: "#000",
    card: "#111",
    primary: "#1E90FF",
    accent: "#FF6347",
    highlight: "#FFD700",
    secondary: "#B794F4",
    lightBlue: "#2A4365",
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        colorScheme,
        colors: {
          light: lightColors,
          dark: darkColors,
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeManager = () => useContext(ThemeContext)!;
