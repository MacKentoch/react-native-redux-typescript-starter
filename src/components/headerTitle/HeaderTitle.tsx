import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../config/colors';
import { fonts } from '../../config/fonts';

// #region types
type Props = { title?: string };
// #endregion

// #region constants
const { white } = colors;
const { family, size } = fonts;
const defaultTitle = '';
// #endregion

function HeaderTitle({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.titleText}>
        {!title ? defaultTitle : title}
      </Text>
    </View>
  );
}

// #region statics
HeaderTitle.displayName = 'HeaderTitle';
// #endregion

// #region styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: family.openSansBold,
    fontSize: size.XL,
    color: white,
  },
});
// #endregion

export default HeaderTitle;
