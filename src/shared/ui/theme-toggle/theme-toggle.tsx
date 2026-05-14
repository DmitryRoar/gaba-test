'use client';

import { useTheme } from '@hooks';

import { Button } from '../button';
import { MoonIcon, SunIcon } from '../icon';

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <Button
      variant="ghost"
      size="sm"
      isIconOnly
      onPress={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ?
        <SunIcon />
      : <MoonIcon />}
    </Button>
  );
};
