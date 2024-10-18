import { MoonSvg, SunSvg, useTheme } from '@app/ui';
import { cn } from '@app/utils';
import { IconButton } from '../IconButton/IconButton';

export function ToggleThemeButton({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  const lightClasses = 'bg-gray-400 hover:bg-gray-500 active:bg-gray-600';
  const darkClasses = 'bg-stone-400 hover:bg-stone-500 active:bg-stone-600';

  return (
    <IconButton
      onClick={toggleTheme}
      className={cn(
        'p-2',
        theme === 'light' ? lightClasses : darkClasses,
        className
      )}
    >
      {theme === 'light' ? (
        <MoonSvg width={32} height={32} />
      ) : (
        <SunSvg width={32} height={32} />
      )}
    </IconButton>
  );
}

export default ToggleThemeButton;
