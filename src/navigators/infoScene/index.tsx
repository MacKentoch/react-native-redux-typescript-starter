import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import {
  createStackNavigator,
  NavigationScreenProps,
  StackNavigatorConfig,
} from 'react-navigation';
import HeaderTitle from '../../components/headerTitle';
import NavBackButton from '../../components/navBackButton';
import { colors } from '../../config/colors';
import Info from '../../scenes/info';
import { theme } from '../../config/theme';

type Props = {} & NavigationScreenProps<any>;

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
  Info: {
    screen: Info,
    navigationOptions: ({ navigation: { goBack, getParam } }: Props) => ({
      headerTitle: (
        <HeaderTitle title="Info" theme={getParam('theme', 'light')} />
      ),
      headerLeft: (
        <NavBackButton
          onPress={() => goBack('')}
          theme={getParam('theme', 'light')}
        />
      ),
      headerRight: <View />,
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

const stackConfig: Partial<StackNavigatorConfig> = {
  initialRouteName: 'Info',
  // @ts-ignore
  gesturesEnabled: true,
};
// #endregion

const RootNavigator = createStackNavigator(routeConfigMap, stackConfig);

export default RootNavigator;
