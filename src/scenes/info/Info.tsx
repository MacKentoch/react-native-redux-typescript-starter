import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { NavigationScreenProps } from 'react-navigation';
import { colors } from '../../config/colors';
import { fonts } from '../../config/fonts';

function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info scene here</Text>
      <View style={styles.flexible} />
    </View>
  );
}

Info.displayName = 'Info';

// #region styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.black,
    paddingTop: 80,
  },
  flexible: {
    flex: 1,
  },
  title: {
    marginTop: 30,
    paddingHorizontal: 10,
    color: colors.white,
    fontFamily: fonts.family.openSansSemiBold,
    fontSize: fonts.size.XXXL,
    textAlign: 'center',
  },
});
// #endregion

export default Info;
