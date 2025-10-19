import { StyleSheet } from "react-native";

export const colors = {
  background: "#ffffff",
  text: "#000000",
  textSecondary: '#A1A1AA',
  primary: '#3182CE',
  secondary: "#ccc",
  accent: '#38A169',
  secondary: '#D97706',
  highlight: '#F472B6',
  lightBlue: '#93C5FD',
  primaryTranslucent: '#3182CE33', // 20% opacity
  accentTranslucent: '#38A16933', // 20% opacity
  secondaryTranslucent: '#D9770633', // 20% opacity
  highlightTranslucent: '#F472B633', // 20% opacity
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