import React from "react";
import {
  StyleSheet,
  Pressable,
  View,
  Modal,
  TouchableOpacity,
  Text,
} from "react-native";
import { ThemedText } from "@/components/themed-text";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useThemeManager } from "@/contexts/ThemeContext";
import { useTheme } from "@react-navigation/native";

export default function SettingsScreen() {
  const colorScheme = useColorScheme();

  const { setTheme } = useThemeManager();
  const { colors } = useTheme(); // <-- KJO ËSHTË THELBËSORE

  const [themeModalVisible, setThemeModalVisible] = React.useState(false);

  const settingsOptions = [
    {
      id: 1,
      title: "Notifications",
      icon: "bell.fill",
      action: () => console.log("Notifications pressed"),
    },
    {
      id: 2,
      title: "Theme",
      icon: "paintpalette.fill",
      action: () => setThemeModalVisible(true),
    },
    {
      id: 3,
      title: "About",
      icon: "info.circle",
      action: () => console.log("About pressed"),
    },
    {
      id: 4,
      title: "Accessibility",
      icon: "accessibility",
      action: () => console.log("Accessibility pressed"),
    },
    {
      id: 5,
      title: "Reset Progress",
      icon: "xmark",
      action: () => console.log("Reset Progress pressed"),
    },
  ];

  const renderOptionCard = (option, index) => {
    return (
      <Animated.View
        key={option.id}
        entering={FadeInDown.delay(index * 100).springify()}
      >
        <Pressable style={styles.optionCard} onPress={option.action}>
          <View style={styles.optionIcon}>
            <IconSymbol
              name={option.icon}
              size={32}
              color={Colors[colorScheme ?? "light"].tint}
            />
          </View>
          <ThemedText style={styles.optionTitle}>{option.title}</ThemedText>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Animated.View entering={FadeInUp.springify()} style={styles.header}>
        <ThemedText style={styles.headerTitle}>Settings</ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Customize your app experience
        </ThemedText>
      </Animated.View>

      <View style={styles.content}>
        {settingsOptions.map((option, index) =>
          renderOptionCard(option, index)
        )}
      </View>

      {/* THEME PICKER MODAL */}
      <Modal
        visible={themeModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setThemeModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}
            >
              Choose Theme
            </Text>

            <TouchableOpacity
              onPress={() => {
                setTheme("light");
                setThemeModalVisible(false);
              }}
            >
              <Text style={{ fontSize: 18, paddingVertical: 10 }}>
                🌞 Light Mode
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setTheme("dark");
                setThemeModalVisible(false);
              }}
            >
              <Text style={{ fontSize: 18, paddingVertical: 10 }}>
                🌙 Dark Mode
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setTheme("system");
                setThemeModalVisible(false);
              }}
            >
              <Text style={{ fontSize: 18, paddingVertical: 10 }}>
                🖥 System Default
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  optionCard: {
    width: "100%",
    marginBottom: 16,
    borderRadius: 12,
    padding: 10,
    backgroundColor: Colors.light.card,
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    marginRight: 16,
    padding: 8,
    backgroundColor: Colors.light.tint + "20",
    borderRadius: 8,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
});
