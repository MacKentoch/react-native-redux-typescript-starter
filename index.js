/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { AppRegistry, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './src/redux/store/configureStore';
import LoadingStore from './src/components/loadingStore/index.ts';
import App from './src/index.ts';
import { name as appName } from './app.json';

// Ensure LayoutAnimation works on Android:
/* eslint-disable no-unused-expressions */
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
/* eslint-enable no-unused-expressions */

// #region instanciate store and persistor
const { persistor, store } = configureStore();
export const currentStore = store;
// #endregion

// #region top root component
const onBeforeLift = () => {
  // take some action before the gate lifts
};

// Application connected to redux
const RNReduxTypescriptStarter = () => (
  <Provider store={store}>
    <PersistGate
      loading={<LoadingStore />}
      onBeforeLift={onBeforeLift}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNReduxTypescriptStarter);
