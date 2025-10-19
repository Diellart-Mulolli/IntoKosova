import Ionicons from '@expo/vector-icons/Ionicons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof Ionicons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'paper-plane',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-forward',
  'person.fill': 'person',
  'info.circle': 'information-circle',
  'magnifyingglass': 'search',
  'list.bullet': 'list',
  'gearshape.fill': 'settings',
  'circled.plus': 'add-circle',
  'camera': 'camera',
  'text': 'text',
  'building.columns.fill': 'business',
  'theatermasks.fill': 'people',
  'building.2.fill': 'business',
  'star.fill': 'star',
  'mountain.2.fill': 'earth',
  'building.fill': 'storefront',
  'bell.fill': 'notifications',
  'line.horizontal.3': 'menu',
  'fork.knife': 'restaurant',
  'figure.hiking': 'walk', // Updated from 'hiking'
} as const;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const iconName = MAPPING[name];
  if (!iconName) {
    console.warn(`IconSymbol: Invalid icon name "${name}"`);
    return null; // Fallback to avoid rendering invalid icons
  }
  return <Ionicons color={color} size={size} name={iconName} style={style} />;
}