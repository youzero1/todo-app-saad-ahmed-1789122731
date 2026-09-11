export type ThemeId = 'blue' | 'red' | 'yellow' | 'green' | 'purple';

export type ThemeOption = { id: ThemeId; label: string; swatch: string };

export const THEMES: ThemeOption[] = [
  { id: 'blue', label: 'Blue', swatch: '#2563eb' },
  { id: 'red', label: 'Red', swatch: '#dc2626' },
  { id: 'yellow', label: 'Yellow', swatch: '#d97706' },
  { id: 'green', label: 'Green', swatch: '#059669' },
  { id: 'purple', label: 'Purple', swatch: '#7c3aed' },
];

export const DEFAULT_THEME: ThemeId = 'blue';
export const THEME_STORAGE_KEY = 'minimal-todos-theme';

export function isThemeId(value: unknown): value is ThemeId {
  return typeof value === 'string' && THEMES.some((theme) => theme.id === value);
}

export function readStoredTheme(): ThemeId {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeId(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function applyTheme(theme: ThemeId): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
}
