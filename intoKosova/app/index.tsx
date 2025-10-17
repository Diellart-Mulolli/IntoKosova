import { View, Text } from 'react-native';
import { ThemedText } from '@/components/themed-text';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText style={{ fontSize: 24 }}>Welcome to IntoKosova</ThemedText>
    </View>
  );
}