import { colors } from './colors';

export const theme = Object.freeze({
  header: {
    dark: {
      backgroundColor: colors.mediumBlack,
      buttonColor: colors.white,
    },
    light: {
      backgroundColor: colors.white,
      buttonColor: colors.lightGrey,
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
