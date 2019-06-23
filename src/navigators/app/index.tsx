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
      navigation: { getParam },
    }: NavigationScreenProps) => ({
      headerTitle: (
        <HeaderTitle title="Home" theme={getParam('theme', 'light')} />
      ),
      headerLeft: null,
      headerStyle: {
        ...defaultHeaderStyle,
        backgroundColor:
          getParam('theme', 'light') === 'light'
            ? theme.header.light.backgroundColor
            : theme.header.dark.backgroundColor,
        borderBottomWidth:
          getParam('theme', 'light') === 'light'
            ? theme.header.light.borderBottomWidth
            : theme.header.dark.borderBottomWidth,
      },
      headerTintColor:
        getParam('theme', 'light') === 'light'
          ? theme.header.light.tintColor
          : theme.header.dark.tintColor,
    }),
  },
};

const stackConfig = {
  initialRouteName: 'Home',
};
// #endregion

const Navigator = createStackNavigator(routeConfigMap, stackConfig);

export default Navigator;
