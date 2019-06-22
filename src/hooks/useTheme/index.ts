import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

export interface UseThemeParams<T> {
  currentTheme: ThemeEnum;
  darkThemeStyles: StyleSheet.NamedStyles<T>;
  lightThemeStyles: StyleSheet.NamedStyles<T>;

  navigation?: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

export function useTheme<T>({
  currentTheme = 'light',
  darkThemeStyles,
  lightThemeStyles,
  navigation,
}: UseThemeParams<T>): [StyleSheet.NamedStyles<T>] {
  const [themedStyles, setThemedStyles] = useState<StyleSheet.NamedStyles<T>>(
    lightThemeStyles,
  );

  useEffect(() => {
    if (currentTheme === 'light') {
      setThemedStyles(lightThemeStyles);
      navigation && navigation.setParams({ theme: currentTheme });
    }

    if (currentTheme === 'dark') {
      setThemedStyles(darkThemeStyles);
      navigation && navigation.setParams({ theme: currentTheme });
    }
  }, [currentTheme]);

  return [themedStyles];
}
