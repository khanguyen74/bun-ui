/*
 * Use this hook to get the current theme and a function to toggle between light and dark themes.
 */

import { useCallback } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

export const useTheme = () => {
  const { resolvedTheme: nextTheme, setTheme: setNextTheme } = useNextTheme();

  const toggleTheme = useCallback(() => {
    setNextTheme(nextTheme === 'dark' ? 'light' : 'dark');
  }, [nextTheme, setNextTheme]);
  return { theme: nextTheme, toggleTheme };
};
