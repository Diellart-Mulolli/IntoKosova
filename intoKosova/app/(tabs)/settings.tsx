import { StyleSheet, Pressable, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} type="title">Settings</ThemedText>

      <ThemedText type="subtitle" style={styles.section}>
        Appearance
      </ThemedText>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <ThemedText type="default" style={styles.buttonText}>
            Change Color
          </ThemedText>
        </Pressable>
        <ThemedText style={styles.description}>
          Customize the app's color scheme (Light/Dark mode coming soon).
        </ThemedText>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <ThemedText type="default" style={styles.buttonText}>
            Dyslexia Mode
          </ThemedText>
        </Pressable>
        <ThemedText style={styles.description}>
          Enable a dyslexia-friendly font and layout for easier reading.
        </ThemedText>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <ThemedText type="default" style={styles.buttonText}>
            Colorblind Palettes
          </ThemedText>
        </Pressable>
        <ThemedText style={styles.description}>
          Select color palettes optimized for colorblind users.
        </ThemedText>
      </View>

      <ThemedText type="subtitle" style={styles.section}>
        Notifications
      </ThemedText>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <ThemedText type="default" style={styles.buttonText}>
            Manage Notifications
          </ThemedText>
        </Pressable>
        <ThemedText style={styles.description}>
          Configure push notifications for updates and alerts.
        </ThemedText>
      </View>

      <ThemedText type="subtitle" style={styles.section}>
        Privacy
      </ThemedText>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <ThemedText type="default" style={styles.buttonText}>
            Privacy Settings
          </ThemedText>
        </Pressable>
        <ThemedText style={styles.description}>
          Review our privacy policy and manage data usage settings.
        </ThemedText>
      </View>

      <ThemedText type="subtitle" style={styles.section}>
        About Us
      </ThemedText>
      <ThemedText style={styles.description}>
        We are a passionate team dedicated to showcasing the beauty and culture of Kosovo through this app. Our mission is to gamify the exploration of our country, making it fun, engaging, and accessible to people of all ages. We strive to create an inclusive experience by incorporating features like dyslexia-friendly modes and colorblind-optimized palettes, ensuring everyone can discover Kosovo’s rich heritage with ease.
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
  title:{
    alignSelf: 'center',
    padding:0
  },
  section: {
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 4,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.light.text,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  button: {
    marginLeft: 8,
    backgroundColor: '#fff', // White background
    borderWidth: 2,
    borderColor: Colors.light.tint, // Blue outline
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 12, // Space between button and text
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text, // Black in light mode, white in dark mode
  },
  description: {
    marginRight: 20,
    marginLeft: 15,
    fontSize: 14,
    color: Colors.light.text,
    flex: 1, // Allow text to wrap and fill space
  },
});