import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

export interface UseThemeParams<T> {
  currentTheme: ThemeEnum;
  darkThemeStyles: StyleSheet.NamedStyles<T>;
  lightThemeStyles: StyleSheet.NamedStyles<T>;
}

export function useTheme<T>({
  currentTheme = 'light',
  darkThemeStyles,
  lightThemeStyles,
}: UseThemeParams<T>): [StyleSheet.NamedStyles<T>] {
  const [themedStyles, setThemedStyles] = useState<StyleSheet.NamedStyles<T>>(
    lightThemeStyles,
  );

  useEffect(() => {
    if (currentTheme === 'light') {
      setThemedStyles(lightThemeStyles);
    }

    if (currentTheme === 'dark') {
      setThemedStyles(darkThemeStyles);
    }
  }, [currentTheme]);

  return [themedStyles];
}
