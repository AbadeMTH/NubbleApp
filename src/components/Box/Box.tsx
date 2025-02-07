import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

//Creating a predefined Box component that uses the theme object
export const Box = createBox<Theme>();
export type SRBoxProps = React.ComponentProps<typeof Box>;

//Creating a type that contains all the props that the TouchableOpacityBox component will receive
export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  TouchableOpacityProps;

//Creating a personalized component with restyle that receive 2 parameters, the first is the props that the component will receive and the second is the component that will be used
export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
