import { colors } from './colors';

export const theme = Object.freeze({
  header: {
    dark: {
      backgroundColor: colors.mediumBlack,
      buttonTextColor: colors.white,
      buttonUnderlayColor: colors.lightBlack,
      buttonIconColor: colors.white,
      tintColor: colors.white,
      borderBottomWidth: 0,
    },
    light: {
      backgroundColor: colors.white,
      buttonTextColor: colors.black,
      buttonUnderlayColor: colors.lightBlack,
      buttonIconColor: colors.white,
      tintColor: colors.black,
      borderBottomWidth: 1,
    },
  },

  scene: {
    dark: {
      titleColor: colors.white,
      backgroundColor: colors.black,
    },
    light: {
      titleColor: colors.mediumBlack,
      backgroundColor: colors.white,
    },
  },

  button: {
    dark: {
      backgroundColor: colors.blue,
      textColor: colors.white,
    },
    light: {
      backgroundColor: colors.blue,
      textColor: colors.white,
    },
  },
});
