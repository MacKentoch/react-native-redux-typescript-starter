import React from 'react';
import { StyleSheet, GestureResponderEvent } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/colors';

// #region types
type Props = {
  onPress: (event: GestureResponderEvent) => any;
  theme?: ThemeEnum;
};
// #endregion

// #region constants
const DEFAUL_UNDERLAY_COLOR = colors.lightBlack;
// #endregion

function NavBackButton({ onPress, theme = 'light' }: Props) {
  return (
    <Touchable
      style={styles.button}
      underlayColor={DEFAUL_UNDERLAY_COLOR}
      onPress={onPress}
    >
      <Icon name="ios-arrow-back" size={28} color={colors.white} />
    </Touchable>
  );
}

NavBackButton.displayName = 'NavBackButton';

// #region styles
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
// #endregion

export default NavBackButton;
