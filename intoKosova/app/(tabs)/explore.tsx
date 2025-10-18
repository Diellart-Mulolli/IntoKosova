import React from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { View, Text, StyleSheet, ScrollView, Platform, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { ThemedText } from "@/components/themed-text";
import { GlassView } from "expo-glass-effect";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const explorationCategories = [
  {
    id: 1,
    title: "Historical Sites",
    description: "Discover Kosovo's rich historical heritage",
    icon: "building.columns.fill",
    color: "#3182CE",
    items: ["Gracanica Monastery", "Decani Monastery", "Patriarchate of Peja"],
  },
  {
    id: 2,
    title: "Natural Wonders",
    description: "Explore breathtaking landscapes and nature",
    icon: "mountain.2.fill",
    color: "#38A169",
    items: ["Rugova Canyon", "Mirusha Waterfalls", "Sharr Mountains"],
  },
  {
    id: 3,
    title: "Cultural Heritage",
    description: "Experience traditional Kosovo culture",
    icon: "theatermasks.fill",
    color: "#805AD5",
    items: ["Traditional Crafts", "Folk Music", "Local Festivals"],
  },
  {
    id: 4,
    title: "Modern Kosovo",
    description: "Contemporary life and urban experiences",
    icon: "building.2.fill",
    color: "#D69E2E",
    items: ["Pristina City Center", "Modern Architecture", "Nightlife"],
  },
  {
    id: 5,
    title: "Culinary Journey",
    description: "Taste authentic Kosovo cuisine",
    icon: "fork.knife",
    color: "#FF6B6B",
    items: ["Flija", "Burek", "Traditional Restaurants"],
  },
  {
    id: 6,
    title: "Adventure Sports",
    description: "Outdoor activities and adventures",
    icon: "figure.hiking",
    color: "#4ECDC4",
    items: ["Hiking Trails", "Rock Climbing", "Winter Sports"],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A202C", 
    marginBottom: 8,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#4A5568", 
    lineHeight: 22,
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
    paddingVertical: 16,
    backgroundColor: "#FFF", 
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#3182CE",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: "0 4px 16px rgba(49, 130, 206, 0.15)",
      },
    }),
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3182CE", 
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#4A5568",
    textAlign: "center",
  },
  categoryCard: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  categoryContent: {
    padding: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1A202C",
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: "#4A5568",
    marginBottom: 12,
  },
  categoryItems: {
    fontSize: 14,
    color: "#4A5568",
  },
});

export default function Explore() {
  const { colors: themeColors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View entering={FadeInUp.duration(400)} style={styles.header}>
        <ThemedText style={styles.headerTitle}>Explore Kosovo</ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Discover the beauty and culture of Kosovo
        </ThemedText>
      </Animated.View>
      <ScrollView style={styles.content}>
        {explorationCategories.map((category) => (
          <Animated.View
            key={category.id}
            entering={FadeInDown.duration(400).delay(category.id * 100)}
            style={styles.categoryCard}
          >
            <GlassView intensity={0.5} tint={category.color}>
              <Pressable style={styles.categoryContent}>
                <IconSymbol name={category.icon} size={24} color={category.color} />
                <ThemedText style={styles.categoryTitle}>{category.title}</ThemedText>
                <ThemedText style={styles.categoryDescription}>
                  {category.description}
                </ThemedText>
                <ThemedText style={styles.categoryItems}>
                  {category.items.join(", ")}
                </ThemedText>
              </Pressable>
            </GlassView>
          </Animated.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}