const isProduction = process.env.NODE_ENV === 'production';

export const appConfig = Object.freeze({
  // #region environement
  isProduction,
  // #endregion

  // #region redux-presist store
  persistStoreKey: 'mainPersistStore',
  // #endregion
});

export default appConfig;
