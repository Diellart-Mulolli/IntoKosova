import React from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { colors, commonStyles } from "@/styles/commonStyles";
import { ScrollView, StyleSheet, View, Text, Pressable, Platform } from "react-native";
import { GlassView } from "expo-glass-effect";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const features = [
  {
    id: 1,
    title: "Discover Heritage",
    description: "Explore Kosovo's rich historical sites and cultural landmarks",
    icon: "building.columns.fill",
    color: colors.primary,
  },
  {
    id: 2,
    title: "Natural Beauty",
    description: "Experience breathtaking landscapes and pristine nature",
    icon: "mountain.2.fill",
    color: colors.accent,
  },
  {
    id: 3,
    title: "Local Culture",
    description: "Immerse yourself in authentic Kosovo traditions",
    icon: "theatermasks.fill",
    color: colors.secondary,
  },
  {
    id: 4,
    title: "Modern Kosovo",
    description: "Discover contemporary life and urban experiences",
    icon: "building.2.fill",
    color: colors.highlight,
  },
];

const stats = [
  { label: "UNESCO Sites", value: "4", icon: "star.fill" },
  { label: "National Parks", value: "2", icon: "mountain.2.fill" },
  { label: "Museums", value: "15+", icon: "building.fill" },
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
    alignItems: 'center', 
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center', 
  },
  subtitleText: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 22,
    textAlign: 'center', 
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
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
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
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
  featuresContainer: {
    paddingBottom: 100, 
  },
  featureCard: {
    width: '100%', 
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
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
        boxShadow: '0 6px 20px rgba(49, 130, 206, 0.15)',
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    marginRight: 16,
    padding: 12,
    backgroundColor: colors.lightBlue,
    borderRadius: 12,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});

export default function HomeScreen() {
  const theme = useTheme();

  const renderFeatureCard = (feature: typeof features[0], index: number) => {
    return (
      <Animated.View
        key={feature.id}
        entering={FadeInDown.delay(index * 100).springify()}
      >
        <Pressable
          style={styles.featureCard}
          onPress={() => console.log(`Feature pressed: ${feature.title}`)}
          android_ripple={{ color: colors.lightBlue }}
        >
          <View style={[styles.featureContent, { borderLeftColor: feature.color }]}>
            <View style={styles.featureHeader}>
              <View style={[styles.featureIcon, { backgroundColor: `${feature.color}20` }]}>
                <IconSymbol
                  name={feature.icon}
                  size={28}
                  color={feature.color}
                />
              </View>
              <View style={styles.featureTextContainer}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Animated.View>
    );
  };

  const renderHeaderRight = () => (
    <Pressable onPress={() => console.log('Notifications pressed')}>
      <IconSymbol name="bell.fill" size={24} color={colors.text} />
    </Pressable>
  );

  const renderHeaderLeft = () => (
    <Pressable onPress={() => console.log('Menu pressed')}>
      <IconSymbol name="line.horizontal.3" size={24} color={colors.text} />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      
      <Animated.View entering={FadeInUp.springify()} style={styles.header}>
        <Text style={styles.titleText}>intoKosova</Text>
        <Text style={styles.subtitleText}>
          Discover the heart of the Balkans through its rich history, stunning landscapes, and vibrant culture
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
          {stats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <View style={styles.statIcon}>
                <IconSymbol
                  name={stat.icon}
                  size={20}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </Animated.View>

        <View style={styles.featuresContainer}>
          {features.map((feature, index) => renderFeatureCard(feature, index))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
