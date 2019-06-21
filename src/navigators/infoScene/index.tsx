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

type Props = {} & NavigationScreenProps<any>;

// #region constants
const defaultHeaderStyle = {
  backgroundColor: colors.mediumBlack,
  borderBottomWidth: 0,
  ...Platform.select({
    ios: {},
    android: {
      paddingTop: StatusBar.currentHeight,
      height: StatusBar.currentHeight || 0 + 56,
      elevation: 0,
    },
  }),
};

const routeConfigMap = {
  Info: {
    screen: Info,
    navigationOptions: ({ navigation: { goBack } }: Props) => ({
      headerTitle: <HeaderTitle title="Info" />,
      headerLeft: <NavBackButton onPress={() => goBack('')} />,
      headerRight: <View />,
      headerStyle: { ...defaultHeaderStyle },
      headerTintColor: colors.white,
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
