import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

const categories = [
  {
    id: 1,
    title: "Historical Sites",
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

export default function CategoryDetails() {
  const { id } = useLocalSearchParams();
  const category = categories.find((c) => c.id == id);

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={styles.header}>{category?.title}</Text>
      <FlatList
        data={category?.items}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  item: { marginBottom: 20 },
  image: { width: "100%", height: 200, borderRadius: 10 },
  name: { marginTop: 8, fontSize: 16, textAlign: "center" },
});
