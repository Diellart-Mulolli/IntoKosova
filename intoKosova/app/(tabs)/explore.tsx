import React from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Pressable,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { colors, commonStyles } from "@/styles/commonStyles";
import { GlassView } from "expo-glass-effect";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useRouter } from "expo-router"; // ✅ për navigim

const explorationCategories = [
  {
    id: 1,
    title: "Historical Sites",
    description: "Discover Kosovo's rich historical heritage",
    icon: "building.columns.fill",
    color: colors.primary,
    items: [
      {
        name: "Graçanica Monastery",
        image: require("@/assets/images/gracanica.jpg"),
      },
      { name: "Deçan Monastery", image: require("@/assets/images/decan.jpg") },
      {
        name: "Patriarchate of Peja",
        image: require("@/assets/images/peja.jpg"),
      },
    ],
  },
  {
    id: 2,
    title: "Natural Wonders",
    description: "Explore breathtaking landscapes and nature",
    icon: "mountain.2.fill",
    color: colors.accent,
    items: [
      { name: "Rugova Canyon", image: require("@/assets/images/rugova.jpg") },
      {
        name: "Mirusha Waterfalls",
        image: require("@/assets/images/mirusha.jpg"),
      },
      { name: "Sharr Mountains", image: require("@/assets/images/sharr.jpg") },
    ],
  },
  {
    id: 3,
    title: "Cultural Heritage",
    description: "Experience traditional Kosovo culture",
    icon: "theatermasks.fill",
    color: colors.secondary,
    items: [
      {
        name: "Traditional Crafts",
        image: require("@/assets/images/crafts.jpg"),
      },
      { name: "Folk Music", image: require("@/assets/images/music.jpg") },
      {
        name: "Local Festivals",
        image: require("@/assets/images/festival.jpg"),
      },
    ],
  },
  {
    id: 4,
    title: "Modern Kosovo",
    description: "Contemporary life and urban experiences",
    icon: "building.2.fill",
    color: colors.highlight,
    items: [
      {
        name: "Pristina City Center",
        image: require("@/assets/images/city.jpg"),
      },
      {
        name: "Modern Architecture",
        image: require("@/assets/images/architecture.jpg"),
      },
      { name: "Nightlife", image: require("@/assets/images/nightlife.jpg") },
    ],
  },
  {
    id: 5,
    title: "Culinary Journey",
    description: "Taste authentic Kosovo cuisine",
    icon: "fork.knife",
    color: "#FF6B6B",
    items: [
      { name: "Flija", image: require("@/assets/images/flija.jpg") },
      { name: "Burek", image: require("@/assets/images/burek.jpg") },
      {
        name: "Traditional Restaurants",
        image: require("@/assets/images/restaurant.jpg"),
      },
    ],
  },
  {
    id: 6,
    title: "Adventure Sports",
    description: "Outdoor activities and adventures",
    icon: "figure.hiking",
    color: "#4ECDC4",
    items: [
      {
        name: "Hiking Trails",
        image: require("@/assets/images/hiking.jpg"),
      },
      {
        name: "Rock Climbing",
        image: require("@/assets/images/climbing.jpg"),
      },
      {
        name: "Winter Sports",
        image: require("@/assets/images/winter_sports.jpg"),
      },
    ],
  },
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
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
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
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center",
  },
  categoriesContainer: {
    paddingBottom: 100,
  },
  categoryCard: {
    width: "100%",
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
      web: {
        boxShadow: "0 6px 20px rgba(49, 130, 206, 0.15)",
      },
    }),
  },
  categoryContent: {
    padding: 20,
    backgroundColor: colors.card,
    minHeight: 120,
    borderLeftWidth: 4,
    borderLeftColor: colors.lightBlue,
  },
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  categoryIcon: {
    marginRight: 16,
    padding: 12,
    backgroundColor: colors.lightBlue,
    borderRadius: 12,
  },
  categoryTextContainer: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 8,
  },
  categoryItems: {
    marginTop: 8,
  },
  categoryItem: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
    opacity: 0.8,
  },
});

export default function ExplorationScreen() {
  const theme = useTheme();
  const router = useRouter(); // ✅ përdorim për klikim

  const renderCategoryCard = (
    category: (typeof explorationCategories)[0],
    index: number
  ) => {
    return (
      <Animated.View
        key={category.id}
        entering={FadeInDown.delay(index * 100).springify()}
      >
        <Pressable
          style={styles.categoryCard}
          onPress={() =>
            router.push({
              pathname: "/categoryDetails",
              params: { id: category.id },
            })
          }
          android_ripple={{ color: colors.lightBlue }}
        >
          <View
            style={[
              styles.categoryContent,
              { borderLeftColor: category.color },
            ]}
          >
            <View style={styles.categoryHeader}>
              <View
                style={[
                  styles.categoryIcon,
                  { backgroundColor: `${category.color}20` },
                ]}
              >
                <IconSymbol
                  name={category.icon}
                  size={28}
                  color={category.color}
                />
              </View>
              <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryDescription}>
                  {category.description}
                </Text>
                <View style={styles.categoryItems}>
                  {category.items.slice(0, 2).map((item, idx) => (
                    <Text key={idx} style={styles.categoryItem}>
                      • {item.name || item}
                    </Text>
                  ))}
                  {category.items.length > 2 && (
                    <Text style={styles.categoryItem}>
                      • +{category.items.length - 2} more
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Animated.View entering={FadeInUp.springify()} style={styles.header}>
        <Text style={styles.headerTitle}>Explore Kosovo</Text>
        <Text style={styles.headerSubtitle}>
          Discover the hidden gems and rich culture of Kosovo through various
          categories
        </Text>
      </Animated.View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Animated.View
          entering={FadeInUp.delay(200).springify()}
          style={styles.statsContainer}
        >
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50+</Text>
            <Text style={styles.statLabel}>Historical{"\n"}Sites</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>25+</Text>
            <Text style={styles.statLabel}>Natural{"\n"}Wonders</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100+</Text>
            <Text style={styles.statLabel}>Cultural{"\n"}Experiences</Text>
          </View>
        </Animated.View>

        <View style={styles.categoriesContainer}>
          {explorationCategories.map((category, index) =>
            renderCategoryCard(category, index)
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
