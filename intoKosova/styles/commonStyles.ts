import { StyleSheet } from "react-native";

// constants/theme.ts
export const colors = {
  light: {
    background: "#ffffff",
    text: "#000000",
    textSecondary: "#A1A1AA",
    primary: "#3182CE",
    secondary: "#D97706",      // fixed duplicate key
    accent: "#38A169",
    highlight: "#F472B6",
    lightBlue: "#93C5FD",

    // 20 % opacity (hex “33” = 20 %)
    primaryTranslucent: "#3182CE33",
    accentTranslucent: "#38A16933",
    secondaryTranslucent: "#D9770633",
    highlightTranslucent: "#F472B633",

    // UI surface colours
    card: "#F5F5F5",
    tint: "#3182CE",
  },

  dark: {
    background: "#1A1A1A",
    text: "#FFFFFF",
    textSecondary: "#A1A1AA",
    primary: "#3182CE",
    secondary: "#D97706",
    accent: "#38A169",
    highlight: "#F472B6",
    lightBlue: "#93C5FD",

    // same 20 % opacity for dark mode (works on dark backgrounds)
    primaryTranslucent: "#3182CE33",
    accentTranslucent: "#38A16933",
    secondaryTranslucent: "#D9770633",
    highlightTranslucent: "#F472B633",

    // Dark-mode surface colours
    card: "#2D2D2D",
    tint: "#3182CE",
  },
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});