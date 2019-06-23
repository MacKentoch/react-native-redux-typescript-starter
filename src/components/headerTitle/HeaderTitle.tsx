import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  FlexStyle,
} from 'react-native';
import { theme } from '../../config/theme';
import { fonts } from '../../config/fonts';
import { useTheme, UseThemeParams } from '../../hooks/useTheme';
import { MappedProps, MappedDispatchToProps } from './index';
// #region types
type Props = { title?: string | null | undefined } & MappedProps &
  MappedDispatchToProps;
// #endregion

// #region constants
const { family, size } = fonts;
const defaultTitle = '';
// #endregion

function HeaderTitle({ title, themeName: currentTheme = 'light' }: Props) {
  const useThemeParams: UseThemeParams<Theme> = {
    currentTheme,
    darkThemeStyles,
    lightThemeStyles,
  };
  const [themedStyles] = useTheme<Theme>(useThemeParams);

  return (
    <View style={themedStyles.container}>
      <Text numberOfLines={1} style={themedStyles.titleText}>
        {!title ? defaultTitle : title}
      </Text>
    </View>
  );
}

// #region statics
HeaderTitle.displayName = 'HeaderTitle';
// #endregion

// #region styles
type ViewContainer = FlexStyle & ViewStyle;
const baseContainerStyles: ViewContainer = {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
};

const baseTitleTextStyles: TextStyle = {
  fontFamily: family.openSansBold,
  fontSize: size.XL,
};

type Theme = {
  container: ViewContainer;
  titleText: TextStyle;
};
const darkThemeStyles = StyleSheet.create<Theme>({
  container: {
    ...baseContainerStyles,
  },
  titleText: {
    ...baseTitleTextStyles,
    color: theme.header.dark.buttonTextColor,
  },
});
const lightThemeStyles = StyleSheet.create<Theme>({
  container: {
    ...baseContainerStyles,
  },
  titleText: {
    ...baseTitleTextStyles,
    color: theme.header.light.buttonTextColor,
  },
});
// #endregion

export default HeaderTitle;
