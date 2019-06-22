import React, { useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TextStyle,
  FlexStyle,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { NavigationScreenProps } from 'react-navigation';
import { theme } from '../../config/theme';
import { fonts } from '../../config/fonts';
import Footer from './footer';
import { MappedProps, MappedDispatchToProps } from './index';
import { useTheme, UseThemeParams } from '../../hooks/useTheme';
// #region types

type Props = {} & MappedProps & MappedDispatchToProps & NavigationScreenProps;
// #endregion

function Home({ navigation: { navigate }, themeName }: Props) {
  const useThemeParams: UseThemeParams<Theme> = {
    currentTheme: themeName,
    darkThemeStyles,
    lightThemeStyles,
  };
  const [themedStyles] = useTheme<Theme>(useThemeParams);

  const navigateTo = useCallback(
    (routeName: string = '') => () => {
      routeName && navigate(routeName);
    },
    [],
  );
  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.contentContainer}>
        <Text style={themedStyles.title}>Home scene</Text>

        <View style={themedStyles.flexible} />

        <Touchable
          style={themedStyles.moreInfoButton}
          onPress={navigateTo('Info')}
        >
          <Text style={themedStyles.moreInfoButtonText}>More info</Text>
        </Touchable>

        <Footer />
      </View>
    </View>
  );
}

Home.displayName = 'Home';

// #region styles

// #region common styles
const baseContainerStyle: FlexStyle = {
  flex: 1,
};
const baseTitleStyle: TextStyle = {
  marginTop: 30,
  paddingHorizontal: 10,
  fontFamily: fonts.family.openSansSemiBold,
  fontSize: fonts.size.XXXL,
  // @ts-ignore
  textAlign: 'center',
};
const baseMoreInfoButton: ViewStyle & FlexStyle = {
  height: 40,
  marginHorizontal: 40,
  marginVertical: 50,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
};
// #endregion

type Theme = {
  container: ViewStyle;
  contentContainer: ViewStyle;
  flexible: ViewStyle;
  title: TextStyle;
  moreInfoButton: ViewStyle;
  moreInfoButtonText: TextStyle;
};

const darkThemeStyles = StyleSheet.create<Theme>({
  container: {
    ...baseContainerStyle,
    backgroundColor: theme.scene.dark.backgroundColor,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  flexible: {
    flex: 1,
  },
  title: {
    ...baseTitleStyle,
    color: theme.scene.dark.titleColor,
  },
  moreInfoButton: {
    ...baseMoreInfoButton,
    backgroundColor: theme.button.dark.backgroundColor,
  },
  moreInfoButtonText: {
    fontFamily: fonts.family.openSansSemiBoldItalic,
    fontSize: fonts.size.L,
  },
});

const lightThemeStyles = StyleSheet.create({
  container: {
    ...baseContainerStyle,
    backgroundColor: theme.scene.light.backgroundColor,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  flexible: {
    flex: 1,
  },
  // @ts-ignore
  title: {
    ...baseTitleStyle,
    color: theme.scene.light.titleColor,
  },
  // @ts-ignore
  moreInfoButton: {
    ...baseMoreInfoButton,
    backgroundColor: theme.button.light.backgroundColor,
  },
  moreInfoButtonText: {
    fontFamily: fonts.family.openSansSemiBoldItalic,
    fontSize: fonts.size.L,
  },
});
// #endregion

export default Home;
