import React from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { View, Text, StyleSheet, ScrollView, Platform, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { colors, commonStyles } from "@/styles/commonStyles";
import { GlassView } from "expo-glass-effect";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const profileOptions = [
  {
    id: 1,
    title: "My Favorites",
    description: "Places you've saved for later",
    icon: "heart.fill",
    color: colors.secondary,
  },
  {
    id: 2,
    title: "Travel History",
    description: "Your Kosovo exploration journey",
    icon: "map.fill",
    color: colors.accent,
  },
  {
    id: 3,
    title: "Language Settings",
    description: "Albanian, English",
    icon: "globe",
    color: colors.primary,
  },
  {
    id: 4,
    title: "Offline Maps",
    description: "Download maps for offline use",
    icon: "arrow.down.circle.fill",
    color: colors.highlight,
  },
  {
    id: 5,
    title: "Share App",
    description: "Tell friends about intoKosova",
    icon: "square.and.arrow.up.fill",
    color: "#FF6B6B",
  },
  {
    id: 6,
    title: "Support",
    description: "Get help and contact us",
    icon: "questionmark.circle.fill",
    color: "#4ECDC4",
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
    paddingBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
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
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
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
  optionsContainer: {
    paddingBottom: 100, // Space for floating tab bar
  },
  optionCard: {
    width: '100%', // Full width like home page
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
  optionContent: {
    padding: 20,
    backgroundColor: colors.card,
    minHeight: 100,
    borderLeftWidth: 4,
    borderLeftColor: colors.lightBlue,
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionIcon: {
    marginRight: 16,
    padding: 12,
    backgroundColor: colors.lightBlue,
    borderRadius: 12,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});

export default function ProfileScreen() {
  const theme = useTheme();

  const renderProfileOption = (option: typeof profileOptions[0], index: number) => {
    return (
      <Animated.View
        key={option.id}
        entering={FadeInDown.delay(index * 100).springify()}
      >
        <Pressable
          style={styles.optionCard}
          onPress={() => console.log(`Option pressed: ${option.title}`)}
          android_ripple={{ color: colors.lightBlue }}
        >
          <View style={[styles.optionContent, { borderLeftColor: option.color }]}>
            <View style={styles.optionHeader}>
              <View style={[styles.optionIcon, { backgroundColor: `${option.color}20` }]}>
                <IconSymbol
                  name={option.icon}
                  size={28}
                  color={option.color}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>{option.description}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Animated.View entering={FadeInUp.springify()} style={styles.header}>
        <View style={styles.profileImage}>
          <IconSymbol
            name="person.fill"
            size={40}
            color="#FFFFFF"
          />
        </View>
        <Text style={styles.profileName}>Kosovo Explorer</Text>
        <Text style={styles.profileEmail}>explorer@intokosova.com</Text>
        <View style={styles.profileStats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Places Visited</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Photos</Text>
          </View>
        </View>
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
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Places{'\n'}Visited</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Saved{'\n'}Favorites</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Photos{'\n'}Taken</Text>
          </View>
        </Animated.View>

        <View style={styles.optionsContainer}>
          {profileOptions.map((option, index) => 
            renderProfileOption(option, index)
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
