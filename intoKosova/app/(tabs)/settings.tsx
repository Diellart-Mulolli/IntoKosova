import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Settings</ThemedText>
      <ThemedText type="subtitle" style={styles.section}>
        Change Color
      </ThemedText>
      <ThemedText style={styles.text}>
        Customize the app's color scheme (Light/Dark mode coming soon).
      </ThemedText>
      <ThemedText type="subtitle" style={styles.section}>
        About Us
      </ThemedText>
      <ThemedText style={styles.text}>
        We are a team dedicated to showcasing the beauty and culture of Kosovo through this app.
      </ThemedText>
      <ThemedText type="subtitle" style={styles.section}>
        Notifications
      </ThemedText>
      <ThemedText style={styles.text}>
        Manage push notifications for updates and alerts.
      </ThemedText>
      <ThemedText type="subtitle" style={styles.section}>
        Privacy
      </ThemedText>
      <ThemedText style={styles.text}>
        Review our privacy policy and data usage settings.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
  },
  section: {
    marginTop: 20,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: 12,
  },
});