import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { NavigationScreenProps } from 'react-navigation';
import { colors } from '../../config/colors';
import { fonts } from '../../config/fonts';
import Footer from './footer';
import { MappedProps, MappedDispatchToProps } from './index';
// #region types

type Props = {} & MappedProps & MappedDispatchToProps & NavigationScreenProps;
// #endregion

function Home({ navigation: { navigate } }: Props) {
  const navigateTo = useCallback(
    (routeName: string = '') => () => {
      routeName && navigate(routeName);
    },
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Home scene</Text>

        <View style={styles.flexible} />

        <Touchable style={styles.moreInfoButton} onPress={navigateTo('Info')}>
          <Text style={styles.moreInfoButtonText}>More info</Text>
        </Touchable>

        <Footer />
      </View>
    </View>
  );
}

Home.displayName = 'Home';

// #region styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
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
  moreInfoButton: {
    height: 40,
    marginHorizontal: 40,
    marginVertical: 50,
    backgroundColor: colors.blue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreInfoButtonText: {
    fontFamily: fonts.family.openSansSemiBoldItalic,
    fontSize: fonts.size.L,
  },
});
// #endregion

export default Home;
