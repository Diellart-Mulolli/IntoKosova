import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const settingsOptions = [
  { id: 1, title: 'Notifications', icon: 'bell.fill', action: () => console.log('Notifications pressed') },
  { id: 2, title: 'Theme', icon: 'paintpalette.fill', action: () => console.log('Theme pressed') },
  { id: 3, title: 'About', icon: 'info.circle', action: () => console.log('About pressed') },
  { id: 4, title: 'Accessibility', icon: 'accessibility', action: () => console.log('Accessibility pressed') },
  { id: 5, title: 'Reset Progress', icon: 'xmark', action: () => console.log('Reset Progress pressed') },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.light.textSecondary,
    lineHeight: 22,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  optionCard: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: Colors.light.card,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: 16,
    padding: 8,
    backgroundColor: Colors.light.tint + '20',
    borderRadius: 8,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.light.text,
  },
});

export default function SettingsScreen() {
  const colorScheme = useColorScheme();

  console.log('SettingsScreen: Starting animations');

  const renderOptionCard = (option: typeof settingsOptions[0], index: number) => {
    console.log(`Rendering option: ${option.title}, icon: ${option.icon}`);
    return (
      <Animated.View
        key={option.id}
        entering={FadeInDown.delay(index * 100).springify()}
      >
        <Pressable style={styles.optionCard} onPress={option.action}>
          <View style={styles.optionIcon}>
            <IconSymbol
              name={option.icon}
              size={32}
              color={Colors[colorScheme ?? 'light'].tint}
            />
          </View>
          <ThemedText style={styles.optionTitle}>{option.title}</ThemedText>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Animated.View entering={FadeInUp.springify()} style={styles.header}>
        <ThemedText style={styles.headerTitle}>Settings</ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Customize your app experience
        </ThemedText>
      </Animated.View>

      <View style={styles.content}>
        {settingsOptions.map((option, index) => renderOptionCard(option, index))}
      </View>
    </SafeAreaView>
  );
}