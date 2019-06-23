import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlexStyle,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { colors } from '../../config/colors';
import { fonts } from '../../config/fonts';
import { MappedProps, MappedDispatchToProps } from './index';
import { useTheme, UseThemeParams } from '../../hooks/useTheme';
import { theme } from '../../config/theme';

// #region types
type Props = {} & MappedProps & MappedDispatchToProps & NavigationScreenProps;
// #endregion

function Info({ navigation, themeName }: Props) {
  const useThemeParams: UseThemeParams<Theme> = {
    currentTheme: themeName,
    darkThemeStyles,
    lightThemeStyles,
    navigation,
  };
  const [themedStyles] = useTheme<Theme>(useThemeParams);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title}>Info scene here</Text>
      <View style={themedStyles.flexible} />
    </View>
  );
}

Info.displayName = 'Info';

// #region styles
const baseContainerStyles: ViewStyle | FlexStyle = {
  flex: 1,
  alignItems: 'center',
  backgroundColor: colors.black,
  paddingTop: 80,
};

const baseFlexibleStyles: FlexStyle = {
  flex: 1,
};

const baseTitleStyles: TextStyle = {
  marginTop: 30,
  paddingHorizontal: 10,
  fontFamily: fonts.family.openSansSemiBold,
  fontSize: fonts.size.XXXL,
  textAlign: 'center',
};

type Theme = {
  container: ViewStyle & FlexStyle;
  flexible: FlexStyle;
  title: TextStyle;
};

const darkThemeStyles = StyleSheet.create<Theme>({
  container: {
    ...baseContainerStyles,
    backgroundColor: theme.scene.dark.backgroundColor,
  },
  flexible: {
    ...baseFlexibleStyles,
  },
  title: {
    ...baseTitleStyles,
    color: theme.scene.dark.titleColor,
  },
});

const lightThemeStyles = StyleSheet.create<Theme>({
  container: {
    ...baseContainerStyles,
    backgroundColor: theme.scene.light.backgroundColor,
  },
  flexible: {
    ...baseFlexibleStyles,
  },
  title: {
    ...baseTitleStyles,
    color: theme.scene.light.titleColor,
  },
});
// #endregion

export default Info;
