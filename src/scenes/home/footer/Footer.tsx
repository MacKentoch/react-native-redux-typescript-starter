import React from 'react';
import { StyleSheet, View } from 'react-native';

function Footer() {
  return <View style={styles.footer} />;
}

Footer.displayName = 'Footer';

// #region styles
const styles = StyleSheet.create({
  footer: {
    paddingBottom: 50,
  },
});
// #endregion

export default Footer;
