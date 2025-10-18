import React, { useState } from "react";
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
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
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
      {
        name: "Graçanica Monastery",
        image: require("@/assets/images/gracanica.jpg"),
        description:
          "Graçanica Monastery is a 14th-century Orthodox monastery and UNESCO site known for its beautiful Byzantine architecture.",
      },
      {
        name: "Deçan Monastery",
        image: require("@/assets/images/decan.jpg"),
        description:
          "Founded in the 14th century, Deçan Monastery is famed for its frescoes and the largest medieval church in the Balkans.",
      },
      {
        name: "Patriarchate of Peja",
        image: require("@/assets/images/peja.jpg"),
        description:
          "Located near Rugova Canyon, the Patriarchate of Peja is a sacred complex symbolizing Kosovo’s spiritual history.",
      },
    ],
  },
  {
    id: 2,
    title: "Natural Wonders",
    description: "Experience Kosovo’s breathtaking natural beauty.",
    color: colors.accent,
    items: [
      {
        name: "Rugova Canyon",
        image: require("@/assets/images/rugova.jpg"),
        description:
          "Rugova Canyon offers stunning cliffs, crystal-clear rivers, and hiking trails — a haven for adventurers.",
      },
      {
        name: "Mirusha Waterfalls",
        image: require("@/assets/images/mirusha.jpg"),
        description:
          "A series of 13 waterfalls and turquoise pools that make Mirusha a must-see natural wonder in Kosovo.",
      },
      {
        name: "Sharr Mountains",
        image: require("@/assets/images/sharr.jpg"),
        description:
          "The Sharr Mountains stretch across southern Kosovo, home to ski resorts and breathtaking alpine views.",
      },
    ],
  },
  {
    id: 3,
    title: "Cultural Heritage",
    description: "Immerse yourself in Kosovo’s vibrant traditions and arts.",
    color: colors.secondary,
    items: [
      {
        name: "Traditional Crafts",
        image: require("@/assets/images/crafts.jpg"),
        description:
          "From intricate woodwork to colorful textiles, Kosovo’s artisans preserve centuries-old craft traditions.",
      },
      {
        name: "Folk Music",
        image: require("@/assets/images/music.jpg"),
        description:
          "Traditional Albania and Kosovo folk music form a harmonious blend of cultural heritage and passion.",
      },
      {
        name: "Local Festivals",
        image: require("@/assets/images/festival.jpg"),
        description:
          "Kosovo’s local festivals showcase food, dance, and art that reflect its rich and diverse culture.",
      },
    ],
  },
  {
    id: 4,
    title: "Modern Kosovo",
    description: "Discover the modern life and cityscapes of Kosovo.",
    color: colors.highlight,
    items: [
      {
        name: "Pristina City Center",
        image: require("@/assets/images/city.jpg"),
        description:
          "The heart of Kosovo’s capital blends urban culture, street art, and vibrant nightlife.",
      },
      {
        name: "Modern Architecture",
        image: require("@/assets/images/architecture.jpg"),
        description:
          "Kosovo’s cities feature a unique contrast between Ottoman heritage and bold modern designs.",
      },
      {
        name: "Nightlife",
        image: require("@/assets/images/nightlife.jpg"),
        description:
          "From cozy bars to lively clubs, Pristina’s nightlife pulses with youthful energy and creativity.",
      },
    ],
  },
  {
    id: 5,
    title: "Culinary Journey",
    description: "Taste authentic dishes and experience Kosovo’s rich cuisine.",
    color: "#FF6B6B",
    items: [
      {
        name: "Flija",
        image: require("@/assets/images/flija.jpg"),
        description:
          "Flija, a traditional layered pastry, represents warmth, patience, and the essence of Kosovar hospitality.",
      },
      {
        name: "Burek",
        image: require("@/assets/images/burek.jpg"),
        description:
          "Crispy and savory, Burek is a beloved Balkan pastry filled with meat, cheese, or spinach.",
      },
      {
        name: "Traditional Restaurants",
        image: require("@/assets/images/restaurant.jpg"),
        description:
          "Kosovo’s traditional restaurants serve hearty meals in rustic settings with genuine local flavors.",
      },
    ],
  },
  {
    id: 6,
    title: "Adventure Sports",
    description: "Get your adrenaline rush with outdoor adventures in Kosovo.",
    color: "#4ECDC4",
    items: [
      {
        name: "Hiking Trails",
        image: require("@/assets/images/hiking.jpg"),
        description:
          "From gentle forest paths to rugged mountain peaks, Kosovo offers trails for every level of hiker.",
      },
      {
        name: "Rock Climbing",
        image: require("@/assets/images/climbing.jpg"),
        description:
          "Rugova Canyon’s towering cliffs attract climbers seeking both challenge and beauty.",
      },
      {
        name: "Winter Sports",
        image: require("@/assets/images/winter_sports.jpg"),
        description:
          "The Brezovica resort and Sharr Mountains make Kosovo a hidden gem for winter sports enthusiasts.",
      },
    ],
  },
];

export default function CategoryDetails() {
  const { id } = useLocalSearchParams();
  const category = categories.find((c) => c.id == id);
  const router = useRouter();

  const [flipped, setFlipped] = useState<string | null>(null);
  const rotations = useSharedValue<{ [key: string]: number }>({});

  const handleFlip = (itemName: string) => {
    const isFlipped = flipped === itemName;
    const newRotations: { [key: string]: number } = {};
    if (!isFlipped) newRotations[itemName] = 180;
    rotations.value = newRotations;
    setFlipped(isFlipped ? null : itemName);
  };

  const getStyle = (itemName: string) => {
    return useAnimatedStyle(() => {
      const deg = rotations.value[itemName] || 0;
      return {
        transform: [
          { perspective: 1000 },
          { rotateY: `${withSpring(deg, { damping: 10, stiffness: 90 })}deg` },
        ],
      };
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.floatingBackContainer}>
        <Pressable
          onPress={() => router.replace("/explore")}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={26}
            color={category?.color || colors.primary}
          />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: category?.color }]}>
            {category?.title}
          </Text>
          <Text style={styles.headerSubtitle}>{category?.description}</Text>
        </View>

        <View style={styles.cardsContainer}>
          {category?.items.map((item) => {
            const style = getStyle(item.name);
            const isFlipped = flipped === item.name;

            return (
              <Pressable key={item.name} onPress={() => handleFlip(item.name)}>
                <Animated.View style={[styles.card, style]}>
                  {!isFlipped ? (
                    <>
                      <Image
                        source={item.image}
                        style={styles.image}
                        resizeMode="cover"
                      />
                      <View style={styles.overlay} />
                      <Text style={styles.imageText}>{item.name}</Text>
                    </>
                  ) : (
                    <View style={styles.backFace}>
                      <Text style={styles.descriptionTitle}>{item.name}</Text>
                      <Text style={styles.descriptionText}>
                        {item.description}
                      </Text>
                      <Pressable
                        style={styles.closeButton}
                        onPress={() => handleFlip(item.name)}
                      >
                        <Text style={styles.closeText}>↩ Close</Text>
                      </Pressable>
                    </View>
                  )}
                </Animated.View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  floatingBackContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 50,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 22,
  },
  backButton: { padding: 10 },
  header: { alignItems: "center", paddingTop: 80, paddingBottom: 16 },
  headerTitle: { fontSize: 30, fontWeight: "bold", textAlign: "center" },
  headerSubtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: "90%",
  },
  cardsContainer: { paddingHorizontal: 20, paddingBottom: 60 },
  card: {
    width: width - 40,
    height: 240,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 24,
    backfaceVisibility: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  image: { width: "100%", height: "100%" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  imageText: {
    position: "absolute",
    bottom: 16,
    left: 20,
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  backFace: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 10,
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: colors.accent,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  closeText: { color: "#fff", fontWeight: "600" },
});
