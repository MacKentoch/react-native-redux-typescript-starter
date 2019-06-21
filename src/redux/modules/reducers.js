import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { appConfig } from '../../config/appConfig';
import theme from './theme';

// #region all reducers
export const reducers = {
  theme,
};
// #endregion

// #region persist config
const config = {
  timeout: 10000, // prevent rehydrate called after timeout when debugging with devTools
  key: appConfig.persistStoreKey,
  storage,
  whitelist: [],
};
// #endregion

// #region combine and persist reducers
const reducer = persistCombineReducers(config, {
  ...reducers,
});
// #endregion

export default reducer;
