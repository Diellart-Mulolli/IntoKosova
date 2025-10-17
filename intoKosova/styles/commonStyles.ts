import { StyleSheet } from "react-native";

export const colors = {
  primary: "#2f95dc",
  secondary: "#ccc",
  background: "#ffffff",
  text: "#000000",
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