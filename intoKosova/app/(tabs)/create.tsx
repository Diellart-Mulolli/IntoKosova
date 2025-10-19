import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function CreateScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Create</ThemedText>
      <Link href="/(tabs)/homepage" style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
      <IconSymbol
        name="circle.fill"
        size={40}
        color={Colors[colorScheme ?? 'light'].tint}
        style={styles.circle}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  circle: {
    position: 'absolute',
    bottom: 20,
  },
});