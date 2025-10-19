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
} as IconMapping;


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
  return <Ionicons color={color} size={size} name={MAPPING[name]} style={style} />;
}