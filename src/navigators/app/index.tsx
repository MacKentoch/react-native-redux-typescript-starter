// @ts-ignore
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { createStackNavigator, NavigationScreenProps } from 'react-navigation';
import HeaderTitle from '../../components/headerTitle';
import { colors } from '../../config/colors';
import { theme } from '../../config/theme';
import Home from '../../scenes/home';

// #region constants
const defaultHeaderStyle = {
  backgroundColor: colors.mediumBlack,
  borderBottomWidth: 0,
  ...Platform.select({
    ios: {},
    android: {
      paddingTop: StatusBar.currentHeight,
      // @ts-ignore
      height: StatusBar.currentHeight + 56,
      elevation: 0,
    },
  }),
};

const routeConfigMap = {
  Home: {
    screen: Home,
    navigationOptions: ({
      // @ts-ignore
      screenProps: { currentTheme = 'light' },
    }: NavigationScreenProps) => {
      // @ts-ignore
      const headerTheme = theme.header[currentTheme] || theme.header;

      return {
        headerTitle: <HeaderTitle title="Home" />,
        headerLeft: null,
        headerStyle: {
          ...defaultHeaderStyle,
          backgroundColor: headerTheme.backgroundColor,
          borderBottomWidth: headerTheme.borderBottomWidth,
        },
        headerTintColor: headerTheme.tintColor,
      };
    },
  },
};

const stackConfig = {
  initialRouteName: 'Home',
};
// #endregion

const Navigator = createStackNavigator(routeConfigMap, stackConfig);

export default Navigator;
