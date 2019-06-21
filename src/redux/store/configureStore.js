import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../modules/reducers';

// #region create logger:
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});
// #endregion

// #region store enhancer
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
    : compose(applyMiddleware(thunkMiddleware));
// #endregion

export default function configureStore(initialState: any) {
  const store = createStore(reducer, initialState, enhancer);
  const persistor = persistStore(store);

  return { persistor, store };
}
