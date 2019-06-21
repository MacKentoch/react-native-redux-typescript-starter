// #region colors set
export const colors = Object.freeze({
  black: '#000000',
  mediumBlack: '#333333',
  lightBlack: '#4A4A4A',
  white: '#FFFFFF',
  grey: '#CCCCCC',
  lightGrey: '#F1F2F3',
  blue: '#294E80',
});
// #endregion

// #region theme colors
export const darkColors = Object.freeze({
  header: {
    backgroundColor: colors.mediumBlack,
    buttonColor: colors.white,
  },
});

export const lightColors = Object.freeze({
  header: {
    backgroundColor: colors.lightGrey,
    buttonColor: colors.black,
  },
});
// #endregion
