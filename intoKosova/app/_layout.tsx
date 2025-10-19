import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Tabs and modals are automatically included based on folder structure */}
    </Stack>
  );
}