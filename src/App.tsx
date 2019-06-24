import React, { useEffect } from 'react';
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
  useEffect(() => {
    if (currentTheme === 'light') {
      StatusBar.setBarStyle('dark-content');
    }

    if (currentTheme === 'dark') {
      StatusBar.setBarStyle('light-content');
    }
  }, [currentTheme]);

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
