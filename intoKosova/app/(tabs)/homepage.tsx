import React, { useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
<<<<<<< HEAD
import { colors, commonStyles } from "@/styles/commonStyles";
=======
import { colors } from "@/styles/commonStyles";
>>>>>>> 11ad49827125d766b802834ee33db59680d61b07
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  Platform,
<<<<<<< HEAD
} from "react-native";
import { GlassView } from "expo-glass-effect";
=======
  Image,
  RefreshControl,
} from "react-native";
>>>>>>> 11ad49827125d766b802834ee33db59680d61b07
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import * as Location from "expo-location";

// ------------------------------------
// FEATURE LIST
// ------------------------------------

const weatherIcons: any = {
  "01d": require("@/assets/weather/sun.png"),
  "01n": require("@/assets/weather/sun.png"),

  "02d": require("@/assets/weather/partly.png"),
  "02n": require("@/assets/weather/partly.png"),

  "03d": require("@/assets/weather/cloudy.png"),
  "03n": require("@/assets/weather/cloudy.png"),

  "04d": require("@/assets/weather/cloudy.png"),
  "04n": require("@/assets/weather/cloudy.png"),

  "09d": require("@/assets/weather/rain.png"),
  "09n": require("@/assets/weather/rain.png"),

  "10d": require("@/assets/weather/rain.png"),
  "10n": require("@/assets/weather/rain.png"),

  "11d": require("@/assets/weather/rain.png"),
  "11n": require("@/assets/weather/rain.png"),

  "13d": require("@/assets/weather/snow.png"),
  "13n": require("@/assets/weather/snow.png"),

  "50d": require("@/assets/weather/fog.png"),
  "50n": require("@/assets/weather/fog.png"),
};


import { useThemeManager } from "../../contexts/ThemeContext";

const features = [
  {
    id: 1,
    title: "Discover Heritage",
    description:
      "Explore Kosovo's rich historical sites and cultural landmarks",
    icon: "building.columns.fill",
    colorKey: "primary",
  },
  {
    id: 2,
    title: "Natural Beauty",
    description: "Experience breathtaking landscapes and pristine nature",
    icon: "mountain.2.fill",
    colorKey: "accent",
  },
  {
    id: 3,
    title: "Local Culture",
    description: "Immerse yourself in authentic Kosovo traditions",
    icon: "theatermasks.fill",
    colorKey: "secondary",
  },
  {
    id: 4,
    title: "Modern Kosovo",
    description: "Discover contemporary life and urban experiences",
    icon: "building.2.fill",
    colorKey: "highlight",
  },
];

const stats = [
  { label: "UNESCO Sites", value: "4", icon: "star.fill" },
  { label: "National Parks", value: "2", icon: "mountain.2.fill" },
  { label: "Museums", value: "15+", icon: "building.fill" },
];

<<<<<<< HEAD
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
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitleText: {
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
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
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
  featuresContainer: {
    paddingBottom: 100,
  },
  featureCard: {
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
  featureContent: {
    padding: 20,
    backgroundColor: colors.card,
    minHeight: 120,
    borderLeftWidth: 4,
    borderLeftColor: colors.lightBlue,
  },
  featureHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureIcon: {
    marginRight: 16,
    marginTop: 10,
    padding: 12,
    backgroundColor: colors.lightBlue,
    borderRadius: 12,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
=======
// ------------------------------------
// STYLES (DYNAMIC VIA palette)
// ------------------------------------
const createStyles = (palette: any) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: palette.background },
>>>>>>> 11ad49827125d766b802834ee33db59680d61b07

    header: {
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 10,
      alignItems: "center",
    },

    titleText: {
      fontSize: 32,
      fontWeight: "bold",
      color: palette.text,
      marginBottom: 8,
      textAlign: "center",
    },

    subtitleText: {
      fontSize: 16,
      color: palette.textSecondary,
      lineHeight: 22,
      textAlign: "center",
    },

    content: { flex: 1, paddingHorizontal: 20 },

    statsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 24,
      paddingVertical: 16,
      backgroundColor: palette.card,
      borderRadius: 16,
      ...Platform.select({
        ios: {
          shadowColor: palette.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 8,
        },
        android: { elevation: 4 },
        web: { boxShadow: "0 4px 16px rgba(49,130,206,0.15)" },
      }),
    },

    statItem: { alignItems: "center" },
    statIcon: { marginBottom: 8 },

    statValue: {
      fontSize: 20,
      fontWeight: "bold",
      color: palette.primary,
      marginBottom: 4,
    },

    statLabel: {
      fontSize: 12,
      color: palette.textSecondary,
      textAlign: "center",
    },

    featuresContainer: { paddingBottom: 100 },

    featureCard: {
      width: "100%",
      marginBottom: 16,
      borderRadius: 16,
      overflow: "hidden",
      ...Platform.select({
        ios: {
          shadowColor: palette.primary,
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
        },
        android: { elevation: 6 },
        web: { boxShadow: "0 6px 20px rgba(49,130,206,0.15)" },
      }),
    },

    featureContent: {
      padding: 20,
      backgroundColor: palette.card,
      minHeight: 120,
      borderLeftWidth: 4,
    },

    featureHeader: { flexDirection: "row", alignItems: "center", marginBottom: 12 },

    featureIcon: {
      marginRight: 16,
      marginTop: 10,
      padding: 12,
      borderRadius: 12,
    },

    featureTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: palette.text,
      marginBottom: 4,
    },

    featureDescription: {
      fontSize: 14,
      color: palette.textSecondary,
      lineHeight: 20,
    },
  });

// ------------------------------------
// MAIN SCREEN
// ------------------------------------
export default function HomeScreen() {
  const { colors } = useThemeManager();
  const theme = useTheme();
  const palette = theme.dark ? colors.dark : colors.light;

  const styles = createStyles(palette);

  const [weather, setWeather] = useState<any>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchWeather = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const loc = await Location.getCurrentPositionAsync({});
      const { latitude: lat, longitude: lon } = loc.coords;

      const apiKey = "6068fce306e355cd321c53a65029295b";

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      );
      const data = await res.json();

      setWeather({
        temp: Math.round(data.main.temp),
        city: data.name,
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch (e) {
      console.log("Weather error:", e);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchWeather();
    setRefreshing(false);
  };

<<<<<<< HEAD
  const renderFeatureCard = (feature: (typeof features)[0], index: number) => {
=======
  const renderFeatureCard = (feature: typeof features[0], index: number) => {
    const featureColor = palette[feature.colorKey];

>>>>>>> 11ad49827125d766b802834ee33db59680d61b07
    return (
      <Animated.View
        key={feature.id}
        entering={FadeInDown.delay(index * 100).springify()}
      >
        <Pressable
          style={styles.featureCard}
          onPress={() => console.log(`Feature pressed: ${feature.title}`)}
          android_ripple={{ color: palette.lightBlue }}
        >
          <View
<<<<<<< HEAD
            style={[styles.featureContent, { borderLeftColor: feature.color }]}
=======
            style={[
              styles.featureContent,
              { borderLeftColor: featureColor },
            ]}
>>>>>>> 11ad49827125d766b802834ee33db59680d61b07
          >
            <View style={styles.featureHeader}>
              <View
                style={[
                  styles.featureIcon,
<<<<<<< HEAD
                  { backgroundColor: `${feature.color}20` },
                ]}
              >
                <IconSymbol
                  name={feature.icon}
                  size={28}
                  color={feature.color}
                />
=======
                  { backgroundColor: featureColor + "33" },
                ]}
              >
                <IconSymbol name={feature.icon} size={28} color={featureColor} />
>>>>>>> 11ad49827125d766b802834ee33db59680d61b07
              </View>

              <View style={styles.featureTextContainer}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>
                  {feature.description}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Animated.View>
    );
  };

<<<<<<< HEAD
  const renderHeaderRight = () => (
    <Pressable onPress={() => console.log("Notifications pressed")}>
      <IconSymbol name="bell.fill" size={24} color={colors.text} />
    </Pressable>
  );

  const renderHeaderLeft = () => (
    <Pressable onPress={() => console.log("Menu pressed")}>
      <IconSymbol name="line.horizontal.3" size={24} color={colors.text} />
    </Pressable>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={["top"]}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Animated.View
        entering={FadeInUp.springify()}
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: colors.text,
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          intoKosova
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: colors.textSecondary,
            lineHeight: 22,
            textAlign: "center",
          }}
        >
          Discover the heart of the Balkans through its rich history, stunning
          landscapes, and vibrant culture
=======
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Stack.Screen options={{ headerShown: false }} />

      <Animated.View entering={FadeInUp.springify()} style={styles.header}>
        <Text style={styles.titleText}>intoKosova</Text>
        <Text style={styles.subtitleText}>
          Discover the heart of the Balkans through its rich history, stunning landscapes, and vibrant culture
>>>>>>> 11ad49827125d766b802834ee33db59680d61b07
        </Text>
      </Animated.View>

      <ScrollView
<<<<<<< HEAD
        style={{ flex: 1 }}
=======
        style={styles.content}
>>>>>>> 11ad49827125d766b802834ee33db59680d61b07
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
<<<<<<< HEAD
=======
        {/* WEATHER */}
        {weather && (
       <Animated.View
  entering={FadeInUp.delay(120).springify()}
  style={{
    backgroundColor: palette.card,
    borderRadius: 14,
    padding: 14,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        shadowColor: palette.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: { elevation: 6 },
      web: { boxShadow: "0 6px 20px rgba(49,130,206,0.15)" },
    }),
  }}
>

            <View>
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: palette.text }}
              >
                {weather.city}
              </Text>
              <Text style={{ fontSize: 14, color: palette.textSecondary }}>
                {weather.desc}
              </Text>
            </View>

            <View style={{ alignItems: "center" }}>
             <Image
  source={weatherIcons[weather.icon] || weatherIcons["unknown"]}
  style={{ width: 60, height: 60 }}
  resizeMode="contain"
/>



              <Text
                style={{ fontSize: 20, fontWeight: "700", color: palette.primary }}
              >
                {weather.temp}°C
              </Text>
            </View>
          </Animated.View>
        )}

        {/* STATISTICS */}
>>>>>>> 11ad49827125d766b802834ee33db59680d61b07
        <Animated.View
          entering={FadeInUp.delay(200).springify()}
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 24,
            paddingVertical: 16,
            backgroundColor: colors.card,
            borderRadius: 16,
          }}
        >
          {stats.map((stat, index) => (
<<<<<<< HEAD
            <View key={index} style={{ alignItems: "center" }}>
              <IconSymbol name={stat.icon} size={20} color={colors.primary} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.primary,
                  marginBottom: 4,
                }}
              >
                {stat.value}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.textSecondary,
                  textAlign: "center",
                }}
              >
                {stat.label}
              </Text>
=======
            <View key={index} style={styles.statItem}>
              <View style={styles.statIcon}>
                <IconSymbol name={stat.icon} size={20} color={palette.primary} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
>>>>>>> 11ad49827125d766b802834ee33db59680d61b07
            </View>
          ))}
        </Animated.View>

<<<<<<< HEAD
        <View>
          {features.map((feature, index) =>
            renderFeatureCard(feature, index, colors)
          )}
=======
        {/* FEATURES */}
        <View style={styles.featuresContainer}>
          {features.map((feature, index) => renderFeatureCard(feature, index))}
>>>>>>> 11ad49827125d766b802834ee33db59680d61b07
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
