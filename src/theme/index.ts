import { darkColors, lightColors } from '../config/colors';

class Theme {
  // #region current theme name
  private _currentTheme: ThemeEnum;

  get current() {
    return this._currentTheme;
  }

  set current(theme: ThemeEnum) {
    if (!theme) {
      return;
    }
    this._currentTheme = theme;
    this._updateColors(theme);
  }
  // #endregion

  // #region current theme colors
  private _colors: (typeof lightColors) & (typeof darkColors);

  get colors() {
    return this._colors;
  }
  // #endregion

  constructor(theme?: ThemeEnum) {
    this._currentTheme = theme || 'light';
    this._colors = lightColors;
    this._updateColors(theme || 'light');
  }

  private _updateColors(theme: ThemeEnum) {
    switch (theme) {
      case 'light':
        this._colors = lightColors;
        break;

      case 'dark':
        this._colors = darkColors;
        break;

      default:
        this._colors = lightColors;
    }
  }
}

export const theme = new Theme();

export default theme;
