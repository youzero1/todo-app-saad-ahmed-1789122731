import { THEMES, type ThemeId } from '@/lib/theme';

type ThemeSwitcherProps = { theme: ThemeId; onChange: (theme: ThemeId) => void };

export function ThemeSwitcher({ theme, onChange }: ThemeSwitcherProps) {
  return (
    <div role="group" aria-label="Color theme" className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-1.5 shadow-[0_6px_18px_rgba(45,55,90,0.06)]">
      {THEMES.map((option) => {
        const selected = option.id === theme;
        return (
          <button
            key={option.id}
            type="button"
            aria-label={`${option.label} theme`}
            aria-pressed={selected}
            onClick={() => onChange(option.id)}
            style={{ backgroundColor: option.swatch }}
            className={`h-5 w-5 rounded-full transition ${selected ? 'ring-2 ring-offset-2 ring-offset-white ring-slate-900/70 scale-110' : 'opacity-70 hover:opacity-100'}`}
          />
        );
      })}
    </div>
  );
}
