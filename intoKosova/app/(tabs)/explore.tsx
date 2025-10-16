
import React from "react";
import { IconSymbol } from "@/components/IconSymbol";
import { View, Text, StyleSheet, ScrollView, Platform, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { colors, commonStyles } from "@/styles/commonStyles";
import { GlassView } from "expo-glass-effect";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const explorationCategories = [
  {
    id: 1,
    title: "Historical Sites",
    description: "Discover Kosovo's rich historical heritage",
    icon: "building.columns.fill",
    color: colors.primary,
    items: ["Gračanica Monastery", "Visoki Dečani", "Patriarchate of Peć"]
  },
  {
    id: 2,
    title: "Natural Wonders",
    description: "Explore breathtaking landscapes and nature",
    icon: "mountain.2.fill",
    color: colors.accent,
    items: ["Rugova Canyon", "Mirusha Waterfalls", "Sharr Mountains"]
  },
  {
    id: 3,
    title: "Cultural Heritage",
    description: "Experience traditional Kosovo culture",
    icon: "theatermasks.fill",
    color: colors.secondary,
    items: ["Traditional Crafts", "Folk Music", "Local Festivals"]
  },
  {
    id: 4,
    title: "Modern Kosovo",
    description: "Contemporary life and urban experiences",
    icon: "building.2.fill",
    color: colors.highlight,
    items: ["Pristina City Center", "Modern Architecture", "Nightlife"]
  },
  {
    id: 5,
    title: "Culinary Journey",
    description: "Taste authentic Kosovo cuisine",
    icon: "fork.knife",
    color: "#FF6B6B",
    items: ["Flija", "Burek", "Traditional Restaurants"]
  },
  {
    id: 6,
    title: "Adventure Sports",
    description: "Outdoor activities and adventures",
    icon: "figure.hiking",
    color: "#4ECDC4",
    items: ["Hiking Trails", "Rock Climbing", "Winter Sports"]
  }
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center', // Center the header content
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center', // Center the title text
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 22,
    textAlign: 'center', // Center the subtitle text
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  // Add color strip like home page
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    paddingVertical: 16,
    backgroundColor: colors.card,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0 4px 16px rgba(49, 130, 206, 0.15)',
      },
    }),
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },