import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  FlexStyle,
} from 'react-native';
import { colors } from '../../config/colors';
import { fonts } from '../../config/fonts';
import { useTheme, UseThemeParams } from '../../hooks/useTheme';
// #region types
type Props = { title?: string; theme?: ThemeEnum };
// #endregion

// #region constants
const { white } = colors;
const { family, size } = fonts;
const defaultTitle = '';
// #endregion

function HeaderTitle({ title, theme = 'light' }: Props) {
  const useThemeParams: UseThemeParams<Theme> = {
    currentTheme: theme,
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
    color: white,
  },
});
const lightThemeStyles = StyleSheet.create<Theme>({
  container: {
    ...baseContainerStyles,
  },
  titleText: {
    ...baseTitleTextStyles,
    color: white,
  },
});
// #endregion

export default HeaderTitle;
