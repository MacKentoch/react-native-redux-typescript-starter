import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import Spinner from 'react-native-spinkit';
import { colors } from '../../config/colors';

// #region constants
const { white, black } = colors;
// #endregion

function LoadingStore() {
  return (
    <View style={styles.container}>
      <Spinner
        style={styles.spinner}
        isVisible
        size={48}
        type="Bounce"
        color={white}
      />
    </View>
  );
}

LoadingStore.displayName = 'LoadingStore';

// #region styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: black,
  },
  spinner: {},
});
// #endregion

export default LoadingStore;
