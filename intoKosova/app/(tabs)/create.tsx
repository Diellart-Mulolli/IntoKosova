import { StyleSheet, Pressable, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function CreateScreen() {
  const colorScheme = useColorScheme();

  console.log('CreateScreen: Starting animations');

  return (
    <ThemedView style={styles.container}>
      <Animated.View
        entering={FadeInUp.springify()}
        style={styles.photoPlaceholder}
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          style={[styles.textButton, { marginTop: '40%' }]}
        >
          <Pressable>
            <IconSymbol
              size={24}
              name="text"
              color={Colors[colorScheme ?? 'light'].tint}
            />
          </Pressable>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          style={[styles.cameraButton, { marginTop: 10 }]}
        >
          <Pressable>
            <IconSymbol
              size={36}
              name="camera"
              color={Colors[colorScheme ?? 'light'].tint}
            />
          </Pressable>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(300).springify()}
          style={[styles.cameraButton, { marginTop: 10 }]}
        >
          <Pressable onPress={() => console.log('Plus button pressed')}>
            <IconSymbol
              size={48}
              name="plus"
              color={Colors[colorScheme ?? 'light'].tint}
            />
          </Pressable>
        </Animated.View>
      </Animated.View>
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
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: Colors.light.tint,
    borderRadius: 8,
    marginVertical: 20,
    marginTop: 0,
    marginBottom: 40,
    position: 'relative',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 10,
    color: Colors.light.text,
    textAlign: 'center',
  },
  textButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: Colors.light.tint,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 5,
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: Colors.light.tint,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 5,
  },
});