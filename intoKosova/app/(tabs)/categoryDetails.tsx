import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { colors } from "@/styles/commonStyles";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const categories = [
  {
    id: 1,
    title: "Historical Sites",
    description: "Kosovo’s rich historical landmarks and sacred monasteries.",
    color: colors.primary,
    items: [
      { name: "Graçanica Monastery", image: require("@/assets/images/gracanica.jpg") },
      { name: "Deçan Monastery", image: require("@/assets/images/decan.jpg") },
      { name: "Patriarchate of Peja", image: require("@/assets/images/peja.jpg") },
    ],
  },
  {
    id: 2,
    title: "Natural Wonders",
    description: "Experience Kosovo’s breathtaking natural beauty.",
    color: colors.accent,
    items: [
      { name: "Rugova Canyon", image: require("@/assets/images/rugova.jpg") },
      { name: "Mirusha Waterfalls", image: require("@/assets/images/mirusha.jpg") },
      { name: "Sharr Mountains", image: require("@/assets/images/sharr.jpg") },
    ],
  },
  {
    id: 3,
    title: "Cultural Heritage",
    description: "Immerse yourself in Kosovo’s vibrant traditions and arts.",
    color: colors.secondary,
    items: [
      { name: "Traditional Crafts", image: require("@/assets/images/crafts.jpg") },
      { name: "Folk Music", image: require("@/assets/images/music.jpg") },
      { name: "Local Festivals", image: require("@/assets/images/festival.jpg") },
    ],
  },
  {
    id: 4,
    title: "Modern Kosovo",
    description: "Discover the modern life and cityscapes of Kosovo.",
    color: colors.highlight,
    items: [
      { name: "Pristina City Center", image: require("@/assets/images/city.jpg") },
      { name: "Modern Architecture", image: require("@/assets/images/architecture.jpg") },
      { name: "Nightlife", image: require("@/assets/images/nightlife.jpg") },
    ],
  },
  {
    id: 5,
    title: "Culinary Journey",
    description: "Taste authentic dishes and experience Kosovo’s rich cuisine.",
    color: "#FF6B6B",
    items: [
      { name: "Flija", image: require("@/assets/images/flija.jpg") },
      { name: "Burek", image: require("@/assets/images/burek.jpg") },
      { name: "Traditional Restaurants", image: require("@/assets/images/restaurant.jpg") },
    ],
  },
  {
    id: 6,
    title: "Adventure Sports",
    description: "Get your adrenaline rush with outdoor adventures in Kosovo.",
    color: "#4ECDC4",
    items: [
      { name: "Hiking Trails", image: require("@/assets/images/hiking.jpg") },
      { name: "Rock Climbing", image: require("@/assets/images/climbing.jpg") },
      { name: "Winter Sports", image: require("@/assets/images/winter_sports.jpg") },
    ],
  },
];

export default function CategoryDetails() {
  const { id } = useLocalSearchParams();
  const category = categories.find((c) => c.id == id);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* 🔹 Floating Back Arrow */}
      <View style={styles.floatingBackContainer}>
        <View style={styles.backButtonContainer}>
          <Pressable onPress={() => router.replace("/explore")} style={styles.backButton}>
            <Ionicons
              name="arrow-back"
              size={26}
              color={category?.color || colors.primary}
            />
          </Pressable>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 🔹 Header Section */}
        <Animated.View entering={FadeInUp.springify()} style={styles.header}>
          <Text style={[styles.headerTitle, { color: category?.color }]}>
            {category?.title}
          </Text>
          <Text style={styles.headerSubtitle}>{category?.description}</Text>
        </Animated.View>

        {/* 🔹 Image Cards */}
        <View style={styles.cardsContainer}>
          {category?.items.map((item, index) => (
            <Animated.View
              key={item.name}
              entering={FadeInDown.delay(index * 150).springify()}
              style={styles.card}
            >
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.overlay} />
              <Text style={styles.imageText}>{item.name}</Text>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  floatingBackContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 50,
  },
  backButtonContainer: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 22,
    overflow: "hidden",
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },

  header: {
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: "90%",
  },

  cardsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    marginBottom: 24,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  image: {
    width: width - 40,
    height: 240,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.15)",
  },
  imageText: {
    position: "absolute",
    bottom: 16,
    left: 20,
    right: 20,
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
});
