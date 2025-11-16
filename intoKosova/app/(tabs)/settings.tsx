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

  // Nga React Navigation Theme
  const { dark: isDark, colors } = useTheme();

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
        <Pressable
          style={[
            styles.optionCard,
            {
              backgroundColor: isDark ? "#111" : "#F5F5F5",
              borderColor: isDark ? "#222" : "#E5E5E5",
              borderWidth: 1,
            },
          ]}
          onPress={option.action}
        >
          <View
            style={[
              styles.optionIcon,
              {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(49,130,206,0.15)",
              },
            ]}
          >
            <IconSymbol name={option.icon} size={28} color={colors.primary} />
          </View>

          <ThemedText style={[styles.optionTitle, { color: colors.text }]}>
            {option.title}
          </ThemedText>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Animated.View entering={FadeInUp.springify()} style={styles.header}>
        <ThemedText style={[styles.headerTitle, { color: colors.text }]}>
          Settings
        </ThemedText>

        <ThemedText
          style={[styles.headerSubtitle, { color: colors.textSecondary }]}
        >
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
              backgroundColor: isDark ? "#222" : "#fff",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
                color: isDark ? "#fff" : "#000",
              }}
            >
              Choose Theme
            </Text>

            <TouchableOpacity
              onPress={() => {
                setTheme("light");
                setThemeModalVisible(false);
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  color: isDark ? "#fff" : "#000",
                }}
              >
                🌞 Light Mode
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setTheme("dark");
                setThemeModalVisible(false);
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  color: isDark ? "#fff" : "#000",
                }}
              >
                🌙 Dark Mode
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setTheme("system");
                setThemeModalVisible(false);
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  color: isDark ? "#fff" : "#000",
                }}
              >
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
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    marginRight: 16,
    padding: 8,
    borderRadius: 10,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
});
