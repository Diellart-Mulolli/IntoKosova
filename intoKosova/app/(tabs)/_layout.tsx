import { Tabs, router } from 'expo-router';
import React from 'react';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { GlassView } from 'expo-glass-effect';
import { View, StyleSheet, Pressable } from 'react-native';

const TAB_BAR_HEIGHT = 64;

const styles = StyleSheet.create({
  tabBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: TAB_BAR_HEIGHT,
  },
  glassContainer: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  plusButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.light.tint, // Adjust based on theme
    top: -10, // Elevate the button slightly
  },
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          position: 'absolute',
          height: TAB_BAR_HEIGHT,
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarBackground: () => (
          <View style={styles.tabBackground} pointerEvents="none">
            <GlassView tintColor={Colors[colorScheme ?? 'light'].background} style={styles.glassContainer} />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="homepage"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      {/* Plus icon button */}
      <Tabs.Screen
        name="create"
        options={{
          // No href, just a custom button
          tabBarButton: (props) => (
            <Pressable
              onPress={() => router.push('/create')}
              style={styles.plusButton}
            >
              <IconSymbol size={28} name="plus" color={Colors[colorScheme ?? 'light'].background} />
            </Pressable>
          ),
          // Prevent this from being a navigable screen
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}