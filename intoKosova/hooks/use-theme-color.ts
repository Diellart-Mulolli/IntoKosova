import { useColorScheme } from './use-color-scheme';
import { Colors } from '@/constants/theme';

export function useThemeColor({ lightColor, darkColor }: { lightColor?: string; darkColor?: string }) {
  const theme = useColorScheme();
  return theme === 'dark' && darkColor ? darkColor : lightColor || Colors[theme || 'light'].textSecondary;
}