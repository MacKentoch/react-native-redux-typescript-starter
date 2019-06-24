// import { Dispatch } from 'redux';
// import { GetState } from 'redux-thunk';
import { State } from './types';

// #region constants
const THEME_INIT = 'THEME_INIT';
const THEME_CHANGE = 'THEME_CHANGE';
// #endregion

// #region flow types
type ActionType = 'THEME_INIT' | 'THEME_CHANGE';

type OptionalState = Partial<State>;
type Action = {
  type: ActionType;
} & OptionalState;
// #endregion

// #region initial state
const initialState: State = {
  themeName: 'dark',
};
// #endregion

// #region reducer
export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case THEME_INIT: {
      const { themeName = 'light' } = action;
      return {
        ...state,
        themeName,
      };
    }

    case THEME_CHANGE: {
      const { themeName = 'light' } = action;
      return {
        ...state,
        themeName,
      };
    }

    default:
      return state;
  }
}
// #endregion

// #region action creators
export function initTheme(themeName: ThemeEnum): Action {
  return { type: THEME_INIT, themeName };
}

export function changeTheme(themeName: ThemeEnum): Action {
  return { type: THEME_CHANGE, themeName };
}
// #endregion
