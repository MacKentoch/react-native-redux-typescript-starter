export type State = {
  themeName: ThemeEnum;
};

export type ThemeActions = {
  initTheme: (themeName: ThemeEnum) => any;
};
