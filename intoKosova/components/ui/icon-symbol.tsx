import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;


const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'person.fill': 'person',
  'info.circle': 'info',
  'magnifyingglass': 'search',
  'list.bullet': 'list',
  'building.columns.fill': 'business', 
  'theatermasks.fill': 'groups',
  'building.2.fill': 'apartment', 
  'star.fill': 'star', 
  'mountain.2.fill': 'terrain',
  'building.fill': 'storefront', 
  'bell.fill': 'notifications', 
  'line.horizontal.3': 'menu', 
  'fork.knife': 'restaurant', 
  'figure.hiking': 'hiking',
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
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
