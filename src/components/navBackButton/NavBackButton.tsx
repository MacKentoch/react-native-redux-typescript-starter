import React from 'react';
import { StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme, UseThemeParams } from '../../hooks/useTheme';
import { theme } from '../../config/theme';
import { MappedProps, MappedDispatchToProps } from './index';
// #region types

type Props = {
  onPress: (event: GestureResponderEvent) => any;
} & MappedProps &
  MappedDispatchToProps;
// #endregion

function NavBackButton({ onPress, themeName: currentTheme = 'dark' }: Props) {
  const useThemeParams: UseThemeParams<Theme> = {
    currentTheme,
    darkThemeStyles,
    lightThemeStyles,
  };
  const [themedStyles] = useTheme<Theme>(useThemeParams);

  const DEFAULT_UNDERLAY_COLOR = theme.header[currentTheme].buttonUnderlayColor;
  const ICON_COLOR = theme.header[currentTheme].buttonIconColor;

  return (
    <Touchable
      style={themedStyles.button}
      underlayColor={DEFAULT_UNDERLAY_COLOR}
      onPress={onPress}
    >
      <Icon name="ios-arrow-back" size={28} color={ICON_COLOR} />
    </Touchable>
  );
}

NavBackButton.displayName = 'NavBackButton';

// #region styles
const baseButtonStyles: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  paddingHorizontal: 15,
  paddingVertical: 5,
};
type Theme = {
  button: ViewStyle;
};

const darkThemeStyles = StyleSheet.create<Theme>({
  button: {
    ...baseButtonStyles,
  },
});

const lightThemeStyles = StyleSheet.create<Theme>({
  button: {
    ...baseButtonStyles,
  },
});
// #endregion

export default NavBackButton;
