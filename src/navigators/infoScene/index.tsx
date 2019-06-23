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
    navigationOptions: ({
      navigation: { goBack },
      // @ts-ignore
      screenProps: { currentTheme = 'light' },
    }: Props) => {
      // @ts-ignore
      const headerTheme = theme.header[currentTheme] || theme.header;

      return {
        headerTitle: <HeaderTitle title="Info" theme={currentTheme} />,
        headerLeft: (
          <NavBackButton onPress={() => goBack('')} theme={currentTheme} />
        ),
        headerRight: <View />,
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

const stackConfig: Partial<StackNavigatorConfig> = {
  initialRouteName: 'Info',
  // @ts-ignore
  gesturesEnabled: true,
};
// #endregion

const RootNavigator = createStackNavigator(routeConfigMap, stackConfig);

export default RootNavigator;
