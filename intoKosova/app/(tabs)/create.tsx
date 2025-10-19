import { StyleSheet, Pressable, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function CreateScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.photoPlaceholder}>
        <ThemedText type="default" style={styles.placeholderText}>
          Photo Preview
        </ThemedText>

        <Pressable style={[styles.textButton, { marginTop: '40%' }]}>
          
          <IconSymbol
            size={24}
            name="text"
            color={Colors[colorScheme ?? 'light'].text}
          />
        </Pressable>

        <Pressable style={[styles.cameraButton, { marginTop: 10 }]}>
          <IconSymbol
            size={24}
            name="camera"
            color={Colors[colorScheme ?? 'light'].text}
          />
        </Pressable>
      </View>
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
  photoPlaceholder: {
    width: '100%',
    height: '90%',
    backgroundColor: '#fff', // White background
    borderWidth: 2,
    borderColor: Colors.light.tint, // Blue outline
    borderRadius: 8,
    marginVertical: 20,
    marginTop: 0,
    marginBottom: 40,
    position: 'relative', // Allow absolute positioning of buttons
  },
  placeholderText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 10,
    color: Colors.light.text,
  },
  textButton: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circular shape
    backgroundColor: '#fff', // White background
    borderWidth: 2,
    borderColor: Colors.light.tint, // Blue outline
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 5,
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circular shape
    backgroundColor: '#fff', // White background
    borderWidth: 2,
    borderColor: Colors.light.tint, // Blue outline
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 5,
  },
});