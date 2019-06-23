import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  StatusBarPropsAndroid,
  StatusBarPropsIOS,
} from 'react-native';
import { NavigationScreenProps, createAppContainer } from 'react-navigation';
import RootNavigator from './navigators/root';
import { MappedDispatchToProps, MappedProps } from './index';
// import { theme } from './theme';

// #region types
type Props = {} & NavigationScreenProps & MappedProps & MappedDispatchToProps;
// #endregion

// #region constants
const StatusBarProps: StatusBarPropsIOS &
  StatusBarPropsAndroid = Platform.select({
  ios: {
    barStyle: 'light-content',
  },
  android: {
    // status bar android will be nice even with drawer opened:
    translucent: true,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    animated: true,
  },
});

const AppContainer = createAppContainer(RootNavigator);
// #endregion

function App({ themeName: currentTheme }: Props) {
  return (
    <View style={styles.container}>
      {/* // @ts-ignore */}
      <StatusBar {...StatusBarProps} />
      <AppContainer screenProps={{ currentTheme }} />
    </View>
  );
}

// #region statics
App.displayName = 'App';
// #endregion

// #region styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
});
// #endregion

export default App;
