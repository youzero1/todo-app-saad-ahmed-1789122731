import { useEffect, useState } from 'react';
import { applyTheme, readStoredTheme, THEME_STORAGE_KEY, type ThemeId } from '@/lib/theme';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeId>(() => readStoredTheme());

  useEffect(() => {
    applyTheme(theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  }, [theme]);

  return { theme, setTheme };
}
